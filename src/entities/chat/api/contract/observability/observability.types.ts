import type { ProviderStatus } from '../commen/common.types';

export interface NodeObservability {
  node?: string;
  node_name?: string;

  provider?: string;
  status?: ProviderStatus;
  duration_ms?: number;

  started_at?: string;
  finished_at?: string;

  input_tokens?: number;
  output_tokens?: number;
  total_tokens?: number;

  error?: string;
  retry_count?: number;
  fallback_used?: boolean;

  [key: string]: unknown;
}
