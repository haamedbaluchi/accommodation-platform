import { StructuredItinerary } from "./structured.types";

export interface FinalOutput {
  narrative: string;
  markdown: string;
  structured: StructuredItinerary;
  response_fallback_used: boolean;
  map_context?: {
    provider?: string;

    places?: Array<{
      id: string;
      type: string;
      name: string;
      query?: string;
      formatted_address?: string;
      place_id?: string;
      lat: number;
      lng: number;
    }>;

    routes?: Array<{
      from: string;
      to: string;
      mode: string;
      distance_meters: number;
      duration_seconds: number;
      distance_text: string;
      duration_text: string;
      option?: string;
      estimated_cost?: number;
    }>;

    planning_notes?: string[];
  };
}
