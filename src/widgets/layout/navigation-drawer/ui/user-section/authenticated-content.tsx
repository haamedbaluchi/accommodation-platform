'use client';

import Image from 'next/image';
import { cn } from '@shared/lib';
import { useAuthStore } from '@features/auth';
import { ChevronLeftIcon, UserCircleIcon } from '@heroicons/react/24/outline';

interface AuthenticatedContentProps {
  onProfileClick?: () => void;
}

export function AuthenticatedContent({
  onProfileClick,
}: AuthenticatedContentProps) {
  const { user } = useAuthStore();
  const backendBaseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const avatarSrc = user?.avatar_url
    ? `${backendBaseUrl}${user.avatar_url}`
    : null;
  return (
    <button
      type="button"
      onClick={onProfileClick}
      className={cn(
        'mx-4 flex items-center justify-between',
        'rounded-2xl px-3 py-1',
        'bg-text-muted-foreground text-sm font-medium text-neutral-700',
        'transition hover:border-neutral-400 hover:bg-neutral-100',
      )}
    >
      <div className="flex items-center gap-3">
        {avatarSrc ? (
          <Image
            src={avatarSrc}
            alt="پروفایل کاربر"
            width={36}
            height={36}
            className="rounded-full object-cover text-text-main"
          />
        ) : (
          <UserCircleIcon className="w-11 h-11" />
        )}

        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold text-neutral-900">
            {user?.name} {user?.family_name}
          </span>

          <span className="text-xs text-neutral-500">مشاهده پروفایل</span>
        </div>
      </div>

      <ChevronLeftIcon className="size-4 text-neutral-400" />
    </button>
  );
}
