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
import { Form, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useWeb3 } from "@/web3/hook/use-web3";
import { Separator } from "@/components/ui/separator";
import { writeCreateEscrow } from "@/web3/contracts/contract";
import { generateEscrowId } from "@/lib/swap";

import SwapInput from "@/components/swap/form.input.token";
import AddressInput from "@/components/swap/form.input.address";
import TextInput from "@/components/swap/form.input.text";
import { useRouter } from "next/navigation";
import { Routes } from "@/server/routes";

// - Const
const defaultValues: SwapSchemaType = {
  amount: 1,
  address: "",
  wise: "",
};

// - Component
function SwapForm() {
  const { isConnected } = useWeb3();
  const router = useRouter();
  const form = useForm<SwapSchemaType>({
    defaultValues,
    resolver: zodResolver(SwapSchema),
  });

  // - Actions
  const onSubmit = async (values: SwapSchemaType) => {
    console.log("onSubmit", values);

    try {
      await writeCreateEscrow({
        receiver: values.address,
        receiverHandle: values.wise,
        amount: Number(values.amount),
        duration: 180,
      });

      const kecakHash = generateEscrowId(
        values.address,
        values.wise,
        String(values.amount),
        String(180), // Seconds
      );

      router.push(Routes.path.escrow(kecakHash));
    } catch (error) {
      console.error(error);
    }
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
            label="You pay"
            actionLabel="10+"
            token="USDT"
            control={form.control}
            disabled={form.formState.isSubmitting}
            onAction={onAppend}
          />
          <SwapInput<SwapSchemaType>
            name="amount"
            label="You want"
            token="EUR"
            control={form.control}
            disabled={form.formState.isSubmitting}
            rate={1.1}
          />

          <Separator />

          <AddressInput<SwapSchemaType>
            name="address"
            label="Recipient address"
            control={form.control}
            disabled={form.formState.isSubmitting}
          />

          <TextInput<SwapSchemaType>
            name="wise"
            label="Your Wise ID"
            control={form.control}
            disabled={form.formState.isSubmitting}
          />

          <FormMessage />

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
