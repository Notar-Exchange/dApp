/*
 * File: /src/components/layout/link-list.tsx
 * Project: notar
 * Created: Friday, 12th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

"use client";

import type { NavLink } from "./types";

import { cn } from "@/lib/utils";
import { ChevronRight, icons } from "lucide-react";
import { usePathname } from "next/navigation";
import { configLinks } from "./config";

import Link from "next/link";

type Props = {
  variant?: "horizontal" | "vertical";
  onClick?: (link: NavLink) => void;
};

function LinkList({ onClick, variant = "vertical" }: Props) {
  const path = usePathname();

  if (configLinks.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "grid items-start gap-2",
        variant === "vertical" && "grid-flow-col",
      )}
    >
      {configLinks.map((value, index) => {
        const Icon = value.icon ? icons[value.icon] : ChevronRight;
        return (
          <Link
            href={value.href}
            key={value.href + index}
            aria-disabled={value.disabled}
            onClick={() => onClick?.(value)}
          >
            <div
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                path === value.href
                  ? "bg-primary text-background"
                  : "bg-transparent",
                value.disabled && "cursor-not-allowed opacity-50",
              )}
            >
              <Icon className="mr-2 h-4 w-4" />
              <span>{value.title}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

LinkList.displayName = "LinkList";

export type { Link, Props as LinkListProps };
export default LinkList;
