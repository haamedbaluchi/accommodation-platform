export type AIResponseStatus = 'ok' | 'needs_clarification';

export type CurrencyCode =
  | 'IRR'
  | 'IRT'
  | 'USD'
  | 'EUR'
  | 'AED'
  | 'TRY'
  | 'GEL'
  | 'AMD'
  | 'THB'
  | 'MYR'
  | 'UNKNOWN'
  | string;

export type TravelStyle =
  | 'economic'
  | 'budget'
  | 'standard'
  | 'comfort'
  | 'luxury'
  | 'family'
  | 'romantic'
  | 'adventure'
  | 'cultural'
  | 'business'
  | 'unknown'
  | string;

export type ProviderStatus =
  | 'success'
  | 'failed'
  | 'skipped'
  | 'timeout'
  | 'fallback'
  | 'unknown'
  | string;

export type ActivityCategory =
  | 'sightseeing'
  | 'food'
  | 'transport'
  | 'hotel'
  | 'shopping'
  | 'culture'
  | 'nature'
  | 'entertainment'
  | 'rest'
  | 'flight'
  | 'other'
  | string;

export type SeverityLevel = 'info' | 'warning' | 'error' | string;

export type UnknownRecord = Record<string, unknown>;

export type Nullable<T> = T | null;
export type Maybe<T> = T | null | undefined;
