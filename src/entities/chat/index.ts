// entities/chat-ai/index.ts
export type {
  BaseMessage,
  AssistantMessage,
  ChatMessage,
  MessageRole,
  AiMessageData,
} from './model/message.types';

export type { Chat } from './model/chat.types';

export { useChatStore } from './model/chat.store';

export {
  mergeMessages,
  isSameLogicalMessage,
  getMessageTime,
  normalizeContent,
} from './model/chat.helpers';

export { usePendingPromptStore } from './model/pending-prompt/pending-prompt.store';
export type {
  PendingPrompt,
  PendingPromptStatus,
} from './model/pending-prompt/pending-prompt.store';

export { useActiveAiMessage } from './messages/model/useActiveAiMessage';

export { chatCrudApi, unwrapAiResponse, buildAiDataFromResponse, getAssistantContent } from './api';
export { buildShabReservationUrl } from './lib/buildShabReservationUrl';

export * from './api/contract';
export type { ChatSuggestedHotel } from './model/message.types';