/*
 * File: /src/web3/web3auth/index.ts
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

"use client";

import { clientId, privateKeyProvider } from "./config";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { WEB3AUTH_NETWORK } from "@web3auth/base";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";

export type Web3Auth = ReturnType<typeof createWeb3Auth>;

let web3auth: Web3Auth;

const createWeb3Auth = () => {
  const web3auth = new Web3AuthNoModal({
    clientId,
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
    privateKeyProvider,
    enableLogging: true,
  });

  const adapter = new MetamaskAdapter({
    clientId,
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  });

  web3auth.configureAdapter(adapter);

  return web3auth;
};

const getWeb3Auth = () => {
  if (!web3auth) {
    web3auth = createWeb3Auth();
  }

  return web3auth;
};

export { getWeb3Auth };
