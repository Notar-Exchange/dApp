/*
 * File: /src/components/swap/form.input.address.tsx
 * Project: notar
 * Created: Sunday, 14th July 2024
 * Author: @rashadatjou
 * -----
 * Copyright 2024, ©Notar
 * -----
 */

import type { Control, FieldValues, FieldPath } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

// - Types
type Props<Value extends FieldValues> = {
  name: FieldPath<Value>;
  label: string;
  control?: Control<Value>;
  disabled?: boolean;
};

// - Component
function AddressInput<FormValue extends FieldValues>({
  name,
  label,
  control,
  disabled,
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
              <div>
                <div className="relative">
                  <Input
                    {...field}
                    className={cn("h-14 text-3xl")}
                    type="text"
                    placeholder="0x..."
                    disabled={disabled}
                    onFocus={(event) => event.target.select()}
                  />
                </div>
              </div>
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
}

export default AddressInput;
