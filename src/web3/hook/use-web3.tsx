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
import { signIn, useSession, signOut } from "next-auth/react";

export type UseWeb3AuthData = ReturnType<typeof useWeb3>;

export const useWeb3 = () => {
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [isConnected, setConnected] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const { status } = useSession();

  // - Effects
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

  useEffect(() => {
    setAuthenticated(status === "authenticated");
  }, [status]);

  // - Actions
  const login = useCallback(async () => {
    if (isConnected) {
      return;
    }

    try {
      setLoading(true);

      const web3authProvider = await web3auth.connectTo(
        WALLET_ADAPTERS.METAMASK,
      );
      setProvider(web3authProvider);

      if (web3auth.connected) {
        setConnected(true);
      }
    } finally {
      setLoading(false);
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
    await signOut({ callbackUrl: "/", redirect: false });
  }, []);

  const getAddress = useCallback(async () => {
    if (!provider) {
      console.error("provider not initialized yet");
      return null;
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

  useEffect(() => {
    if (!isConnected) {
      setAddress(null);
      return;
    }

    const loadAddress = async () => {
      const value = await getAddress();
      setAddress(value ?? null);
    };

    loadAddress().catch(console.error);
  }, [isConnected, getAddress]);

  const authenticate = useCallback(async () => {
    try {
      if (!isConnected) {
        await login();
      }

      if (status === "unauthenticated" && isConnected) {
        const address = await getAddress();
        console.log("Address available, signing in", address);
        await signIn("credentials", { address, redirect: false });
      }

      if (status === "authenticated" && isConnected) {
        console.log("Already authenticated");
      }
    } catch (error) {
      console.log("Authentication failed with error:", error);
      window.alert(error);
    }
  }, [status, isConnected, getAddress, login]);

  useEffect(() => {
    if (isConnected && status === "unauthenticated") {
      authenticate().catch(console.error);
    }

    if (!isConnected && status === "authenticated") {
      console.log("Disconnected!");
      setAuthenticated(false);
      logout().catch(console.error);
      return;
    }
  }, [status, isConnected, authenticate, logout]);

  const contextValue = useMemo(
    () => ({
      isConnected,
      isAuthenticated,
      isLoading,
      address,
    }),
    [isConnected, isAuthenticated, isLoading, address],
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
