'use client';
import Link from 'next/link';
import { cn } from '@shared/lib';
import { Button } from '@shared/ui';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline';

export function ErrorActions() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-4">
      <Button
        onClick={() => router.back()}
        rounded="full"
        variant="secondary"
        size="medium"
        className="px-4 sm:px-6 md:px-8 bg-accent"
        leftIcon={<ArrowLeftIcon className="w-4 h-4 md:h-5 md:w-5" />}
      >
        برگشت
      </Button>

      <Link
        href="/"
        className={cn(
          'flex h-8 sm:h-9 md:h-10 items-center gap-2',
          'rounded-full bg-[#29438C] hover:bg-[#213773] transition-colors',
          'px-4 sm:px-6 md:px-8 text-sm md:text-base font-semibold text-white',
        )}
      >
        <HomeIcon className="w-4 h-4 md:h-5 md:w-5" />
        صفحه اصلی
      </Link>
    </div>
  );
}
