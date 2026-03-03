import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Checkbox } from "./Checkbox";

interface ControlledCheckboxProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
}

export function ControlledCheckbox<T extends FieldValues>({
  name,
  control,
  label,
}: ControlledCheckboxProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <Checkbox
          value={!!value}
          onValueChange={onChange}
          label={label}
          error={error?.message}
        />
      )}
    />
  );
}
