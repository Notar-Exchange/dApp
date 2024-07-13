/*
 * File: /src/middleware.ts
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import { auth as middleware } from "@/server/auth";
import { isAddress } from "ethers/address";
import { Routes, isProtected } from "@/server/routes";

export default middleware((request) => {
  const { nextUrl, auth } = request;
  const isConnected = isAddress(auth?.address);

  if (!isConnected && isProtected(nextUrl.pathname)) {
    const newUrl = new URL(Routes.path.default, nextUrl);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
