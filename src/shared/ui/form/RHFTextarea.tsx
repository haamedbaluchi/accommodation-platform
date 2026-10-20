'use client';

import { TextArea } from '@shared/ui';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';

type RHFTextAreaProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;

  label: string;

  hiddenLabel?: boolean;
  helperText?: string;
  placeholder?: string;
  size?: 'small' | 'medium' | 'auto';
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'>;

export function RHFTextArea<T extends FieldValues>({
  control,
  name,
  label,
  hiddenLabel,
  placeholder,
  helperText,
  size,
  ...props
}: RHFTextAreaProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextArea
          {...field}
          {...props}
          label={label}
          hiddenLabel={hiddenLabel}
          helperText={helperText}
          placeholder={placeholder}
          size={size}
          errorMessage={fieldState.error?.message}
          className="rounded-4xl max-h-35 sm:max-h-42"
          labelClassName="text-sm sm:text-base"
        />
      )}
    />
  );
}
