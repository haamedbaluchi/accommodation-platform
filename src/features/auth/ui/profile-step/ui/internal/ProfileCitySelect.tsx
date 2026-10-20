'use client';

import { SelectBox } from '@shared/ui';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';
import { iranProvinces } from '@shared/constants';
import type { AuthFormType } from '@features/auth/lib';

interface ProfileCitySelectProps {
  control: Control<AuthFormType>;
  onSelect: (city: string) => void;
}

export function ProfileCitySelect({
  control,
  onSelect,
}: ProfileCitySelectProps) {
  return (
    <Controller
      name="city"
      control={control}
      render={({ field }) => (
        <SelectBox
          items={iranProvinces}
          label="از کدوم استان سفرت رو شروع می‌کنی؟"
          placeholder="...نام استان رو جستجو کن"
          triggerClassName="text-text-foreground text-base"
          hiddenLabel={false}
          value={field.value}
          onValueChange={(value) => {
            field.onChange(value);
            onSelect(value);
          }}
        />
      )}
    />
  );
}
 
        