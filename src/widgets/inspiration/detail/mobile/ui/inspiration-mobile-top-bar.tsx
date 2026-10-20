'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import { ArrowLeftIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

interface InspirationMobileTopBarProps {
  title: string;
}

export function InspirationMobileTopBar({ title }: InspirationMobileTopBarProps) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <button onClick={() => router.back()} className="p-1">
        <PlusIcon className="w-5 h-5 rotate-45" />
      </button>

      <button className="p-1">
        <HeartIcon className="w-5 h-5" />
      </button>

      <h1 className="flex-1 text-center font-bold text-sm text-text-main font-yekta truncate">
        {title}
      </h1>

      <button className="p-1">
        <ShareIcon className="w-5 h-5" />
      </button>

      <button onClick={() => router.back()} className="p-1">
        <ArrowLeftIcon className="w-5 h-5" />
      </button>
    </div>
  );
}