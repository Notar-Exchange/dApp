/* eslint-disable @typescript-eslint/no-unsafe-argument */
/*
 * File: /src/components/escrow/progress.tsx
 * Project: notar
 * Created: Sunday, 14th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

"use client";

import { parseEscrowState } from "@/lib/escrow";
import { useEscrowInfo } from "@/web3/contracts/contract";
import { Loader2Icon } from "lucide-react";

function EscrowProgress({ escrowId }: { escrowId: string }) {
  const escrowInfo = useEscrowInfo(escrowId);

  if (escrowInfo.isFetching) {
    return (
      <div className="flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Escrow Progress
        </h1>
        {escrowInfo.isFetching && <Loader2Icon className="animate-spin" />})
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-12 px-4 py-16">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        Escrow Progress
      </h1>

      <div className="w-full space-y-2">
        <h3 className="text-xl">State</h3>
        <p>{parseEscrowState(escrowInfo.data?.state)}</p>
      </div>

      <div className="w-full space-y-2">
        <h3 className="text-xl">Escrow ID</h3>
        <p>{escrowId}</p>
      </div>

      <div className="w-full space-y-2">
        <h3 className="text-xl">Amount</h3>
        <p>{escrowInfo.data?.amount}</p>
      </div>

      <div className="w-full space-y-2">
        <h3 className="text-xl">Deadline</h3>
        <p>{escrowInfo.data?.deadline}</p>
      </div>

      <div className="w-full space-y-2">
        <h3 className="text-xl">Receiver</h3>
        <p>{escrowInfo.data?.receiver}</p>
      </div>

      <div className="w-full space-y-2">
        <h3 className="text-xl">Receiver Handle</h3>
        <p>{escrowInfo.data?.receiverHandle}</p>
      </div>

      <div className="w-full space-y-2">
        <h3 className="text-xl">Sender</h3>
        <p>{escrowInfo.data?.sender}</p>
      </div>
    </div>
  );
}

export default EscrowProgress;
