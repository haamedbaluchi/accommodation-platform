import {
  array,
  boolean,
  check,
  forward,
  InferOutput,
  length,
  maxValue,
  minValue,
  number,
  object,
  optional,
  picklist,
  pipe,
  string,
  union,
} from 'valibot';

import { BUDGET_MAX, BUDGET_MIN } from '@features/trip/edit-trip-budget';


export const destinationVisitTypeLabels = [
  'شروع سفر',
  'اقامت',
  'بازدید',
  'توقف بین راه',
  'بازگشت',
] as const;

export const createTripSchema = pipe(
  object({
    title: optional(string(), 'سفر جدید'),

    destinations: optional(
      array(
        object({
          city_id: union([string(), number()]),
          city_name: string(),
          province: string(),
          country: string(),
          image: object({
            image_url: optional(string()),
            image_alt: string(),
          }),
          visitType: picklist(destinationVisitTypeLabels),
        }),
      ),
      [],
    ),

    isRoadTrip: optional(boolean(), false),

    totalDays: optional(number(), 1),

    travelerCount: optional(number(), 1),

    friends: optional(array(string()), []),

    // budget: optional(picklist(['expensive', 'normal', 'economic']), 'normal'),
    budgetRange: pipe(
      array(pipe(number(), minValue(BUDGET_MIN), maxValue(BUDGET_MAX))),
      length(2, 'بازه بودجه باید شامل حداقل و حداکثر باشد'),
    ),
    paceType: optional(picklist(['fast', 'balanced', 'relaxed']), 'balanced'),

    favoriteLocations: optional(
      array(
        picklist([
          'historical',
          'pilgrimage',
          'nightlife',
          'exciting',
          'museum',
          'restaurant',
          'shopping',
          'nature',
        ]),
      ),
      ['nature'],
    ),

    startDate: optional(string(), ''),

    endDate: optional(string(), ''),
  }),

  forward(
    check((input) => {
      if (!input.startDate || !input.endDate) return true;

      return new Date(input.startDate) <= new Date(input.endDate);
    }, 'تاریخ پایان سفر نمی‌تواند قبل از تاریخ شروع باشد.'),
    ['endDate'],
  ),
);

export type NewTripFormInputs = InferOutput<typeof createTripSchema>;
