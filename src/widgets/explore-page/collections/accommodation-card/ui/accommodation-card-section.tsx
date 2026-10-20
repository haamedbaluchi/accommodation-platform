
import { GridSection } from '@shared/ui/layout-section';
import type { Accommodation } from '../model/types';

import { AccommodationCard } from './accommodation-card';

type AccommodationSectionProps = {
  accommodations: Accommodation[];
};

export function AccommodationSection({
  accommodations,
}: AccommodationSectionProps) {
  return (
    <GridSection
      title="اقامتگاه‌هایی که بخشی از سفرند"
      icon={<span>🏠</span>}
      seeAllHref="/explore/accommodations/"
      items={accommodations}
      renderItem={(accommodation) => (
        <AccommodationCard accommodation={accommodation} />
      )}
    />
  );
}