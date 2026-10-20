import type { UseFormReturn } from 'react-hook-form';
import type { AuthFormType } from '@features/auth/lib';

export function fillProfileForm(
  form: UseFormReturn<AuthFormType>,
  user: {
    name?: string;
    city?: string;
    gender?: string;
    avatar_url?: string;
  },
) {
  form.setValue('name', user.name ?? '');
  form.setValue('lastName', '');
  form.setValue('city', user.city ?? '');
  form.setValue('gender', user.gender ?? '');
  form.setValue(
    'avatar_url',
    user.avatar_url ?? '/static/avatars/man1.png',
  );
}