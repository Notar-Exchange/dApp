/*
 * File: /src/components/auth/provider.tsx
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
};

function NextAuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}

NextAuthProvider.displayName = "NextAuthProvider";

export default NextAuthProvider;
