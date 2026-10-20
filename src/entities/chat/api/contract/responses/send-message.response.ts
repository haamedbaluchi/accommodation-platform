import { PlannerStatus } from "../commen/planner-status";
import { AiResponsePayload } from "./ai-response.types";

export interface SendMessageResponse extends AiResponsePayload {
  status: PlannerStatus;
  ai_response?: AiResponsePayload;
}
