/*
 * File: /src/server/auth/index.ts
 * Project: notar
 * Created: Friday, 12th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import NextAuth from "next-auth";
import { authConfig } from "./config";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth(authConfig);
