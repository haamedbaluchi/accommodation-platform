'use client';

import { Button } from '@shared/ui';
import { useRouter } from 'next/navigation';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

export function BackHomeButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      rounded="full"
      variant="outline"
      size="medium"
      className="border-[#2b2b2b] px-6 text-[#222] hover:bg-gray-100 hover:text-text-main sm:px-10"
    >
      برگردیم عقب
      <ArrowUturnLeftIcon className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-[#222]" />
    </Button>
  );
}