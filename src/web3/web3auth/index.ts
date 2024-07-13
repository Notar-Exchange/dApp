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

const createWeb3Auth = () => {
  const web3auth = new Web3AuthNoModal({
    clientId,
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
    privateKeyProvider,
    enableLogging: true,
  });

  const adapter = new MetamaskAdapter();
  web3auth.configureAdapter(adapter);

  return web3auth;
};


const web3auth = createWeb3Auth();

export { web3auth };