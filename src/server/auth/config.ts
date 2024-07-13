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

import { isAddress } from "ethers/address";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/",
    signOut: "/",
    newUser: "/",
    error: "/",
    verifyRequest: "/"
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
    Credentials({
      name: "Credentials",
      credentials: {
        address: {
          label: "Address",
          type: "text",
          placeholder: "0x0",
        },
      },
      async authorize(credentials) {
        const { address } = credentials;
        const isValid = isAddress(address);

        if (!isValid) return null;

        return { id: address };
      },
    }),
  ],
};
