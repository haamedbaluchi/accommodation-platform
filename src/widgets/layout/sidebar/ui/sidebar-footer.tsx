'use client'
import { Button } from '@shared/ui';
import { LoginIcon } from '@shared/assets/icons';
import { AuthControl, useLogout } from '@features/auth';

import { UserProfileButton } from '@widgets/user/user-menu/ui/user-profile-button';

export function SidebarFooter() {
  const { mutate: logout } = useLogout();

  return (
    <AuthControl
      guest={({ openAuthModal }) => (
        <Button
          rounded="full"
          size="icon"
          variant="secondary"
          aria-label="ورود"
          onClick={openAuthModal}
          className="mx-auto"
        >
          <LoginIcon className="h-5 w-5" />
        </Button>
      )}
      authenticated={({ avatarUrl, fullName }) => (
        <UserProfileButton
          avatarSrc={avatarUrl}
          fullName={fullName}
          onLogoutClick={logout}
        />
      )}
    />
  );
}
