'use client';

import { Button } from '@shared/ui';
import { EditIcon } from './profile-icons';
import { useRouter } from 'next/navigation';

export function EditProfileButton() {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      rounded="full"
      size="icon"
      aria-label="ویرایش پروفایل"
      className="absolute left-5 sm:left-7 md:left-9 top-5 w-8 h-8 md:w-12.5 md:h-12.5 shrink-0 transition"
      onClick={() => router.push('/profile/edit')}
    >
      <EditIcon className="w-4 h-4 md:w-5 md:h-5" />
    </Button>
  );
}
