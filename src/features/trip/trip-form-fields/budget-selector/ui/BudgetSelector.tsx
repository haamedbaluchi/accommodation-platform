'use client';

import {
  BudgetSliderLabel,
  BudgetSliderRoot,
  BudgetSliderTrack,
  BudgetSliderValue,
} from './budget-slider';
import { Controller, useFormContext } from 'react-hook-form';

export function BudgetSelector() {
  const { watch } = useFormContext();
  const { control } = useFormContext();

  const budget = watch('budgetRange');
  return (
    <div className="flex flex-col gap-4 px-4 mt-6">
      <BudgetSliderRoot>
        <BudgetSliderLabel value={budget[1]} />

        <div className="w-full flex gap-3 sm:gap-5 justify-center">
          <span className="text-text-primary text-[0.625rem] xs:text-xs md:text-sm whitespace-nowrap">
            {budget[1]} میلیون تومان
          </span>

          <Controller
            control={control}
            name="budgetRange"
            render={({ field }) => (
              <BudgetSliderTrack
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          <span className="text-text-primary text-[0.625rem] xs:text-xs md:text-sm  whitespace-nowrap">
            {budget[0]} میلیون تومان
          </span>
        </div>
        <BudgetSliderValue min={budget[0]} max={budget[1]} />
      </BudgetSliderRoot>
    </div>
  );
}
