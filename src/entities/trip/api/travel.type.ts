import { Trip } from '@entities/trip';
import {
  TravelPaceType,
  TravelStatus,
  TravelTripType,
} from '@shared/types/trip';

export type FavoriteLocationType =
  | 'historical'
  | 'pilgrimage'
  | 'nightlife'
  | 'exciting'
  | 'museum'
  | 'restaurant'
  | 'shopping'
  | 'nature';

export type ApiVisitType =
  | 'visit'
  | 'trip_start'
  | 'stay'
  | 'stopover'
  | 'return';

export interface ApiResponse {
  success: boolean;
  message: string;
}

export interface Destination {
  selected_city_id: number;
  visit_type: ApiVisitType;
}

export interface TravelBudgetRangePayload {
  budget_range: string;
}
export interface TravelDestination {
  destinations: Destination[];
}

export interface TravelTripDuration {
  type: 'days' | 'date_range';
  total_days?: number;
  start_date?: string;
  end_date?: string;
}

export interface CreateTripPayload {
  title: string;
  trip_type: TravelTripType;
  status: TravelStatus;
  budget_range: string;
  start_date: string;
  end_date: string;
  pace_type: TravelPaceType;
  is_road_trip: boolean;
  total_days: number;
  traveler_count: number;
  favorite_locations: FavoriteLocationType[];
  destinations: { selected_city_id: number; visit_type: string }[];
}

export interface CreateTripResponse extends ApiResponse {
  data?: Trip;

  title: string;
  destination_summary: string;
  ai_context: Record<string, unknown>;
  ai_message: string;
  trip_id: string;
}


export interface ErrorType {
  detail: string;
}
