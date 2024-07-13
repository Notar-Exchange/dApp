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
          <div>input</div>
          <div>input</div>
        </div>
      </form>
    </Form>
  );
}

SwapForm.displayName = "SwapForm";

export default SwapForm;
