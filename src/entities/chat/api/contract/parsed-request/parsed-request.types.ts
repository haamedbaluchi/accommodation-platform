import type { CurrencyCode, TravelStyle } from '../commen/common.types';

export interface TravelBudget {
  amount?: number;
  currency?: CurrencyCode;
  level?: 'low' | 'medium' | 'high' | 'luxury' | string;
  min?: number;
  max?: number;
  [key: string]: unknown;
}

export interface ParsedRequest {
  origin?: string;
  destination?: string;

  start_date?: string;
  end_date?: string;

  duration_days?: number | string;
  traveler_count?: number;

  budget?: TravelBudget;

  travel_style?: TravelStyle;

  interests?: string[];
  preferences?: string[];
  constraints?: string[];

  language?: string;

  raw_user_message?: string;

  [key: string]: unknown;
}
