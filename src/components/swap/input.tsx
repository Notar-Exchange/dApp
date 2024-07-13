/*
 * File: /src/components/swap/input.tsx
 * Project: notar
 * Created: Saturday, 13th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import type { Control, FieldValues, FieldPath } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import {
  replaceCommasWithPeriods,
  validateDecimalInput,
  calculateRateValue,
} from "@/lib/swap";

import { DollarSign, EuroIcon } from "lucide-react";

// - Types
type Props<Value extends FieldValues> = {
  name: FieldPath<Value>;
  label: string;
  token: string;
  rate?: number;
  control?: Control<Value>;
  disabled?: boolean;
  onAction?: () => void;
  actionLabel?: string;
};

// - Component
function SwapInput<FormValue extends FieldValues>({
  name,
  label,
  token,
  control,
  rate,
  disabled,
  onAction,
  actionLabel,
}: Props<FormValue>) {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className="text-xl">{label}</FormLabel>
            <FormControl>
              <div
                className={cn(
                  onAction &&
                    "flex flex-col items-center justify-center gap-2 sm:flex-row",
                )}
              >
                <div className="relative">
                  <Input
                    {...field}
                    className={cn(
                      "h-14 pr-24 text-3xl",
                      !!rate && "text-emerald-600 disabled:opacity-100",
                    )}
                    type="text"
                    placeholder="100"
                    disabled={disabled}
                    value={
                      rate ? calculateRateValue(field.value, rate) : field.value
                    }
                    onChange={(event) => {
                      const value = event.target.value;
                      const noCommas = replaceCommasWithPeriods(value);
                      const isValid = validateDecimalInput(noCommas);
                      if (!isValid) return;

                      if (rate) {
                        const newValue = Number(noCommas) * rate;
                        field.onChange(newValue.toString());
                      } else {
                        field.onChange(noCommas);
                      }
                    }}
                    onFocus={(event) => event.target.select()}
                  />
                  <div className="absolute right-1 top-1/2 flex -translate-y-1/2 gap-x-1 rounded-full bg-muted p-2">
                    {token === "USDT" ? (
                      <DollarSign className="text-muted" />
                    ) : (
                      <EuroIcon className="text-muted" />
                    )}

                    <span className="font-medium text-muted-foreground">
                      {token}
                    </span>
                  </div>
                </div>
                {onAction && (
                  <Button
                    variant="outline"
                    size="lg"
                    type="button"
                    className="h-14 w-full text-lg sm:w-[80px]"
                    onClick={onAction}
                    disabled={disabled}
                  >
                    {actionLabel}
                  </Button>
                )}
              </div>
            </FormControl>
            <div className="flex justify-between">
              <FormDescription>{rate && `${rate} ${token}`}</FormDescription>
            </div>
          </FormItem>
        );
      }}
    />
  );
}

export default SwapInput;
