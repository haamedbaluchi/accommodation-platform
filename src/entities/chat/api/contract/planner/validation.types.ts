import type { SeverityLevel } from '../commen/common.types';

export interface ValidationIssue {
  field?: string;
  code?: string;
  message: string;
  severity?: SeverityLevel;
  [key: string]: unknown;
}

export interface ValidationReport {
  is_valid?: boolean;
  budget_valid?: boolean;
  constraints_valid?: boolean;
  itinerary_valid?: boolean;
  issues?: ValidationIssue[];
  warnings?: string[];
  errors?: string[];
  score?: number;
  summary?: string;
  [key: string]: unknown;
}
