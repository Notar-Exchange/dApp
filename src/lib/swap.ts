/*
 * File: /src/lib/swap.ts
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

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
