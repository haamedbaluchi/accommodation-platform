'use client'
import Image from 'next/image';
import { cn } from '@shared/lib';
import { Button } from '@shared/ui';
import { UserCircleIcon } from '@heroicons/react/24/outline';

import { forwardRef, ComponentPropsWithoutRef } from 'react';

type UserProfileTriggerProps =
  ComponentPropsWithoutRef<typeof Button> & {
    avatarSrc?: string;
    fullName?: string;
  };

export const UserProfileTrigger = forwardRef<
  HTMLButtonElement,
  UserProfileTriggerProps
>(
  (
    {
      avatarSrc,
      fullName,
      className="",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        className={cn(
          'bg-transparent active:bg-secondary-active text-text-main transition-transform',
          "mx-0 sm:mx-auto",
          className,
        )}
        rounded="full"
        size="icon"
        variant="secondary"
        {...props}
      >
        {avatarSrc ? (
          <Image
            src={avatarSrc}
            alt={fullName ?? ''}
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
        ) : (
          <UserCircleIcon className="h-11 w-11" />
        )}
      </Button>
    );
  },
);

UserProfileTrigger.displayName = 'UserProfileTrigger';