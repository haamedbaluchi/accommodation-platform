import type{ BusinessGrowthStep } from "../model/types";

interface BusinessGrowthStepProps {
  step: BusinessGrowthStep;
}

export function BusinessGrowthStep({ step }: BusinessGrowthStepProps) {
  return (
    <div
      className={`relative min-h-26 overflow-visible rounded-full ${step.bgClass}`}
    >
      <div
        className={`absolute -right-5 top-4 z-10 flex h-24 w-24 -translate-y-1/2 items-center justify-center rounded-full border-8 border-white lg:size-28 ${step.circleClass}`}
      >
        <span className="text-2xl font-black text-neutral-9 lg:text-4xl">
          {step.number}
        </span>
      </div>

      <div className="flex min-h-26 flex-col justify-center pr-28 pl-10 text-right">
        <h3 className="text-base font-bold leading-7 text-neutral-9 lg:text-xl">
          {step.title}
        </h3>

        <p className="mt-2 text-sm font-medium leading-7 text-neutral-7">
          {step.description}
        </p>
      </div>
    </div>
  );
}
