/*
 * File: /src/components/swap/index.tsx
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import SwapForm from "@/components/swap/form";
import SwapCard from "./card";

function Swap() {
  return (
    <SwapCard title="Swap" description="Buy USDT using a trusted third party">
      <SwapForm />
    </SwapCard>
  );
}

Swap.displayName = "Swap";

export default Swap;
