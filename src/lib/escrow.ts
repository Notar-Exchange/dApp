/*
 * File: /src/lib/escrow.ts
 * Project: notar
 * Created: Sunday, 14th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import { EscrowState, type EscrowInfo } from "@/schema/escrow";

export function safeParseEscrowInfo(
  data?: Record<string, unknown>,
): EscrowInfo {
  return {
    amount: Number(data?.amount ?? 0),
    deadline: Number(data?.deadline ?? 0),
    escrowId: String(data?.escrowId) ?? "",
    receiver: String(data?.receiver) ?? "",
    receiverHandle: String(data?.receiverHandle) ?? "",
    sender: String(data?.sender) ?? "",
    state: Number(data?.state) ?? EscrowState.IDLE,
  };
}

export function parseEscrowState(state: EscrowState): string {
  switch (state) {
    case EscrowState.IDLE:
      return "Idle";
    case EscrowState.RELEASED:
      return "Released";
    case EscrowState.REFUNDED:
      return "Refunded";
    default:
      return "Unknown";
  }
}
