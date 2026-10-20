'use client';

import { Button } from '@shared/ui';
import { LoginIcon } from '@shared/assets/icons';
import { AuthControl, useLogout } from '@features/auth';

import { UserProfileButton } from '@widgets/user/user-menu/ui/user-profile-button';

export function TripsHeaderAuth() {
  const { mutate: logout, isPending } = useLogout();

  return (
    <AuthControl
      guest={({ openAuthModal }) => (
        <Button
          rounded="full"
          size="icon"
          variant="secondary"
          onClick={openAuthModal}
          className="flex md:hidden"
        >
          <LoginIcon className="w-5 h-5" />
        </Button>
      )}
      authenticated={({ avatarUrl, fullName }) => (
        <UserProfileButton
          avatarSrc={avatarUrl}
          fullName={fullName}
          className="flex md:hidden"
          onLogoutClick={logout}
        />
      )}
    />
  );
}
