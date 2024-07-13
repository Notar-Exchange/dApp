/*
 * File: /src/components/client/landing/card.image.tsx
 * Project: netz-treasury
 * Created: Friday, 7th June 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©*
 * -----
 */

import { icons } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
  content: string;
  iconName: keyof typeof icons;
  cardClasses?: string;
};

export default function CardIcon({ title, content, iconName , cardClasses }: Props) {
  const Icon = icons[iconName];

  return (
    <Card className={cardClasses}>
      <CardHeader>
        <div className="pb-2 flex flex-row items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <Icon />
        </div>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}
