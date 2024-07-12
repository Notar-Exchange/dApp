/*
 * File: /src/components/layout/content.tsx
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import type {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

type Props = PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
>;

function Content({ children, ...props }: Props) {
  return <main {...props}>{children}</main>;
}

Content.displayName = "Content";

export default Content;
