'use client';

import dynamic from 'next/dynamic';
import { Button, Dialog,Loader } from '@shared/ui';
import { FormProvider, useForm } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';

import { useEffect } from 'react';
import { BudgetFormInputs, budgetSchema } from '../model/budgetSchema';
import { TripDraftBudget, useTripDraftStore } from '@entities/trip/trip-draft';
import { useTravelBudget } from '../api/useTravelBudget';


const BudgetSelector = dynamic(
  () =>
    import(
      '@features/trip/trip-form-fields/budget-selector'
    ).then((mod) => mod.BudgetSelector),
  {
    ssr: false,
    loading: () => (
      <div className="h-63.5">
        <Loader size={8} />
      </div>
    ),
  },
);

export function BudgetModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: () => void;
}) {
  const { mutateAsync: setTravelBudget, isPending } = useTravelBudget();

  const draftBudgetRange = useTripDraftStore((state) => state.budgetRange);
  const setBudgetRange = useTripDraftStore((state) => state.setBudgetRange);

  const methods = useForm<BudgetFormInputs>({
    resolver: valibotResolver(budgetSchema),
    defaultValues: {
      budgetRange: draftBudgetRange || [0, 50],
    },
  });

  useEffect(() => {
    if (!open) return;

    methods.reset({
      budgetRange: draftBudgetRange || [0, 50],
    });
  }, [open, draftBudgetRange, methods]);

  const onSubmit = async (data: BudgetFormInputs) => {
    if (!data.budgetRange) return;

    try {
      await setTravelBudget(data.budgetRange as TripDraftBudget);
    } catch {}

    setBudgetRange(data.budgetRange as TripDraftBudget);

    setOpen();
  };

  return (
    <Dialog
      type="default"
      size="large"
      title="وضعیت جیبمون تو این سفر چطوره؟"
      description="بر اساس سبک سفرت، بهترین جاهای ممکن رو برات دست‌چین می‌کنیم."
      isOpen={open}
      onClose={setOpen}
      footer={
        <Button
          variant="primary"
          rounded="full"
          size="x_large"
          className="h-12 py-3 px-4"
          type="submit"
          form="travel-budget-form"
          disabled={isPending}
        >
          {isPending ? 'در حال ثبت...' : 'بزن بریم!'}
        </Button>
      }
    >
      <FormProvider {...methods}>
        <form
          role="form"
          id="travel-budget-form"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <BudgetSelector />
        </form>
      </FormProvider>
    </Dialog>
  );
}
