/*
 * File: /src/server/routes.ts
 * Project: notar
 * Created: Friday, 12th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

export const Routes = {
  list: {
    public: ["/", "/swap", "/swap/exchange"],
    protected: [""],
  },
  path: {
    default: "/",
    swap: "/swap",
    exchange: "/swap/exchange",
  },
};

export function isPublic(path?: string) {
  if (!path) return false;

  return Routes.list.public.includes(path);
}

export function isProtected(path?: string) {
  if (!path) return false;

  return Routes.list.protected.includes(path);
}
