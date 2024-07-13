/*
 * File: /src/app/swap/page.tsx
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import Swap from "@/components/swap";

// - Route Segment Config
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function SwapPage() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <Swap />
    </div>
  );
}
