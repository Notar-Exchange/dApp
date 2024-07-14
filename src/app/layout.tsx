import "@/styles/globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { wagmiConfig } from "@/web3/wagmi/config";

import Navbar from "@/components/layout/navbar";
import Content from "@/components/layout/content";
import ThemeProvider from "@/components/theme/provider";
import AuthProvider from "@/components/auth/provider";
import WagmiProvider from "@/components/web3/wagmi-provider";

// - Route Segment Config
export const dynamic = "force-dynamic";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Notar Network",
  description: "A decentralized notary network",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <AuthProvider>
          <WagmiProvider config={wagmiConfig}>
            <ThemeProvider attribute="class" enableSystem>
              <Navbar />
              <Content>{children}</Content>
            </ThemeProvider>
          </WagmiProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
