import type { FilterOption } from '@shared/ui';

export const FILTER_VALUES = {
  ALL: 'all',
  POPULAR: 'popular',
  CULTURAL: 'cultural',
  NATURE: 'nature',
  FOOD: 'food',
  FAMILY: 'family',
  COUPLES: 'couples',
  BUDGET: 'budget',
  ROAD_TRIP: 'road-trip',
} as const;

export type ExploreFilter =
  (typeof FILTER_VALUES)[keyof typeof FILTER_VALUES];

export const FILTER_OPTIONS: FilterOption<ExploreFilter>[] = [
  {
    value: FILTER_VALUES.ALL,
    label: 'برای تو',
  },
  {
    value: FILTER_VALUES.POPULAR,
    label: 'کویرگردی 🏜️',
  },
  {
    value: FILTER_VALUES.CULTURAL,
    label: 'سفر ساحلی 🌊',
  },
  {
    value: FILTER_VALUES.NATURE,
    label: 'طبیعت‌گردی 🌿',
  },
  {
    value: FILTER_VALUES.FOOD,
    label: 'غذا و شکم‌گردی 🍽️',
  },
  {
    value: FILTER_VALUES.FAMILY,
    label: 'خانوادگی 👨‍👩‍👧',
  },
  {
    value: FILTER_VALUES.BUDGET,
    label: 'سفر اقتصادی 🎒',
  },
  {
    value: FILTER_VALUES.ROAD_TRIP,
    label: 'تاریخی 🏛️',
  },
];