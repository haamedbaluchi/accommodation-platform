import { DestinationExperience } from '@entities/travel-inspiration';
import { FILTER_VALUES, InspirationFilter } from '../model/constants';
import { FILTER_TAG_MAP } from '../model/filter-tag-map';

export function filterDestinationsByCategory(
  destinations: DestinationExperience[],
  filter: InspirationFilter,
): DestinationExperience[] {
  if (filter === FILTER_VALUES.ALL) return destinations;

  const matchTags = FILTER_TAG_MAP[filter];
  if (!matchTags?.length) return destinations; // فیلترهای بدون نگاشت فعلاً همه رو نشون می‌دن

  return destinations.filter((d) =>
    d.tags?.some((tag) => matchTags.includes(tag)),
  );
}
