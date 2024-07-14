/*
 * File: /src/web3/contracts/contract.ts
 * Project: notar
 * Created: Sunday, 14th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import type { Address } from "viem";

import { contractAbi } from "@/web3/abi/contract.abi";
import { usdtAbi } from "@/web3/abi/usdt.abi";

import { env } from "@/env";
import { writeContract, waitForTransactionReceipt } from "@wagmi/core";
import { Chain } from "@/web3/lib/chain";
import { wagmiConfig } from "@/web3/wagmi/config";
import { parseUnits } from "ethers/utils";
import { convertReceiverToHash } from "@/lib/swap";

// - Types
export type CreateEscrowParams = {
  receiver: string;
  receiverHandle: string;
  amount: number;
  duration: number;
};

export enum EscrowState {
  IDLE = 0,
  RELEASED = 1,
  REFUNDED = 2,
}

// - Constants
export const contractConfig = {
  abi: contractAbi,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  address: env.NEXT_PUBLIC_CONTRACT_ADDRESS as unknown as Address,
} as const;

export const usdtConfig = {
  abi: usdtAbi,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  address: env.NEXT_PUBLIC_TOKEN_ADDRESS as Address,
};

// - Actions
export async function writeCreateEscrow(params: CreateEscrowParams) {
  // Call approve
  const chainId = Chain.sepoliaScroll.chainId;

  const receiverHash = convertReceiverToHash(params.receiver);

  const rawAmount = parseUnits(
    params.amount.toString(),
    Chain.sepoliaScroll.nativeCurrency.decimals,
  );

  console.log("writeCreateEscrow::calling", params);

  const approveHash = await writeContract(wagmiConfig, {
    ...usdtConfig,
    functionName: "approve",
    args: [env.NEXT_PUBLIC_CONTRACT_ADDRESS, rawAmount],
    chainId,
  });

  console.log("writeCreateEscrow::approveHash", approveHash);

  const approveReceipt = await waitForTransactionReceipt(wagmiConfig, {
    hash: approveHash,
    confirmations: 2,
    chainId,
  });

  console.log("writeCreateEscrow::approveReceipt", approveReceipt);
  console.log("writeCreateEscrow::createEscrow", "args:", [
    params.receiver,
    receiverHash,
    rawAmount,
    BigInt(params.duration),
  ]);

  const createEscrowHash = await writeContract(wagmiConfig, {
    ...contractConfig,
    functionName: "createEscrow",
    args: [params.receiver, receiverHash, rawAmount, BigInt(params.duration)],
    chainId,
  });

  console.log("writeCreateEscrow::createEscrowHash", createEscrowHash);

  const createEscrowReceipt = await waitForTransactionReceipt(wagmiConfig, {
    hash: createEscrowHash,
    confirmations: 2,
    chainId,
  });

  console.log("writeCreateEscrow::createEscrowReceipt", createEscrowReceipt);
}

export async function readEscrowInfo(escrowId: string): Promise<EscrowState> {
  // TODO: Call getEscrowInfo
  // Output read escrow

  return EscrowState.IDLE;
}
