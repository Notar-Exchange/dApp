/*
 * File: /src/web3/contracts/contract.ts
 * Project: notar
 * Created: Sunday, 14th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import { contractAbi } from "@/web3/abi/contract.abi";
import { env } from "@/env";

// - Constants
export const contractConfig = {
  abi: contractAbi,
  address: env.NEXT_PUBLIC_CONTRACT_ADDRESS,
} as const;

// TODO: Add Notar Contract
