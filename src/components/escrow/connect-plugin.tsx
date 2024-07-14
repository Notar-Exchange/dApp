/*
 * File: /src/components/escrow/connect-plugin.tsx
 * Project: notar
 * Created: Sunday, 14th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

"use client";

import { Button } from "@/components/ui/button";
import { runNotaryPlugin } from "@/lib/plugin";

function ConnectPlugin() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 px-4 py-4">
      <p>Continue to the plugin to complete the escrow</p>
      <Button onClick={runNotaryPlugin}>Connect Plugin</Button>
    </div>
  );
}

export default ConnectPlugin;
