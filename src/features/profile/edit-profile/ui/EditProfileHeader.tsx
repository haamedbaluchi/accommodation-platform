'use client';
import { Button } from '@shared/ui';
import { useRouter } from 'next/navigation';
import { XMarkIcon } from '@heroicons/react/24/outline';

export function EditProfileHeader() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between mb-3.5 sm:mb-5">
      <h2 className="text-base sm:text-lg md:text-2xl font-extrabold text-text-main font-yekta">
        پروفایل
      </h2>
      <Button
        variant="ghost"
        rounded="full"
        size="icon"
        className="text-text-main"
        onClick={() => router.push('/profile')}
      >
        <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </Button>
    </div>
  );
}
