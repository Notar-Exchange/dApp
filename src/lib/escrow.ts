/*
 * File: /src/lib/escrow.ts
 * Project: notar
 * Created: Sunday, 14th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import { keccak256 } from "ethers/crypto";
import { AbiCoder } from "ethers/abi";

export function generateEscrowId(
  _receiver: string,
  _receiverHandle: string,
  _amount: string,
  _duration: string,
) {
  const data = [_receiver, _receiverHandle, _amount, _duration];

  const bytes = AbiCoder.defaultAbiCoder().encode(
    ["address", "bytes32", "uint256", "uint256"],
    data,
  );

  const hash = keccak256(bytes);

  return hash;
}
