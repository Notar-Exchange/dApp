/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/*
 * File: /src/server/auth/config.ts
 * Project: notar
 * Created: Friday, 12th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/",
    signOut: "/",
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },
  callbacks: {
    session: ({ session, token }) => {
      session.address = token.sub as unknown as string;
      return session;
    },
  },
  providers: [
    // TODO: Credentials
  ],
};
