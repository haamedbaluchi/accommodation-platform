import { TrendingDestination } from '@entities/destination';

import { Flame } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';


import { TrendingDestinationCard } from './trending-destination-card';
import { GridSection } from '@shared/ui/layout-section';

type TrendingDestinationSectionProps = {
  destinations: TrendingDestination[];
};

export function TrendingDestinationSection({
  destinations,
}: TrendingDestinationSectionProps) {
  return (
    <GridSection
      title="مقصدهای پرطرفدار این روزها"
      icon={
        <HugeiconsIcon
          icon={Flame}
          className="size-5 text-orange-500"
        />
      }
      seeAllHref="/explore/trending-destinations"
      items={destinations}
      renderItem={(destination) => (
        <TrendingDestinationCard destination={destination} />
      )}
    />
  );
}