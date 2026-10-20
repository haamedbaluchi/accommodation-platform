'use client';

import { TextField } from '@shared/ui';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';

type RHFTextFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'>;

export function RHFTextField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
}: RHFTextFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          placeholder={placeholder}
          labelClassName="text-sm sm:text-base"
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}
