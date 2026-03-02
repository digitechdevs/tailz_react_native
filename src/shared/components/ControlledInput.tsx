import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Input, InputProps } from './Input';

interface ControlledInputProps<T extends FieldValues> extends Omit<InputProps, 'value' | 'onChangeText'> {
    name: Path<T>;
    control: Control<T>;
}

export function ControlledInput<T extends FieldValues>({
    name,
    control,
    ...inputProps
}: ControlledInputProps<T>) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <Input
                    {...inputProps}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                />
            )}
        />
    );
}
