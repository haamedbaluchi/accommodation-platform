'use client';

import dynamic from 'next/dynamic';
import { Button, Dialog, Loader } from '@shared/ui';
import { FormProvider, useForm } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';


import { toast } from 'sonner';
import { ApiError } from '@shared/api';
import { useTripDraftStore } from '@entities/trip/trip-draft';
import { DateTripFormInput, dateTripSchema } from '../model/dateTripSchema';
import { useSetTravelDuration } from '../api/useSetTravelDuration';
import { getInclusiveDaysBetween, toDateOnly } from '@shared/lib/date';


const DateSelector = dynamic(
  () =>
    import('@features/trip/trip-form-fields/data-selector').then(
      (mod) => mod.DateSelector,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-63.5">
        <Loader size={8} />
      </div>
    ),
  },
);

export function DateSelectorModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: () => void;
}) {
  const draftStartDate = useTripDraftStore((state) => state.startDate);
  const draftEndDate = useTripDraftStore((state) => state.endDate);
  const draftTotalDays = useTripDraftStore((state) => state.totalDays);
  const setDateRange = useTripDraftStore((state) => state.setDateRange);

  const { mutate, isPending } = useSetTravelDuration();

  const methods = useForm<DateTripFormInput>({
    resolver: valibotResolver(dateTripSchema),
    defaultValues: {
      totalDays: draftTotalDays || 1,
      startDate: draftStartDate || '',
      endDate: draftEndDate || '',
    },
  });

  const onSubmit = (data: DateTripFormInput) => {
    const hasDateRange = !!data.startDate && !!data.endDate;

    const startDate = hasDateRange ? toDateOnly(data?.startDate) : '';
    const endDate = hasDateRange ? toDateOnly(data?.endDate) : '';

    const totalDays = hasDateRange
      ? getInclusiveDaysBetween(startDate, endDate)
      : data.totalDays || 1;

    const normalizedData: DateTripFormInput = {
      ...data,
      startDate,
      endDate,
      totalDays,
    };

    mutate(normalizedData, {
      onSuccess: () => {
        setDateRange({
          startDate,
          endDate,
          totalDays,
        });

        setOpen();
      },
      onError: (error: ApiError) => {
        toast.error(error.detail || 'مشکلی در انتخاب بازه سفر پیش آمده');
      },
    });
  };

  return (
    <Dialog
      type="default"
      size="medium"
      title="چه زمانی راهی می‌شی؟"
      description="تاریخ یا زمان تقریبی سفرت رو مشخص کن."
      className="text-text-main"
      isOpen={open}
      onClose={setOpen}
      footer={
        <Button
          variant="primary"
          rounded="full"
          size="x_large"
          className="h-12 py-3 px-4"
          form="date-trip-form"
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
          id="date-trip-form"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <DateSelector />
        </form>
      </FormProvider>
    </Dialog>
  );
}
