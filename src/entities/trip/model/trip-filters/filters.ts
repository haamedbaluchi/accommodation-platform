import { FilterOption } from "@shared/ui";
import { TripFilter } from "./filters.type";

export const TRIP_FILTER_VALUES = [
  'همه',
  'در جریان',
  'پیش رو',
  'گذشته',
  'شخصی',
  'گروهی',
] as const;


export const TRIP_FILTER_OPTIONS = [
  {
    value: 'همه',
    label: 'همه',
  },
  {
    value: 'در جریان',
    label: 'در جریان',
  },
  {
    value: 'پیش رو',
    label: 'پیش رو',
  },
  {
    value: 'گذشته',
    label: 'گذشته',
  },
  {
    value: 'شخصی',
    label: 'شخصی',
  },
  {
    value: 'گروهی',
    label: 'گروهی',
  },
] as const satisfies readonly FilterOption<TripFilter>[];
