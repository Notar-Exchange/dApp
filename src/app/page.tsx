/*
 * File: /src/app/page.tsx
 * Project: notar
 * Created: Friday, 12th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

export default function HomePage() {
  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-center text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-500 sm:text-[5rem]">
          Notar<span className="text-foreground">.network</span>
        </h1>
      </div>
    </main>
  );
}
