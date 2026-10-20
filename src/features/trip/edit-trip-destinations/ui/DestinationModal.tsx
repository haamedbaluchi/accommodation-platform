'use client';

import dynamic from 'next/dynamic';
import { Button, Dialog,Loader } from '@shared/ui';
import { FormProvider, useForm } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { useTripDraftStore } from '@entities/trip/trip-draft';
import { DestinationFormValues, destinationSchema } from '../model/destinationSchema';
import { TravelDestination } from '@entities/trip';
import { visitTypeLabelToApiMap } from '../model/destinationVisitTypeMapper';
import { useTravelDestinations } from '../api/useTravelDestinations';


const DestinationSelector = dynamic(
  () =>
    import(
      '@features/trip/trip-form-fields/destination-selector'
    ).then((mod) => mod.DestinationSelector),
  {
    ssr: false,
    loading: () => (
      <div className="h-50.5 flex items-center justify-center">
        <Loader size={8} />
      </div>
    ),
  },
);

export function DestinationModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: () => void;
}) {
  const draftDestinations = useTripDraftStore((state) => state.destinations);
  const setDestinations = useTripDraftStore((state) => state.setDestinations);

  const { mutate, isPending } = useTravelDestinations();

  const methods = useForm<DestinationFormValues>({
    resolver: valibotResolver(destinationSchema),
    defaultValues: {
      destinations: draftDestinations ?? [],
      isRoadTrip: false,
    },
  });

  const onSubmit = (data: DestinationFormValues) => {
    const payload: TravelDestination = {
      destinations: data.destinations.map((destination) => {
        const selectedCityId = Number(destination.city_id);

        if (!Number.isInteger(selectedCityId)) {
          throw new Error(`Invalid city_id: ${destination.city_id}`);
        }

        return {
          selected_city_id: selectedCityId,
          visit_type: visitTypeLabelToApiMap[destination.visitType],
        };
      }),
    };

    console.log('payload ارسالی:', payload);

    mutate(payload, {
      onSuccess: () => {
        setDestinations(data.destinations);
        setOpen();
      },
    });
  };

  return (
    <Dialog
      title="مقصد سفرت کجاست؟"
      description="شهری که می‌خوای کشفش کنی رو انتخاب کن."
      size="large"
      isOpen={open}
      onClose={setOpen}
      footer={
        <Button
          type="submit"
          form="destination-form-id"
          variant="primary"
          rounded="full"
          className="py-4"
          disabled={isPending}
        >
          {isPending ? 'در حال ثبت...' : 'بزن بریم!'}
        </Button>
      }
    >
      <FormProvider {...methods}>
        <form
          id="destination-form-id"
          role="form"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <DestinationSelector />
        </form>
      </FormProvider>
    </Dialog>
  );
}
