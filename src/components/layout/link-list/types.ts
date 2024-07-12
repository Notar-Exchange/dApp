/*
 * File: /src/components/layout/link-list/type.ts
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import type { icons } from "lucide-react";

export type NavLink = {
  title: string;
  href: string;
  disabled?: boolean;
  icon?: keyof typeof icons;
};
