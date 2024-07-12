import "@/styles/globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import Navbar from "@/components/layout/navbar";

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
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
