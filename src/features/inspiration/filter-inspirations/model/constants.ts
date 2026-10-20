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

export type InspirationFilter =
  (typeof FILTER_VALUES)[keyof typeof FILTER_VALUES];

export const FILTER_OPTIONS: FilterOption<InspirationFilter>[] = [
  {
    value: FILTER_VALUES.ALL,
    label: 'همه',
  },
  {
    value: FILTER_VALUES.POPULAR,
    label: '🔥 محبوب‌ترین',
  },
  {
    value: FILTER_VALUES.CULTURAL,
    label: '🏛️ فرهنگی',
  },
  {
    value: FILTER_VALUES.NATURE,
    label: '🌿 طبیعت',
  },
  {
    value: FILTER_VALUES.FOOD,
    label: '🍜 شکم‌گردی',
  },
  {
    value: FILTER_VALUES.FAMILY,
    label: '👨‍👩‍👧 خانوادگی',
  },
  {
    value: FILTER_VALUES.COUPLES,
    label: '❤️ دونفره',
  },
  {
    value: FILTER_VALUES.BUDGET,
    label: '💰 اقتصادی',
  },
  {
    value: FILTER_VALUES.ROAD_TRIP,
    label: '🚗 جاده‌ای',
  },
];


