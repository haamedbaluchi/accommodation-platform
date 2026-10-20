import type {
  ActivityCategory,
  CurrencyCode,
  ProviderStatus,
  TravelStyle,
} from '../commen/common.types';
import { WeatherSummary } from '../research/research.types';
import type { ValidationReport } from './validation.types';

export interface TripSummary {
  destination: string;
  duration_days: number | string;
  traveler_count: number;
  origin: string;
  travel_style: TravelStyle;
  [key: string]: unknown;
}

export interface RecommendedFlight {
  id?: string;
  provider?: string;

  airline?: string;
  airline_code?: string;
  flight_number?: string;

  origin?: string;
  destination?: string;

  departure_airport?: string;
  arrival_airport?: string;

  departure_time?: string;
  arrival_time?: string;

  departure_date?: string;
  arrival_date?: string;

  duration?: string;
  stops?: number;
  stopovers?: string[];

  cabin_class?: string;

  price?: number;
  currency?: CurrencyCode;

  booking_url?: string;
  baggage?: string;

  score?: number;
  reason?: string;

  [key: string]: unknown;
}

export interface RecommendedHotel {
  id?: string;
  provider?: string;

  name?: string;
  city?: string;
  address?: string;
  area?: string;

  stars?: number;
  rating?: number;
  review_count?: number;

  check_in?: string;
  check_out?: string;
  nights?: number;

  room_type?: string;
  board_type?: string;

  price_per_night?: number;
  total_price?: number;
  currency?: CurrencyCode;

  amenities?: string[];

  image_url?: string;
  images?: string[];

  booking_url?: string;
  map_url?: string;

  latitude?: number;
  longitude?: number;

  reason?: string;

  [key: string]: unknown;
}

export interface DailyItineraryItem {
  day: number;
  date: string;
  theme: string;
  activities: string[];
  daily_cost: number;

  summary?: string;
  meals?: string[];
  transport_notes?: string;
  accommodation_notes?: string;

  [key: string]: unknown;
}

export interface ItineraryTableRow {
  day: number;
  date: string;
  time: string;
  activity: string;
  category: ActivityCategory;

  location?: string;
  duration?: string;
  cost?: number;
  currency?: CurrencyCode;
  notes?: string;

  [key: string]: unknown;
}

export interface CostBreakdown {
  flights: number;
  hotel: number;
  activities: number;
  transportation: number;
  total: number;
  currency: CurrencyCode;

  food?: number;
  shopping?: number;
  insurance?: number;
  visa?: number;
  taxes?: number;
  other?: number;

  [key: string]: unknown;
}

export interface ProviderMetadata {
  provider?: string;
  status?: ProviderStatus;
  source?: string;

  started_at?: string;
  finished_at?: string;
  duration_ms?: number;

  fallback_used?: boolean;

  [key: string]: unknown;
}
export interface MapPlace {
  id: string;
  type?: string;
  name: string;
  query?: string;
  formatted_address?: string;
  place_id?: string;
  lat: number;
  lng: number;
}

export interface NeshanMapContext {
  provider: string;
  places: MapPlace[];
}
export interface StructuredItinerary {
  trip_summary: TripSummary;
  recommended_flight: RecommendedFlight;
  recommended_hotel: RecommendedHotel;
  daily_itinerary: DailyItineraryItem[];
  itinerary_table: ItineraryTableRow[];
  cost_breakdown: CostBreakdown;
  weather_summary: WeatherSummary;
  travel_tips: string[];
  assumptions: string[];
  warnings: string[];
  validation_report: ValidationReport;
  provider_metadata: ProviderMetadata[];

  map_context?: NeshanMapContext;
}
