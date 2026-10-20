'use client'
import { ProfileAvatar } from './profile.type';
import { useFormContext } from 'react-hook-form';
import { useAuthStore } from '@features/auth/model';
import { PROFILE_AVATARS } from './profile.constants';
import { useCompleteProfile } from '@features/auth/api';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getErrorMessage, AuthFormType } from '@features/auth/lib';

interface UseProfileStepParams {
  onSuccess: () => void;
}

export function useProfileStep({ onSuccess }: UseProfileStepParams) {
  const {
    register,
    control,
    setValue,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useFormContext<AuthFormType>();

  const avatarValue = watch('avatar_url');
  const selectedCity = watch('city');

  const defaultAvatar = useMemo(() => PROFILE_AVATARS[0], []);
  const [selectedAvatar, setSelectedAvatar] = useState<ProfileAvatar>(() => {
    return (
      PROFILE_AVATARS.find((item) => item.value === avatarValue) ||
      defaultAvatar
    );
  });

  const { mutateAsync: completeProfile, isPending } = useCompleteProfile();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const matchedAvatar = PROFILE_AVATARS.find(
      (item) => item.value === avatarValue,
    );

    if (matchedAvatar) {
      setSelectedAvatar(matchedAvatar);
    }
  }, [avatarValue]);

  const handleCitySelect = useCallback(
    (cityName: string) => {
      setValue('city', cityName, {
        shouldDirty: true,
        shouldValidate: true,
      });
    },
    [setValue],
  );
  const handleAvatarSelect = useCallback(
    (avatar: ProfileAvatar) => {
      setSelectedAvatar(avatar);

      setValue('avatar_url', avatar.value, {
        shouldDirty: true,
        shouldValidate: true,
      });

      setValue('gender', avatar.gender, {
        shouldDirty: true,
        shouldValidate: true,
      });
    },
    [setValue],
  );

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await completeProfile({
        name: data.username,
        
        family_name: data.lastName,
        city: data.city,
        avatar_url: data.avatar_url,
        gender: data.gender,
      });

      setUser(response.user);
      onSuccess();
    } catch (error: unknown) {
      setError('root', {
        type: 'server',
        message: getErrorMessage(error, 'تکمیل پروفایل با خطا مواجه شد.'),
      });
    }
  });

  const handleEnterSubmit = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== 'Enter') return;

      e.preventDefault();
      onSubmit();
    },
    [onSubmit],
  );

  return {
    register,
    control,
    errors,
    selectedCity,
    selectedAvatar,
    isPending,
    handleEnterSubmit,
    handleCitySelect,
    handleAvatarSelect,
    onSubmit,
  };
}
