'use client';

import { useForm } from 'react-hook-form';
import { UserProfile } from '@entities/profile';
import { valibotResolver } from '@hookform/resolvers/valibot';
import {
  editProfileSchema,
  type EditProfileFormValues,
} from './edit.profile.schema';

export function useProfileWizardForm(user?: UserProfile) {
  const defaultValues = {
    name: user?.name ?? '',
    family_name: user?.family_name ?? '',
    username: user?.username ?? '',
    city: user?.city ?? '',
    email: user?.email ?? '',
    social_media_link: user?.social_media_link ?? '',
    about: user?.about ?? '',
  };

  return useForm<EditProfileFormValues>({
    resolver: valibotResolver(editProfileSchema),
    mode: 'onSubmit',
    defaultValues: defaultValues,
  });
}
