/*
 * File: /src/web3/lib/chain.ts
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import { scrollSepolia } from "wagmi/chains";

export const Chain = {
  sepoliaScroll: {
    chainId: scrollSepolia.id,
    chainIdHex: "0x8274F",
    chainName: "Sepolia Scroll",
    nativeCurrency: {
      name: "Etherium",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: "https://sepolia-rpc.scroll.io",
    blockExplorerUrls: "https://sepolia.etherscan.io",
  },
};
