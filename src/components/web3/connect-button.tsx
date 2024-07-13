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

import { Button, type ButtonProps } from "@/components/ui/button";
import { useWeb3, type UseWeb3AuthData } from "@/web3/hook/use-web3";

type Props = ButtonProps;

const loadTitle = (web3: UseWeb3AuthData): string => {
  if (!web3.isConnected) {
    return "Connect Wallet";
  }

  const address = web3.address;
  if (!address) {
    return "Re-Connect Wallet";
  }

  return address.slice(0, 8);
};

function ConnectButton(props: Props) {
  const web3 = useWeb3();

  return (
    <Button shape="pill" type="button" {...props} onClick={web3.login}>
      {loadTitle(web3)}
    </Button>
  );
}

export default ConnectButton;
