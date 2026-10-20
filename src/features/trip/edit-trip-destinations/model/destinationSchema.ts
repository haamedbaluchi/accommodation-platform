import * as v from 'valibot';

export const destinationVisitTypeLabels = [
  'شروع سفر',
  'اقامت',
  'بازدید',
  'توقف بین راه',
  'بازگشت',
] as const;

export const cityImageSchema = v.object({
  image_url: v.optional(v.string()),
  image_alt: v.string(),
});

export const selectedDestinationSchema = v.object({
  city_id: v.union([v.string(), v.number()]),
  city_name: v.string(),
  province: v.string(),
  country: v.string(),
  image: cityImageSchema,
  distance: v.optional(v.number()),
  distanceUnit: v.optional(v.picklist(['km', 'm', 'mi'])),
  visitType: v.picklist(destinationVisitTypeLabels),
});

export const destinationSchema = v.object({
  destinations: v.array(selectedDestinationSchema),
  isRoadTrip: v.boolean(),
});

export type DestinationFormValues = v.InferOutput<typeof destinationSchema>;
export type SelectedDestinationFormValue = v.InferOutput<
  typeof selectedDestinationSchema
>;

export type DestinationVisitTypeLabel =
  (typeof destinationVisitTypeLabels)[number];
