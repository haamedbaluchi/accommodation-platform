import { Fragment } from "react";
import type { FC } from "react";
import { ORIGIN_COPY, ORIGIN_STEPS } from "../model/steps.const";
import type { OriginStoryProps } from "../model/types";
import { StoryStepCard } from "./story-step";
import { StepConnector } from "./step-connector";
import { cn } from "@shared/lib";

export const OriginStory: FC<OriginStoryProps> = ({
  steps = ORIGIN_STEPS,
  heading = ORIGIN_COPY.heading,
  subtitle = ORIGIN_COPY.subtitle,
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
        <header className="mb-8 text-center sm:mb-12">
          <h2 className="text-2xl font-black leading-tight tracking-tight text-text-main sm:text-3xl lg:text-[2.5rem] lg:leading-[1.2]">
            {heading}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-text-foreground sm:mt-5 sm:text-base font-medium">
            {subtitle}
          </p>
        </header>

        <div
          role="list"
          className="flex flex-col items-center gap-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8 lg:flex-nowrap lg:gap-0"
        >
          {steps.map((step, index) => (
            <Fragment key={step.id}>
              {index > 0 && <StepConnector />}

              <div
                role="listitem"
                className="flex shrink-0 basis-full sm:basis-auto lg:flex-1 lg:justify-center"
              >
                <StoryStepCard step={step} />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

OriginStory.displayName = "OriginStory";