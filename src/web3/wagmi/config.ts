/*
 * File: /src/web3/wagmi/config.ts
 * Project: notar
 * Created: Sunday, 14th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

"use client";

import { http, createConfig } from "wagmi";
import { scrollSepolia } from "wagmi/chains";

export const wagmiConfig = createConfig({
  chains: [scrollSepolia],
  transports: {
    [scrollSepolia.id]: http(),
  },
});
