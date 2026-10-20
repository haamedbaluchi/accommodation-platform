'use client';
import Image from 'next/image';
import { ChevronLeftIcon, UserCircleIcon } from '@heroicons/react/24/outline';

interface ProfileMenuHeaderProps {
  avatarSrc?: string;
  fullName: string;
  subtitle?: string;
  onClick?: () => void;
}

export function ProfileMenuHeader({
  avatarSrc,
  fullName,
  subtitle,
  onClick,
}: ProfileMenuHeaderProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-3 flex w-full items-center justify-between rounded-xl text-right outline-none transition-colors hover:bg-accent/50 focus:bg-accent/50"
    >
      <span className="flex items-center gap-2">
        {avatarSrc ? (
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src={avatarSrc}
              alt={fullName}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <UserCircleIcon className="h-10 w-10 text-text-main" />
        )}

        <span className="flex flex-col font-yekta">
          <span className="text-sm font-bold text-text-main md:text-base">
            {fullName}
          </span>

          {subtitle && (
            <span className="text-xs font-normal text-text-foreground md:text-sm">
              {subtitle}
            </span>
          )}
        </span>
      </span>

      <ChevronLeftIcon className="h-5 w-5 text-text-secondary" />
    </button>
  );
}
