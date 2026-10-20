'use client';

import * as Slider from '@radix-ui/react-slider';
import { cn } from '@shared/lib';

type BudgetSliderTrackProps = {
  value: [number, number];
  onChange: (value: [number, number]) => void;

  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
};

export function BudgetSliderTrack({
  value,
  min = 0,
  max = 100,
  step = 1,
  disabled,
  className,
  onChange,
}: BudgetSliderTrackProps) {
  return (
    <Slider.Root
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      value={value}
      onValueChange={(newValue) => onChange(newValue as [number, number])}
      className={cn(
        'relative flex w-full touch-none select-none items-center max-w-75',
        className,
      )}
    >
      <Slider.Track className="relative h-2 sm:h-3 w-full  overflow-hidden rounded-full bg-[#dbe7fb]">
        <Slider.Range className="absolute h-full rounded-full bg-primary" />
      </Slider.Track>

      <Slider.Thumb
        aria-label="budget-slider"
        className="block size-4 sm:size-6 rounded-full bg-primary border-2 sm:border-3 border-background ring-2 sm:ring-3 ring-[#dbe7fb]/90 shadow-none transition focus-visible:outline-none cursor-pointer"
      />

      <Slider.Thumb
        aria-label="budget-slider"
        className="block size-4 sm:size-6 rounded-full bg-primary border-2 sm:border-3 border-background ring-2 sm:ring-3 ring-[#dbe7fb]/90 shadow-none transition focus-visible:outline-none cursor-pointer"
      />
    </Slider.Root>
  );
}
