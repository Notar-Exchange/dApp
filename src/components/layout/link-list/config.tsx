/*
 * File: /src/components/layout/link-list/config.tsx
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import type { NavLink } from "./types";
import { Routes } from "@/server/routes";

export const configLinks: NavLink[] = [
  {
    title: "Swap",
    href: Routes.path.swap,
    icon: "Merge",
  },
  {
    title: "Docs",
    href: Routes.path.docs,
    icon: "BookOpen",
  },
];
