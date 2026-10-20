'use client';

import Image from 'next/image';
import { Button } from '@shared/ui';
import { LoginIcon } from '@shared/assets/icons';
import { AuthControl, useLogout } from '@features/auth';
import { MODAL_ITEMS, useModalStore } from '@_app/modal';
import { NewTripCoachmark } from '@features/onboarding/coachmark';

import { NewTripButton } from '@features/trip/create-trip';
import { HeaderPage } from '@widgets/layout/header';
import { UserProfileButton } from '@widgets/user/user-menu/ui/user-profile-button';
import { ChatDrawer } from '@widgets/chat/chat-drawer';

export function ChatHeaderMobile() {
  const openModal = useModalStore((state) => state.openModal);
  const { mutate: logout, isPending } = useLogout();

  const handleNewTripClick = () => {
    openModal(MODAL_ITEMS.NEWTRIP);
  };

  return (
    <HeaderPage
      className="z-10 shadow-none"
      leading={
        <div className="flex items-center gap-1">
          <Image src="/images/logo.svg" alt="بومرو" width={19} height={16} />

          <Image
            src="/images/boomro_beta.svg"
            alt="بومرو"
            width={59}
            height={28}
          />
        </div>
      }
      trailing={
        <>
          <NewTripCoachmark>
            <NewTripButton variant="icon" onClick={handleNewTripClick} />
          </NewTripCoachmark>
          <AuthControl
            guest={({ openAuthModal }) => (
              <Button
                rounded="full"
                size="icon"
                variant="secondary"
                aria-label="ورود"
                onClick={openAuthModal}
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

          <ChatDrawer />
        </>
      }
    />
  );
}
