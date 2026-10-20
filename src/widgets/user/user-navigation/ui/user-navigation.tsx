'use client';

import { memo } from 'react';
import Link from 'next/link';
import { cn } from '@shared/lib';
import { GuestActions } from './guest-actions';
import { useLogout, AuthControl } from '@features/auth';
import { AuthenticatedActions } from './authenticated-actions';
import { HeaderVariant } from '@widgets/layout/header/ui/site-header';

export const UserNavigation = memo(
  ({ variant = 'light' }: { variant?: HeaderVariant }) => {
    const { mutate: logout } = useLogout();

    return (
      <div className="flex items-center gap-2.5">
        <AuthControl
          guest={({ openAuthModal }) => (
            <GuestActions variant={variant} openAuthModal={openAuthModal} />
          )}
          authenticated={({ avatarUrl, fullName }) => (
            <AuthenticatedActions
              avatarUrl={avatarUrl}
              fullName={fullName}
              variant={variant}
              logout={logout}
            />
          )}
        />

        <Link
          href="/chat_ai"
          className={cn(
            'flex items-center justify-center h-8 px-3 rounded-full text-xs',
            variant === 'light'
              ? 'bg-white text-blue-shade-9 border-none'
              : 'bg-blue-tint-8 text-white border-none',
          )}
        >
          همین حالا شروع کن
        </Link>
      </div>
    );
  },
);

UserNavigation.displayName = 'UserNavigation';
