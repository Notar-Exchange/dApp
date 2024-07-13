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
import { env } from "@/env";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";

const createWeb3Auth = () =>
  new Web3AuthNoModal({
    clientId,
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
    privateKeyProvider,
    enableLogging: true,
  });

const globalForWeb3Auth = window as unknown as {
  web3auth: ReturnType<typeof createWeb3Auth> | undefined;
};

const web3auth = globalForWeb3Auth.web3auth ?? createWeb3Auth();

if (env.NEXT_PUBLIC_ENV !== "production") globalForWeb3Auth.web3auth = web3auth;

if (!web3auth.connectedAdapterName) {
  const adapter = new MetamaskAdapter();
  web3auth.configureAdapter(adapter);
}

// - Public

export { web3auth };
