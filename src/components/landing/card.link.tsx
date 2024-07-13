/*
 * File: /src/components/client/landing/card.link.tsx
 * Project: netz-treasury
 * Created: Friday, 7th June 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©*
 * -----
 */

import { LinkIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type Props = {
  title: string;
  content: string;
  link: string;
  linkTitle: string;
  className?: string;
};

export default function CardLink({ title, content, link, linkTitle, className }: Props) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="pb-4">{content}</p>
        <Link className="text-xl text-primary" href={link} target="_blank">
          <span>{linkTitle}</span> <LinkIcon className="inline" />
        </Link>
      </CardContent>
    </Card>
  );
}
