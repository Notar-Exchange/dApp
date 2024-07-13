/*
 * File: /src/components/client/landing/social.tsx
 * Project: netz-treasury
 * Created: Friday, 7th June 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©*
 * -----
 */

import XIcon from "@/components/icon/X";
import GHIcon from "@/components/icon/Github";
import TIcon from "@/components/icon/Telegram";
import Link from "next/link";

type Props = {
  link: string;
  icon: "X" | "GitHub" | "Telegram";
  theme?: "light" | "dark";
};

function loadImage(icon: Props["icon"]) {
  switch (icon) {
    case "X":
      return XIcon;
    case "GitHub":
      return GHIcon;
    case "Telegram":
      return TIcon;
    default:
      return null;
  }
}

export default function Social({ link, icon }: Props) {
  const Icon = loadImage(icon);

  if (!Icon) return null;

  return (
    <Link className="cursor-pointer text-xl" href={link} target="_blank">
      <Icon className="text-foreground" />
    </Link>
  );
}
