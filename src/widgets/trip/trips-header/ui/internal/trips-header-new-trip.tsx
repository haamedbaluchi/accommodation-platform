'use client';

import { useModalStore } from '@_app/modal';
import { NewTripButton } from '@features/trip/create-trip';
import { NewTripCoachmark } from '@features/onboarding/coachmark';

export function TripsHeaderNewTrip() {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <>
      <NewTripButton
        variant="button"
        onClick={() => openModal('new_trip_modal')}
      />

      <NewTripCoachmark className="flex md:hidden">
        <NewTripButton
          variant="icon"
          className="flex md:hidden"
          onClick={() => openModal('new_trip_modal')}
        />
      </NewTripCoachmark>
    </>
  );
}
