/*
 * File: /src/app/escrow/[hash]/page.tsx
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

export default function EscrowPage({ params }: { params: { hash: string } }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-500 sm:text-[5rem]">
          Escrow {params.hash}
        </h1>
      </div>
    </div>
  );
}
