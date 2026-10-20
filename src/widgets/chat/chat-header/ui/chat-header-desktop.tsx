'use client';

import { toast } from 'sonner';
import { useEffect } from 'react';
import { Button, Tooltip } from '@shared/ui';
import { usePathname } from 'next/navigation';
import { getChatTitle } from '../lib/get-chat-title';
import { GroupUsersIcon } from '@shared/assets/icons';
import { MODAL_ITEMS, useModalStore } from '@_app/modal';
import { NewTripButton } from '@features/trip/create-trip';
import { useTripDraftStore } from '@entities/trip/trip-draft';
import { HeaderPage } from '@widgets/layout/header';
import { TripParameters } from '@widgets/trip/trip-parameters';

export function ChatHeaderDesktop() {
  const openModal = useModalStore((state) => state.openModal);

  const title = useTripDraftStore((state) => state.title);
  const destinations = useTripDraftStore((state) => state.destinations);
  const chatTitle = getChatTitle({
    title,
    destinations,
  });

  const handleNewTripClick = () => {
    openModal(MODAL_ITEMS.NEWTRIP);
  };
  const resetDraft = useTripDraftStore((state) => state.resetDraft);
  const pathname = usePathname();

  useEffect(() => {
    return () => {
      if (!window.location.pathname.includes('/chat')) {
        resetDraft();
      }
    };
  }, [resetDraft]);

  return (
    <HeaderPage
      leading={
        <h4 className="text-text-main font-bold text-sm md:text-base xl:text-xl font-yekta">
          {chatTitle}
        </h4>
      }
      middle={<TripParameters />}
      trailing={
        <>
          {/* <Tooltip content="تشکیل تیم">
            <Button
              type="button"
              rounded="full"
              size="icon"
              variant="secondary"
              className="flex lg:hidden w-8 h-8"
              aria-label="تشکیل تیم سفر"
              onClick={() => toast.info('این بخش به زودی اضافه میشود')}
            >
              <GroupUsersIcon className="text-blue-500" />
            </Button>
          </Tooltip> */}
          {/* <Button
            type="button"
            variant="outline"
            rounded="full"
            size="large"
            className="hidden lg:flex"
            onClick={() => toast.info('این بخش به زودی اضافه میشود')}
          >
            تشکیل تیم سفر 🚀
          </Button> */}

          
          <NewTripButton variant="button" onClick={handleNewTripClick} />
        </>
      }
    />
  );
}
