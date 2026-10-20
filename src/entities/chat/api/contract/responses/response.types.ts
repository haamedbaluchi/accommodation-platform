import { AIResponseStatus } from '../commen/common.types';
import { NodeObservability } from '../observability/observability.types';
import { FinalOutput } from '../planner/final-output.types';
import { ValidationReport } from '../planner/validation.types';
import { ParsedRequest } from '../parsed-request/parsed-request.types';
import { ResearchData, WebSource } from '../research/research.types';

export interface ApiResponse {
  status: AIResponseStatus;
  session_id: string;

  final_output: FinalOutput;
  parsed_request: ParsedRequest;
  research_data: ResearchData;
  validation_report: ValidationReport;

  research_warnings: string[];
  node_observability: NodeObservability[];

  planner_fallback_used: boolean;

  revision_fallback_used?: boolean;
  revision_web_sources?: WebSource[];
}

export interface ChatResponse extends ApiResponse {
  revision_fallback_used?: never;
  revision_web_sources?: never;
}

export interface ReviseResponse extends ApiResponse {
  revision_fallback_used: boolean;
  revision_web_sources: WebSource[];
}

export type AIResponse = ChatResponse | ReviseResponse;
