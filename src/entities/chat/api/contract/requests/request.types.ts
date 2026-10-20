import { StructuredItinerary } from '../planner/structured.types';
import { ResearchData } from '../research/research.types';
import { ParsedRequest } from '../parsed-request/parsed-request.types';

export interface ChatRequest {
  user_message: string;
  session_id?: string;
}

export interface ReviseRequest {
  user_message: string;
  session_id: string;
  parsed_request: ParsedRequest;
  research_data: ResearchData;
  itinerary_draft: StructuredItinerary;
}
