/*
 * File: /src/components/layout/m.sidebar.tsx
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

"use client";

import type { HTMLAttributes } from "react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Routes } from "@/server/routes";
import Link from "next/link";
import Logo from "@/components/icon/Logo";
import LinkList from "@/components/layout/link-list";

function MobileSidebar(props: HTMLAttributes<HTMLDivElement>) {
  const [open, setOpen] = useState(false);

  return (
    <div {...props}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="pb-4">
            <Link href={Routes.path.default} onClick={() => setOpen(false)}>
              <Logo />
            </Link>
          </SheetHeader>
          <div className="space-y-1">
            <LinkList variant="horizontal" onClick={() => setOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

MobileSidebar.displayName = "MobileSidebar";

export default MobileSidebar;
