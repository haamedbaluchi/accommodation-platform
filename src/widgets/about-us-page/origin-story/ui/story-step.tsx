import Image from "next/image";
import type { FC } from "react";
import type { StoryStep } from "../model/types";
import { cn } from "@shared/lib";

interface StoryStepCardProps {
  readonly step: StoryStep;
}

export const StoryStepCard: FC<StoryStepCardProps> = ({ step }) => {
  const { id, title, description, image, circleClassName } = step;
  const titleId = `origin-step-title-${id}`;

  return (
    <article
      aria-labelledby={titleId}
      className="group flex flex-col items-center gap-5 text-center"
    >
      <div
        className={cn(
          "relative size-21 overflow-hidden rounded-full sm:size-25",
          "transition-transform duration-300 ease-out group-hover:scale-105",
          circleClassName,
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 48px, 74px"
          className="object-cover p-5"
          priority={step.order <= 2}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3
          id={titleId}
          className="text-lg font-bold leading-7 text-text-main sm:text-2xl"
        >
          {title}
        </h3>

        <p className="max-w-[220px] text-sm leading-6 text-text-foreground sm:max-w-[310px]">
          {description}
        </p>
      </div>
    </article>
  );
};

StoryStepCard.displayName = "StoryStepCard";