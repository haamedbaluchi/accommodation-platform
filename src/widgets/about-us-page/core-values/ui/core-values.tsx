import type { FC } from "react";
import { CORE_VALUES, WIDGET_COPY } from "../model/values.const";
import type { CoreValuesProps } from "../model/types";
import { ValueCard } from "./value-card";
import { cn } from "@shared/lib";

export const CoreValues: FC<CoreValuesProps> = ({
  items = CORE_VALUES,
  heading = WIDGET_COPY.heading,
  subtitle = WIDGET_COPY.subtitle,
  className,
}) => {
  return (
    <section
      aria-label={heading}
      className={cn(
        "w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <h2 className="text-4xl font-black leading-tight tracking-tight text-text-main sm:text-3xl lg:text-[2.5rem] lg:leading-[1.2]">
            {heading}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-text-foreground sm:mt-5 sm:text-base sm:leading-8 font-medium" >
            {subtitle}
          </p>
        </header>

        <div
          role="list"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {items.map((item, index) => (
            <div role="listitem" key={item.id}>
              <ValueCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

CoreValues.displayName = "CoreValues";