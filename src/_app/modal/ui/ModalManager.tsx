'use client';
import { AuthModal } from '@features/auth';
import { MODAL_ITEMS } from '../model/modal.type';
import { useModalStore } from '../model/modal.store';

import { DestinationModal } from '@features/trip/edit-trip-destinations';
import { TravelersTripModal } from '@features/trip/edit-trip-travelers';
import { DateSelectorModal } from '@features/trip/edit-trip-date';
import { BudgetModal } from '@features/trip/edit-trip-budget';
import { TripBuilderModal } from '@features/trip/create-trip';
import { NewFlightTicketModal } from '@features/trip/add-flight-ticket';
import { BookingHotelModal } from '@features/trip/add-hotel-booking/inxex';
import GuideModal from '@widgets/trip/trip-guide/ui/guide-modal';
import { NavDrawerMenu } from '@widgets/layout/navigation-drawer';

export const ModalManager = () => {
  const { isOpen, type, closeModal } = useModalStore();

  if (!isOpen || !type) return null;

  return (
    <>
      {type === MODAL_ITEMS.AUTH && (
        <AuthModal open={isOpen} setOpen={closeModal} />
      )}
      {type === MODAL_ITEMS.DESTINATIONS && (
        <DestinationModal open={isOpen} setOpen={closeModal} />
      )}
      {type === MODAL_ITEMS.TRAVELERS && (
        <TravelersTripModal open={isOpen} setOpen={closeModal} />
      )}

      {type === MODAL_ITEMS.DATE && (
        <DateSelectorModal open={isOpen} setOpen={closeModal} />
      )}
      {type === MODAL_ITEMS.BUDGET && (
        <BudgetModal open={isOpen} setOpen={closeModal} />
      )}

      {type === MODAL_ITEMS.NEWTRIP && (
        <TripBuilderModal open={isOpen} setOpen={closeModal} />
      )}
      {type === MODAL_ITEMS.RESERVEFLIGHTTICKET && (
        <NewFlightTicketModal open={isOpen} setOpen={closeModal} />
      )}
      {type === MODAL_ITEMS.RESERVEHOTEL && (
        <BookingHotelModal open={isOpen} setOpen={closeModal} />
      )}
      {type === MODAL_ITEMS.GUIDEMODAL && (
        <GuideModal open={isOpen} setOpen={closeModal} />
      )}
      {type === MODAL_ITEMS.DRAWERMAIN && (
        <NavDrawerMenu open={isOpen} setOpen={closeModal} />
      )}
    </>
  );
};
