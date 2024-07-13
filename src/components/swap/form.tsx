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
import { ArrowLeftRightIcon, Loader2 } from "lucide-react";
import { useWeb3 } from "@/web3/hook/use-web3";

import SwapInput from "@/components/swap/input";

// - Const
const defaultValues: SwapSchemaType = {
  amount: 1,
};

// - Component
function SwapForm() {
  const { isConnected } = useWeb3();

  const form = useForm<SwapSchemaType>({
    defaultValues,
    resolver: zodResolver(SwapSchema),
  });

  // - Actions
  const onSubmit = async (values: SwapSchemaType) => {
    console.log(values);
  };

  const onAppend = () => {
    const currentValue = form.getValues("amount");
    form.setValue("amount", Number(currentValue) + 10);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <div className="flex flex-col gap-y-4">
          <SwapInput<SwapSchemaType>
            name="amount"
            label="You want"
            actionLabel="10+"
            token="USDT"
            control={form.control}
            disabled={form.formState.isSubmitting}
            onAction={onAppend}
          />
          <SwapInput<SwapSchemaType>
            name="amount"
            label="You pay"
            token="EUR"
            control={form.control}
            disabled={form.formState.isSubmitting}
            rate={1.1}
          />

          <Button
            type="submit"
            size="lg"
            className="h-16 w-full text-2xl font-bold"
            disabled={!isConnected}
          >
            {form.formState.isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Accept"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

SwapForm.displayName = "SwapForm";

export default SwapForm;
