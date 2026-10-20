import { AiStreamEvent } from "../../stream/stream-events.types";
import { SendMessageRequest } from "./send-message.request";

export interface SendStreamMessageRequest extends SendMessageRequest {
  onEvent?: (event: AiStreamEvent) => void;
  signal?: AbortSignal;
}
