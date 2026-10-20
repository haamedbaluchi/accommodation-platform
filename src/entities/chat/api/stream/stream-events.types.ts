import { AiResponsePayload } from "../contract/responses/ai-response.types";

export type StreamEventType = 'state' | 'token' | 'done' | 'error';
export interface AiStreamStateEvent {
  type: 'state';
  state: string;
  label: string;
}

export interface AiStreamTokenEvent {
  type: 'token';
  text: string;
}

export interface AiStreamDoneEvent extends AiResponsePayload {
  type: 'done';
  mode?: 'chat' | 'plan' | string;
  research_warnings?: string[];
  [key: string]: unknown;
}

export interface AiStreamErrorEvent {
  type: 'error';
  message?: string;
}

export type AiStreamEvent =
  | AiStreamStateEvent
  | AiStreamTokenEvent
  | AiStreamDoneEvent
  | AiStreamErrorEvent;
