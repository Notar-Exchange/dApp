/*
 * File: /src/components/web3/button.tsx
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

"use client";

import type { ReactNode } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useWeb3, type UseWeb3AuthData } from "@/web3/hook/use-web3";
import { Loader2 } from "lucide-react";

type Props = ButtonProps;

const loadTitle = (
  isLoading?: boolean | null,
  isConnected?: boolean | null,
  address?: string | null,
): ReactNode => {
  if (isLoading) {
    return <Loader2 className="animate-spin" />;
  }

  if (!isConnected) {
    return "Connect Wallet";
  }

  if (!address) {
    return "Re-Connect Wallet";
  }

  return address.slice(0, 8);
};

function ConnectButton(props: Props) {
  const web3 = useWeb3();

  return (
    <Button
      shape="pill"
      type="button"
      {...props}
      onClick={web3?.isConnected ? web3?.logout : web3?.login}
      disabled={web3?.isLoading}
    >
      {loadTitle(web3?.isLoading, web3?.isConnected, web3?.address)}
    </Button>
  );
}

export default ConnectButton;
