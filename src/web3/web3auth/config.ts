/*
 * File: /src/web3/web3auth/config.ts
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import { CHAIN_NAMESPACES, type CustomChainConfig } from "@web3auth/base";
import { Chain } from "@/web3/lib/chain";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { env } from "@/env";

// - Private
export const chainConfig: CustomChainConfig = {
  chainId: Chain.sepoliaScroll.chainId,
  rpcTarget: Chain.sepoliaScroll.rpcUrls,
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  displayName: Chain.sepoliaScroll.chainName,
  blockExplorerUrl: Chain.sepoliaScroll.blockExplorerUrls,
  ticker: "ETH",
  tickerName: "Ethereum",
  logo: "https://images.toruswallet.io/eth.svg",
};

export const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig },
});

export const clientId = env.WEB3_CLIENT_ID;
