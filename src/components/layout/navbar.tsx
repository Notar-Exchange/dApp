/*
 * File: /src/components/layout/navbar.tsx
 * Project: notar
 * Created: Friday, 12th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import Logo from "@/components/icon/Logo";
import Link from "next/link";

import { Routes } from "@/server/routes";

function Navbar() {
  return (
    <div className="fixed start-0 top-0 z-50 h-14 w-full border-b-2 bg-muted p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={Routes.path.default}>
            <Logo />
          </Link>
        </div>
        <div>
          <button className="btn btn-ghost btn-circle">Theme</button>
        </div>
      </div>
    </div>
  );
}

Navbar.displayName = "Navbar";

export default Navbar;
