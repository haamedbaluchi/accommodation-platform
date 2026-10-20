import { PlannerStatus } from '../commen/planner-status';
import { NodeObservability } from '../observability/observability.types';
import { ParsedRequest } from '../parsed-request/parsed-request.types';
import { FinalOutput } from '../planner/final-output.types';
import { StructuredItinerary } from '../planner/structured.types';
import { ValidationReport } from '../planner/validation.types';
import { ResearchData, WebSource } from '../research/research.types';

export interface AiResponsePayload {
  status: PlannerStatus;
  session_id?: string;
  session_title?: string;
  missing_fields?: string[];
  question?: string;
  parsed_request?: ParsedRequest;
  research_data?: ResearchData;
  validation_report?: ValidationReport;
  node_observability?: NodeObservability[];
  planner_fallback_used?: boolean;
  revision_fallback_used?: boolean;
  revision_web_sources?: WebSource[];
  response_fallback_used?: boolean;
  final_output?: FinalOutput;
  structured?: StructuredItinerary;
  message?: string;
  success?: boolean;
}
