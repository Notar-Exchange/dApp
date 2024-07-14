/*
 * File: /src/lib/swap.ts
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import { keccak256 } from "ethers/crypto";
import { parseUnits, toUtf8Bytes } from "ethers/utils";
import { AbiCoder } from "ethers/abi";

export const replaceCommasWithPeriods = (input?: string) => {
  return input?.replace(/,/g, ".");
};

export function validateDecimalInput(value?: unknown): boolean {
  // 1. Check if value is a string
  if (typeof value !== "string") return false;

  // 2. Check if value is empty
  if (value === "") return true;

  // 3. Check if value starts with "0" and is not "0."
  if (value?.length > 1 && value.startsWith("0") && value?.[1] !== ".") {
    return false;
  }

  // 4. Allow only one dot
  const parts = value?.split(".");
  if (parts.length > 2) {
    return false;
  }

  // 5. Ensure all characters are numbers except the single dot
  if (!/^\d*\.?\d{0,10}$/.test(value)) {
    return false;
  }

  // 6. Check if the input is a valid number
  if (isNaN(parseFloat(value))) {
    return false;
  }

  return true;
}

export function calculateRateValue(value: number, rate: number) {
  const result = value * rate;
  return Number(result.toFixed(5));
}

export function generateEscrowId(
  _receiver: string,
  _receiverHandle: string,
  _amount: string,
  _duration: string,
) {
  const rawAmount = parseUnits(_amount, 18);
  const rawDuration = BigInt(_duration);
  const rawHandler = convertReceiverToHash(_receiverHandle);

  const data = [_receiver, rawHandler, rawAmount, rawDuration];

  console.log(data);

  const bytes = AbiCoder.defaultAbiCoder().encode(
    ["address", "bytes32", "uint256", "uint256"],
    data,
  );

  const hash = keccak256(bytes);

  return hash;
}

export function convertReceiverToHash(receiver: string) {
  return keccak256(toUtf8Bytes(receiver));
}
