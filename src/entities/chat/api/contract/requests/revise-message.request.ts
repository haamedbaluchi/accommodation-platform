import { ParsedRequest } from "../parsed-request/parsed-request.types";
import { StructuredItinerary } from "../planner/structured.types";
import { ResearchData } from "../research/research.types";

export interface ReviseMessageRequest {
  sessionId: string;
  feedback: string;
  parsedRequest: ParsedRequest;
  researchData: ResearchData;
  itineraryDraft: StructuredItinerary;
}
