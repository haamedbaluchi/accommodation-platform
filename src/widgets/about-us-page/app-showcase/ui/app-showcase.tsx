import Image from 'next/image';
import type { FC } from 'react';
import { SHOWCASE_COPY, SHOWCASE_FEATURES } from '../model/features.const';
import type { AppShowcaseProps } from '../model/types';
import { FeatureChecklist } from './feature-checklist';

import mapBg from '/public/images/map.png';
import phoneMockup from '/public/images/phone.png';
import { cn } from '@shared/lib';

export const AppShowcase: FC<AppShowcaseProps> = ({
  phoneImage = phoneMockup,
  mapImage = mapBg,
  heading = SHOWCASE_COPY.heading,
  description = SHOWCASE_COPY.description,
  features = SHOWCASE_FEATURES,
  className,
}) => {
  return (
    <section
      aria-label={heading}
      className={cn(
        'w-full pr-4 py-4 sm:pr-6 sm:py-6 lg:pr-8 lg:py-8 max-w-7xl shadow-aside mx-auto rounded-5xl',
        className,
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-1 flex flex-col gap-6 lg:order-1">
          <h2 className="max-w-xs text-2xl font-black leading-snug tracking-tight text-text-main sm:text-3xl lg:text-4xl lg:leading-[1.3]">
            {heading}
          </h2>

          <p className="max-w-xl text-sm leading-8 text-text-foreground sm:text-base sm:leading-9">
            {description}
          </p>

          <FeatureChecklist features={features} />
        </div>

        <div className="relative order-2 flex justify-center lg:order-2">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={mapImage}
              alt=""
              width={600}
              height={400}
              className="w-[85%] opacity-90 sm:w-full"
              aria-hidden="true"
              priority
            />
          </div>

          <div className="relative z-10 w-[170px] sm:w-[200px] lg:w-[230px]">
            <Image
              src={phoneImage}
              alt="نمای اپلیکیشن بومرو — صفحه سفرهای شما"
              width={300}
              height={620}
              className="w-full drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

AppShowcase.displayName = 'AppShowcase';
