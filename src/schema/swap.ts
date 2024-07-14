/*
 * File: /src/schema/swap.ts
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import { z } from "zod";

export const SwapSchema = z.object({
  amount: z.union([
    z.coerce
      .number({
        message: "Amount must be a number",
      })
      .positive({
        message: "Enter a valid number",
      })
      .min(1, {
        message: "Minimum amount should be 1.0",
      }),
    z.literal("").refine(() => false, {
      message: "Value is required",
    }),
  ]),
  address: z.string().refine((value) => value.length === 42, {
    message: "Address must be 42 characters long",
  }),
});

export type SwapSchemaType = z.infer<typeof SwapSchema>;
