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
  
  category?: string;
  title?: string;
  description?: string;
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

export type TrendingDestination = {
  id: string;
  coverImage: string;
  category: string;
  title: string;
  description: string;
  bestTimeToVisit: string;
  savedByCount: number;
  savedByAvatars: string[];
  suggestedVisitTime:string
  tags:string[]
};






//////////////////////////////
import type { ExploreImageDTO } from '@entities/explore/model/shared-types';

export interface DestinationDTO {
  id: number;
  name: string;
  short_description: string;
  general_description?: string;
  tags: string[];
  rating: number;
  city_id: number;
  city_name?: string;
  country: string;
  images: ExploreImageDTO[];
  best_season?: string;
  suggested_trip_days?: string;
  suggested_visit_duration?: string;
  open_days?: string;
  status?: string;
  is_active?: boolean;
  latitude?: number;
  longitude?: number;
}