/*
 * File: /src/components/swap/form.tsx
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

"use client";

import { SwapSchema, type SwapSchemaType } from "@/schema/swap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ArrowLeftRightIcon } from "lucide-react";

import SwapInput from "@/components/swap/input";

// - Const
const defaultValues: SwapSchemaType = {
  amount: 1,
};

// - Component
function SwapForm() {
  const form = useForm<SwapSchemaType>({
    defaultValues,
    resolver: zodResolver(SwapSchema),
  });

  // - Actions
  const onSubmit = async (values: SwapSchemaType) => {
    console.log(values);
  };

  const onSwitch = () => {
    console.log("Switch");
  };

  const onMax = () => {
    console.log("MAX");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <Button
          className="absolute right-4 top-4"
          variant="secondary"
          type="button"
          onClick={onSwitch}
          disabled={form.formState.isSubmitting}
        >
          <ArrowLeftRightIcon />
        </Button>

        <div className="flex flex-col gap-y-4">
          <SwapInput<SwapSchemaType>
            name="amount"
            label="You want"
            actionLabel="MAX+"
            token="USDT"
            control={form.control}
            disabled={form.formState.isSubmitting}
            onAction={onMax}
          />
          <SwapInput<SwapSchemaType>
            name="amount"
            label="You pay"
            token="EUR"
            control={form.control}
            disabled={form.formState.isSubmitting}
            rate={1.1}
          />
        </div>
      </form>
    </Form>
  );
}

SwapForm.displayName = "SwapForm";

export default SwapForm;
