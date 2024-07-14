/*
 * File: /src/components/web3/wagmi-provider.tsx
 * Project: notar
 * Created: Sunday, 14th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

"use client";

import type { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type Config, type State, WagmiProvider } from "wagmi";

const client = new QueryClient();

type Props = PropsWithChildren<{
  config: Config;
  initialState?: State;
}>;

const Provider = ({ children, config, initialState }: Props) => {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};

export default Provider;
export type ProviderProps = Props;
