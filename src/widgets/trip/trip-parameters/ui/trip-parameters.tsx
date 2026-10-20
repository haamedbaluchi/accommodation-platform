'use client';


import { Button } from '@shared/ui';
import { MODAL_ITEMS, useModalStore } from '@_app/api';
import { useTripDraftStore } from '@entities/trip/trip-draft';
import { getBudgetLabel, getDaysLabel, getDestinationsLabel, getTravelersLabel } from '@entities/trip';

export function TripParameters() {
  const openModal = useModalStore((state) => state.openModal);

  const destinations = useTripDraftStore((state) => state.destinations);
  const startDate = useTripDraftStore((state) => state.startDate);
  const endDate = useTripDraftStore((state) => state.endDate);
  const totalDays = useTripDraftStore((state) => state.totalDays);
  const travelerCount = useTripDraftStore((state) => state.travelerCount);
  const budgetRange = useTripDraftStore((state) => state.budgetRange);
  const tripParams = [
    {
      label: getDestinationsLabel(destinations),
      modal: MODAL_ITEMS.DESTINATIONS,
    },
    {
      label: getDaysLabel({
        startDate,
        endDate,
        totalDays,
      }),
      modal: MODAL_ITEMS.DATE,
    },
    {
      label: getTravelersLabel(travelerCount),
      modal: MODAL_ITEMS.TRAVELERS,
    },
    {
      label: getBudgetLabel(budgetRange),
      modal: MODAL_ITEMS.BUDGET,
    },
  ];

  return (
    <div className="rounded-5xl bg-text-muted-foreground divide-x py-1.5 xl:py-2 font-yekta text-text-main">
      {tripParams.map((param) => (
        <Button
          key={param.modal}
          type="button"
          variant="ghost"
          rounded="none"
          onClick={() => openModal(param.modal)}
          className="h-6 md:h-7 lg:h-8 hover:bg-transparent active:bg-transparent text-text-main text-[0.625rem] md:text-xs lg:text-sm xl:text-base px-6 lg:px-7 font-normal"
        >
          {param.label}
        </Button>
      ))}
    </div>
  );
}
