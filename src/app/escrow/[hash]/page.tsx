/*
 * File: /src/app/escrow/[hash]/page.tsx
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import EscrowProgress from "@/components/escrow/progress";

export default function EscrowPage({ params }: { params: { hash: string } }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background ">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <EscrowProgress escrowId={params.hash} />
      </div>
    </div>
  );
}
