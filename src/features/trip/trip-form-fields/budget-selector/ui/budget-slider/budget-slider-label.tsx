'use client';

import { Chip } from '@shared/ui';
import { cn } from '@shared/lib';

type BudgetSliderLabelProps = {
  value: number;
  title?: string;
  className?: string;
};

export function BudgetSliderLabel({
  value,
  title = 'چقدر هزینه کنیم؟',
  className,
}: BudgetSliderLabelProps) {
  return (
    <div className={cn('flex w-full items-center justify-center', className)}>
      <Chip
        text="مسافران قبلی بومرو معمولاً تو این بازه انتخاب کردن"
        className="bg-[#FFF0DB4D] text-tertiary-hover border-none text-[0.625rem] xs:text-xs md:text-sm"
      />
    </div>
  );
}
