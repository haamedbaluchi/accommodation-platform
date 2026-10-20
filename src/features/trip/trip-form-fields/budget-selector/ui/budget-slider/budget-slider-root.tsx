"use client";

import { cn } from "@shared/lib";
import { ReactNode } from "react";

type BudgetSliderRootProps = {
  children: ReactNode;
  className?: string;
};

export function BudgetSliderRoot({
  children,
  className,
}: BudgetSliderRootProps) {
  return (
    <section
      className={cn(
        "flex w-full flex-col items-center gap-7",
        className
      )}
    >
      {children}
    </section>
  );
}