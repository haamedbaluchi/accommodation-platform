'use client';

import dynamic from 'next/dynamic';
import { Button, Dialog,Loader } from '@shared/ui';
import { FormProvider, useForm } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { useTripDraftStore } from '@entities/trip/trip-draft';
import { useTravelCompanions } from '../api/useTravelCompanions';
import { TravelersFormInput, travelersSchema } from '../model/travelersSchema';

const TravelersSelector = dynamic(
  () =>
    import(
      '@features/trip/trip-form-fields/travelers-selector'
    ).then((mod) => mod.TravelersSelector),
  {
    ssr: false,
    loading: () => (
      <div className="h-50.5">
        <Loader size={8} />
      </div>
    ),
  },
);

export function TravelersTripModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: () => void;
}) {
  const draftTravelerCount = useTripDraftStore((state) => state.travelerCount);
  const setTravelerCount = useTripDraftStore((state) => state.setTravelerCount);

  const { mutate, isPending } = useTravelCompanions();

  const methods = useForm<TravelersFormInput>({
    resolver: valibotResolver(travelersSchema),
    defaultValues: {
      travelerCount: draftTravelerCount || 1,
      friends: [],
    },
  });

  const onSubmit = (data: TravelersFormInput) => {
    const payload = {
      companions: data.friends || [],
    };

    mutate(payload, {
      onSuccess: () => {
        setTravelerCount(data.travelerCount || 1);
        setOpen();
      },
    });
  };

  return (
    <Dialog
      size="large"
      title="چند نفر قراره همسفر باشن؟"
      description="بگو چند نفرین تا سفر رو براتون بچینیم."
      className="max-w-160.5"
      isOpen={open}
      onClose={setOpen}
      footer={
        <Button
          variant="primary"
          rounded="full"
          size="x_large"
          className="h-12 py-3 px-4"
          form="traveler-trip-form"
          type="submit"
          disabled={isPending}
        >
          {isPending ? 'در حال ثبت...' : 'بزن بریم!'}
        </Button>
      }
    >
      <FormProvider {...methods}>
        <form
          role="form"
          id="traveler-trip-form"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <TravelersSelector />
        </form>
      </FormProvider>
    </Dialog>
  );
}
