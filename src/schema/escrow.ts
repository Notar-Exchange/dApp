/*
 * File: /src/schema/escrow.ts
 * Project: notar
 * Created: Sunday, 14th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

export enum EscrowState {
  IDLE = 0,
  RELEASED = 1,
  REFUNDED = 2,
}

export type EscrowInfo = {
  amount: number;
  deadline: number;
  escrowId: string;
  receiver: string;
  receiverHandle: string;
  sender: string;
  state: EscrowState;
};
