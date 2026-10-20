"use client";
import { cn } from "@shared/lib";

type BudgetSliderValueProps = {
  min: number;
  max: number;
  unit?: string;
  className?: string;
};

export function BudgetSliderValue({
  min,
  max,
  unit = "میلیون تومان",
  className,
}: BudgetSliderValueProps) {
  const isRange = min > 0;

  return (
    <div
      className={cn(
        "flex min-w-28 flex-col items-center justify-center gap-1 bg-background pr-3",
        className
      )}
    >
      <span className="text-lg font-bold text-primary-active">
        {isRange ? `${min} تا ${max}` : max} {unit}
      </span>
    </div>
  );
}