'use client';

import { KeyboardEventHandler } from  'react';
import { Button, TextField } from '@shared/ui';
import { AuthFormType } from '@features/auth/lib';
import { ProfileAvatar } from '../model/profile.type';
import { ProfileCitySelect } from './internal/ProfileCitySelect';
import { ProfileAvatarSelector } from './internal/ProfileAvatarSelector';
import { ProfileSuggestedCities } from './internal/ProfileSuggestedCities';
import type { FieldErrors, Control, UseFormRegister } from 'react-hook-form';

interface ProfileStepViewProps {
  register: UseFormRegister<AuthFormType>;
  control: Control<AuthFormType>;
  errors: FieldErrors<AuthFormType>;
  isPending: boolean;
  selectedCity: string;
  selectedAvatar: ProfileAvatar;
  handleEnterSubmit: KeyboardEventHandler<HTMLInputElement>;
  handleCitySelect: (cityName: string) => void;
  handleAvatarSelect: (avatar: ProfileAvatar) => void;
  onSubmit: () => void;
}

export function ProfileStepView({
  register,
  control,
  errors,
  isPending,
  selectedCity,
  selectedAvatar,
  handleEnterSubmit,
  handleCitySelect,
  handleAvatarSelect,
  onSubmit,
}: ProfileStepViewProps) {
  return (
    <div
      dir="rtl"
      className="custom-scrollbar mx-auto h-156 max-h-full w-full overflow-y-auto bg-background px-10 py-4 font-sans text-text-main"
    >
      <div className="flex flex-col space-y-4 pt-3 md:pt-0">
        <ProfileAvatarSelector
          selectedAvatar={selectedAvatar}
          onSelect={handleAvatarSelect}
        />

        <TextField
          label="تو بومرو چی صدات کنیم؟"
          placeholder="نام شما"
          sizeInput="md"
          className="h-10"
          required
          errorMessage={errors.username?.message as string}
          {...register('username')}
          onKeyDown={handleEnterSubmit}
        />

        <TextField
          label="نام خانوادگی شما؟"
          placeholder="نام خانوادگی (اختیاری)"
          sizeInput="md"
          className="h-10"
          errorMessage={errors.lastName?.message as string}
          {...register('lastName')}
          onKeyDown={handleEnterSubmit}
        />
        <ProfileCitySelect control={control} onSelect={handleCitySelect} />
        <ProfileSuggestedCities
          selectedCity={selectedCity}
          onSelect={handleCitySelect}
        />

        {errors.city && (
          <p className="text-sm font-medium text-error">
            {errors.city.message as string}
          </p>
        )}

        {errors.avatar_url && (
          <p className="text-sm font-medium text-error">
            {errors.avatar_url.message as string}
          </p>
        )}

        {errors.root && (
          <p className="text-sm font-medium text-error">
            {errors.root.message}
          </p>
        )}

        <Button
          type="button"
          rounded="full"
          size="medium"
          disabled={isPending}
          onClick={onSubmit}
        >
          {isPending ? 'در حال ثبت...' : 'شروع سفر با بومرو 🚀'}
        </Button>
      </div>
    </div>
  );
}
