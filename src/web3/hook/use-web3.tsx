/*
 * File: /src/web3/hook/use-web3.tsx
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

"use client";

import type { IProvider } from "@web3auth/base";
import { useEffect, useState, useCallback, useMemo } from "react";
import { web3auth } from "@/web3/web3auth";
import { BrowserProvider } from "ethers/providers";
import { isAddress } from "ethers/address";
import { formatEther } from "ethers/utils";
import { WALLET_ADAPTERS } from "@web3auth/base";
// import { useSession } from "next-auth/react";

export type UseWeb3AuthData = ReturnType<typeof useWeb3>;

export const useWeb3 = () => {
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [isConnected, setConnected] = useState(false);
  const [isAuthenticated /*setAuthenticated*/] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  // const { status } = useSession();

  useEffect(() => {
    const init = async () => {
      try {
        await web3auth.init();
        setProvider(web3auth.provider);

        if (web3auth.connected) {
          setConnected(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    ~init();
  }, []);

  const login = useCallback(async () => {
    if (isConnected) {
      return;
    }

    const web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.METAMASK);
    setProvider(web3authProvider);

    if (web3auth.connected) {
      setConnected(true);
    }
  }, [isConnected]);

  const getUserInfo = useCallback(async () => {
    const user = await web3auth.getUserInfo();
    console.log(user);
    return user;
  }, []);

  const logout = useCallback(async () => {
    await web3auth.logout();
    setProvider(null);
    setConnected(false);
    console.log("logged out");
  }, []);

  const getAddress = useCallback(async () => {
    if (!provider) {
      console.error("provider not initialized yet");
      return;
    }

    const ethersProvider = new BrowserProvider(provider);

    // Get user's Ethereum public address
    const signer = await ethersProvider.getSigner();
    const address = await signer.getAddress();
    console.log(address);

    return address;
  }, [provider]);

  const getBalance = useCallback(async () => {
    if (!provider) {
      console.error("provider not initialized yet");
      return;
    }

    const ethersProvider = new BrowserProvider(provider);

    // Get user's Ethereum public address
    const address = await getAddress();
    if (!isAddress(address)) {
      console.error("invalid address");
      return;
    }

    // Get user's balance in ether
    const balance = formatEther(
      await ethersProvider.getBalance(address), // Balance is in wei
    );

    console.log(balance);
    return balance;
  }, [provider, getAddress]);

  const signMessage = useCallback(
    async (message: string) => {
      if (!provider) {
        console.error("provider not initialized yet");
        return;
      }

      const ethersProvider = new BrowserProvider(provider);
      const signer = await ethersProvider.getSigner();

      // Sign the message
      const signedMessage = await signer.signMessage(message);

      console.log(signedMessage);

      return signedMessage;
    },
    [provider],
  );

  // useEffect(() => {
  //   setAuthenticated(status === "authenticated");
  // }, [status]);

  useEffect(() => {
    if (!isConnected) {
      setAddress(null);
      return;
    }

    const loadAddress = async () => {
      const value = await getAddress();
      setAddress(value ?? null);
    };

    ~loadAddress();
  }, [isConnected, getAddress]);

  const contextValue = useMemo(
    () => ({
      isConnected,
      isAuthenticated,
      address,
    }),
    [isConnected, isAuthenticated, address],
  );

  return {
    ...contextValue,
    login,
    logout,
    getAddress,
    getBalance,
    signMessage,
    getUserInfo,
  };
};
