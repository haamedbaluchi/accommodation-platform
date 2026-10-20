import type { AIResponseStatus } from './commen/common.types';
import { NodeObservability } from './observability/observability.types';
import { FinalOutput } from './planner/final-output.types';
import { StructuredItinerary } from './planner/structured.types';
import { ValidationReport } from './planner/validation.types';
import { ParsedRequest } from './parsed-request/parsed-request.types';
import { ResearchData, WebSource } from './research/research.types';

export interface TripPlannerState {
  sessionId: string | null;

  finalOutput: FinalOutput | null;
  structured: StructuredItinerary | null;

  parsedRequest: ParsedRequest | null;
  researchData: ResearchData | null;

  validationReport: ValidationReport | null;
  researchWarnings: string[];
  nodeObservability: NodeObservability[];

  plannerFallbackUsed: boolean;
  revisionFallbackUsed?: boolean;
  revisionWebSources?: WebSource[];

  status: AIResponseStatus | null;

  isLoading: boolean;
  error: string | null;
}

export interface TripPlannerViewModel {
  chat: {
    status: AIResponseStatus;
    narrative: string;
    markdown: string;
    fallbackUsed: boolean;
  };

  plan: StructuredItinerary;

  research: ResearchData;

  debug: {
    parsedRequest: ParsedRequest;
    validationReport: ValidationReport;
    nodeObservability: NodeObservability[];
    plannerFallbackUsed: boolean;
    revisionFallbackUsed?: boolean;
  };
}
