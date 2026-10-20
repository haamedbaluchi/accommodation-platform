

export interface TouristDestination {
  city_id: string | number;
  city_name: string;
  province: string;
  country: string;
  distance?: number;
  image: {
    image_alt: string;
    image_url?: string;
  };
  distanceUnit?: 'km' | 'm' | 'mi';
}

export type DestinationType = Omit<
  TouristDestination,
  'distanceUnit' | 'distance'
>;

export const destinationVisitTypeLabels = [
  'شروع سفر',
  'اقامت',
  'بازدید',
  'توقف بین راه',
  'بازگشت',
] as const;

export type DestinationVisitTypeLabel =
  (typeof destinationVisitTypeLabels)[number];

export type SelectedDestination = TouristDestination & {
  visitType: DestinationVisitTypeLabel;
};