import { CurrencyCode, UnknownRecord } from '../commen/common.types';

export interface FlightOption {
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
  refundable?: boolean;

  score?: number;

  [key: string]: unknown;
}

export interface HotelOption {
  id?: string;
  provider?: string;

  name?: string;
  city?: string;
  country?: string;
  address?: string;
  area?: string;

  stars?: number;
  rating?: number;
  review_count?: number;

  check_in?: string;
  check_out?: string;

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

  [key: string]: unknown;
}

export interface ImageResult {
  id?: string;
  title?: string;
  url: string;
  thumbnail_url?: string;
  source?: string;
  alt?: string;

  width?: number;
  height?: number;

  [key: string]: unknown;
}

export interface MapContext {
  id?: string;
  title?: string;
  address?: string;

  latitude?: number;
  longitude?: number;

  map_url?: string;
  provider?: string;

  [key: string]: unknown;
}

export interface Attraction {
  id?: string;
  name: string;

  description?: string;
  category?: string;

  city?: string;
  address?: string;

  latitude?: number;
  longitude?: number;

  rating?: number;
  review_count?: number;

  image_url?: string;
  website_url?: string;
  map_url?: string;

  estimated_visit_duration?: string;
  estimated_cost?: number;
  currency?: CurrencyCode;

  [key: string]: unknown;
}

export interface Restaurant {
  id?: string;
  name: string;

  cuisine?: string;
  description?: string;

  city?: string;
  address?: string;

  rating?: number;
  review_count?: number;

  price_level?: string;
  estimated_cost_per_person?: number;
  currency?: CurrencyCode;

  image_url?: string;
  website_url?: string;
  map_url?: string;

  latitude?: number;
  longitude?: number;

  [key: string]: unknown;
}

export interface WebSource {
  title?: string;
  url: string;
  snippet?: string;
  source?: string;
  published_at?: string;
  accessed_at?: string;
  [key: string]: unknown;
}

export interface WeatherForecastDay {
  date: string;
  day?: number;
  condition?: string;
  min_temperature?: number;
  max_temperature?: number;
  temperature?: number;
  humidity?: number;
  wind?: string;
  icon?: string;
  [key: string]: unknown;
}

export interface WeatherSummary {
  destination?: string;
  date_range?: string;

  average_temperature?: string;
  min_temperature?: number;
  max_temperature?: number;

  condition?: string;
  humidity?: number;
  wind?: string;

  forecast?: WeatherForecastDay[];

  recommendation?: string;

  [key: string]: unknown;
}

export interface ShabHouse {
  house_id: number;
  name: string;
  detail: string;
  calendar: string;
  reviews: string;
  similar: string;
  images_from: string;
}

export interface ShabRequests {
  api_base: string;
  auth: any;
  search: any;
  house_ids: number[];
  houses: ShabHouse[];
}

export interface ResearchData {
  flights?: FlightOption[];
  hotels?: HotelOption[];
  attractions?: Attraction[];
  restaurants?: Restaurant[];
  images?: ImageResult[];

  shab_requests?: ShabRequests;
  shab_available?: boolean;
  shab_frontend_hotel_list?: any;

  maps?: MapContext[];
  map_context?: MapContext[];
  web_sources?: WebSource[];
  weather_summary?: WeatherSummary;
  raw_results?: UnknownRecord;
  [key: string]: unknown;
}
