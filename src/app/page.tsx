/*
 * File: /src/app/page.tsx
 * Project: notar
 * Created: Friday, 12th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Swap from "@/components/swap/index";
import Link from "next/link";
import CardIcon from "@/components/landing/card.icon";
import CardLink from "@/components/landing/card.link";
import Log from "@/components/landing/log";
import Social from "@/components/landing/social";

export default function HomePage() {
  return (
    <div className="bg-gradient flex min-h-screen flex-col items-center justify-center gap-8 px-2 py-24">
      <div className="relative h-80 overflow-clip rounded-xl border-2 hover:border-primary">
        <Link href="/swap">
          <div className="cursor-pointe from-2% absolute inset-0 z-10 h-full w-full bg-gradient-to-t from-background/50 hover:bg-background/50"></div>
          <Swap />
          <Log />
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 p-4 text-center">
        <h1 className="text-5xl font-extrabold">Notar</h1>
        <p className="text- max-w-md text-lg">
          Use the Notar dApp to swap fiat currencies to digital assets on the
          Ethereum blockchain. Built using TLSNotary, Scroll Solana and
          Web3Auth.
        </p>
        <Link href="/swap">
          <Button size="lg" shape="pill" variant="outline">
            Get Started
          </Button>
        </Link>
        <p>
          <span>Learn More</span> <ArrowDownCircle className="inline" />
        </p>
      </div>

      <div className="container grid max-w-screen-lg grid-cols-1 gap-4 md:grid-cols-3">
        <CardIcon
          title="Fast"
          content="Get your digital assets by using Wise.com which is a trusted
              third party provider."
          iconName="Zap"
        />
        <CardIcon
          title="Cheap"
          content="Transact instantly and avoid paying high fees."
          iconName="CircleDollarSign"
        />
        <CardIcon
          title="Open"
          content="Available to anyone with a wallet and digital assets on Scroll Solana
              blockchain."
          iconName="LockOpen"
        />
        <div className="grid grid-cols-1 gap-4 md:col-span-3 md:grid-cols-2 md:grid-rows-subgrid">
          <CardLink
            title="Get Started"
            content="Start swapping you digital assets for fiat currencies today!"
            link="/swap"
            linkTitle="Go to the App"
          />
          <CardLink
            title="Documentation"
            content="Interested in learning more about how the protocol works?"
            link="/docs"
            linkTitle="Go to Docs"
          />
        </div>
      </div>
      <Separator className="max-w-screen-md bg-opacity-70" />

      <div className="flex flex-row items-center justify-center gap-8">
        <Social link="https://x.com" icon="X" />
        <Social link="https://github.com" icon="GitHub" />
        <Social link="https://telegram.com" icon="Telegram" />
      </div>
    </div>
  );
}
