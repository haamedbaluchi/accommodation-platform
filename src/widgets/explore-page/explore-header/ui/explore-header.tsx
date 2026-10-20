'use client';
import { MODAL_ITEMS, useModalStore } from '@_app/modal';
import { NewTripButton } from '@features/trip/create-trip';
import { GroupUsersIcon } from '@shared/assets/icons';
import { Button, Tooltip } from '@shared/ui';
import { HeaderPage } from '@widgets/layout/header';
import { toast } from 'sonner';

export function ExploreHeader() {
  const openModal = useModalStore((state) => state.openModal);

  const handleNewTripClick = () => {
    openModal(MODAL_ITEMS.NEWTRIP);
  };

  return (
    <HeaderPage 
      className='sticky top-0 z-30'
      leading={
        <h4 className="text-text-main font-bold text-sm md:text-base xl:text-xl font-yekta">
          اکسپلور بومو
        </h4>
      }
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
          </Tooltip>
          <Button
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
