/*
 * File: /src/lib/plugin.ts
 * Project: notar
 * Created: Sunday, 14th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

"use client";

declare global {
  interface Window {
    tlsn?: {
      connect: () => Promise<Client>;
    };
  }

  interface Client {
    runPlugin: (hash: string) => void;
    getPlugins: (
      address: string,
      name: string,
      version: string | null,
    ) => Promise<Plugin[]>;
  }

  interface Plugin {
    hash: string;
    title: string;
  }
}

export async function runNotaryPlugin() {
  const client = await window.tlsn?.connect();
  const plugins = await client?.getPlugins("**", "**", null);
  plugins?.forEach((plugin) => {
    if (plugin?.title === "Wise Transaction") {
      client?.runPlugin(plugin.hash);
    }
  });
}
