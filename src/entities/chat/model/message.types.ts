// // // entities/chat-ai/model/message.types.ts
// // import type { AIResponse } from '../api/contract/responses/response.types';

// // export type MessageRole = 'user' | 'assistant' | 'system';

// // export interface BaseMessage {
// //   id: string;
// //   role: MessageRole;
// //   content?: string;
// //   createdAt?: number;

// //   isLoading?: boolean;
// //   isError?: boolean;
// //   errorText?: string;
// //   isLocal?: boolean;
// //   hidden?: boolean;
// //   streamLabel?: string;
// // }

// // export interface AiMessageData {
// //   status?: string;
// //   sessionId?: string;
// //   question?: string;
// //   answer?: string;

// //   finalOutput?: {
// //     narrative?: string;
// //     markdown?: string;
// //     structured?: unknown;
// //     response_fallback_used?: boolean;
// //     [key: string]: unknown;
// //   };

// //   structured?: unknown;
// //   parsedRequest?: unknown;

// //   researchData?: {
// //     hotels?: Array<{
// //       id?: string;
// //       provider_id?: string | number;
// //       name?: string;
// //       location?: string;
// //       description?: string;
// //       star_rating?: number;
// //       review_count?: number;
// //       capacity?: number;
// //       rooms?: number;
// //       nightly_rate?: number;
// //       nightly_rate_discounted?: number;
// //       image_urls?: string[];
// //       [key: string]: unknown;
// //     }>;
// //     [key: string]: unknown;
// //   };

// //   map_context?: {
// //     provider?: string;
// //     places?: Array<{
// //       id: string;
// //       type: string;
// //       name: string;
// //       query?: string;
// //       formatted_address?: string;
// //       place_id?: string;
// //       lat: number;
// //       lng: number;
// //     }>;
// //     routes?: Array<{
// //       from: string;
// //       to: string;
// //       mode: string;
// //       distance_meters: number;
// //       duration_seconds: number;
// //       distance_text: string;
// //       duration_text: string;
// //       option?: string;
// //       estimated_cost?: number;
// //     }>;
// //     planning_notes?: string[];
// //   };

// //   validationReport?: unknown;
// //   nodeObservability?: unknown;
// //   plannerFallbackUsed?: boolean;
// //   revisionFallbackUsed?: boolean;
// //   revisionWebSources?: unknown;

// //   rawResponse?: AIResponse | Record<string, unknown>;
// // }

// // export interface AssistantMessage extends BaseMessage {
// //   role: 'assistant';
// //   aiData?: AiMessageData;
// // }

// // export type ChatMessage = BaseMessage | AssistantMessage;
// import type {
//   FinalOutput,
//   StructuredItinerary,
//   ParsedRequest,
//   ResearchData,
//   ValidationReport,
//   NodeObservability,
//   WebSource,
// } from '../api/contract';

// export type MessageRole = 'user' | 'assistant' | 'system';

// export interface BaseMessage {
//   id: string;
//   role: MessageRole;
//   content?: string;
//   createdAt?: number;

//   isLoading?: boolean;
//   isError?: boolean;
//   errorText?: string;
//   isLocal?: boolean;
//   hidden?: boolean;
//   streamLabel?: string;
// }

// /**
//  * شکل خاص هتل پیشنهادی داخل چت (منبع: Shab) — field name هاش با
//  * HotelOption عمومی (در research.types.ts) فرق داره، برای همین به‌جای
//  * قاطی کردنش با ResearchData عمومی، تایپ جدا نگه داشته می‌شه و فقط
//  * در widgets/chat-ai/chat-messages/message-bubble استفاده/cast می‌شه.
//  */
// export interface ChatSuggestedHotel {
//   id?: string;
//   provider_id?: string | number;
//   name?: string;
//   location?: string;
//   description?: string;
//   star_rating?: number;
//   review_count?: number;
//   capacity?: number;
//   rooms?: number;
//   nightly_rate?: number;
//   nightly_rate_discounted?: number;
//   image_urls?: string[];
//   [key: string]: unknown;
// }

// /**
//  * View-model سمت UI برای پاسخ AI. camelCase و مستقل از شکل wire.
//  * FIX: قبلاً finalOutput/structured/researchData/... با تایپ‌های
//  * دستیِ ناقص بازتعریف شده بودن (مثلاً researchData فقط hotels داشت) —
//  * الان مستقیماً از تایپ‌های کامل contract استفاده می‌شه تا هیچ فیلدی
//  * (flights, attractions, restaurants, images, web_sources, weather_summary, ...)
//  * گم نشه.
//  */
// export interface AiMessageData {
//   status?: string;
//   sessionId?: string;
//   question?: string;
//   answer?: string;

//   finalOutput?: FinalOutput;
//   structured?: StructuredItinerary;
//   parsedRequest?: ParsedRequest;
//   researchData?: ResearchData;

//   map_context?: FinalOutput['map_context'];

//   validationReport?: ValidationReport;
//   nodeObservability?: NodeObservability[];
//   plannerFallbackUsed?: boolean;
//   revisionFallbackUsed?: boolean;
//   revisionWebSources?: WebSource[];

//   /** پاسخ خام wire، برای دیباگ/موارد edge-case */
//   rawResponse?: Record<string, unknown>;
// }

// export interface AssistantMessage extends BaseMessage {
//   role: 'assistant';
//   aiData?: AiMessageData;
// }

// export type ChatMessage = BaseMessage | AssistantMessage;

import type {
  FinalOutput,
  StructuredItinerary,
  ParsedRequest,
  ResearchData,
  ValidationReport,
  NodeObservability,
  WebSource,
} from '../api/contract';

export type MessageRole = 'user' | 'assistant' | 'system';

/** فیلدهای مشترک همه‌ی پیام‌ها — دیگه role اینجا نیست */
interface CommonMessageFields {
  id: string;
  content?: string;
  createdAt?: number;

  isLoading?: boolean;
  isError?: boolean;
  errorText?: string;
  isLocal?: boolean;
  hidden?: boolean;
  streamLabel?: string;
}

export interface ChatSuggestedHotel {
  id?: string;
  provider_id?: string | number;
  name?: string;
  location?: string;
  description?: string;
  star_rating?: number;
  review_count?: number;
  capacity?: number;
  rooms?: number;
  nightly_rate?: number;
  nightly_rate_discounted?: number;
  image_urls?: string[];
  [key: string]: unknown;
}

export interface AiMessageData {
  status?: string;
  sessionId?: string;
  question?: string;
  answer?: string;

  finalOutput?: FinalOutput;
  structured?: StructuredItinerary;
  parsedRequest?: ParsedRequest;
  researchData?: ResearchData;

  map_context?: FinalOutput['map_context'];

  validationReport?: ValidationReport;
  nodeObservability?: NodeObservability[];
  plannerFallbackUsed?: boolean;
  revisionFallbackUsed?: boolean;
  revisionWebSources?: WebSource[];

  rawResponse?: Record<string, unknown>;
}

export interface UserMessage extends CommonMessageFields {
  role: 'user';
}

export interface SystemMessage extends CommonMessageFields {
  role: 'system';
}

export interface AssistantMessage extends CommonMessageFields {
  role: 'assistant';
  aiData?: AiMessageData;
}

/**
 * FIX (ریشه‌ی باگ TS2339 "aiData does not exist on BaseMessage"):
 * قبلاً یک BaseMessage عمومی با role: MessageRole وجود داشت و
 * AssistantMessage از آن extend می‌شد. چون MessageRole شامل 'assistant'
 * هم بود، union واقعاً discriminated نبود (هر دو عضو اجازه‌ی role==='assistant'
 * داشتن از نظر تایپ) و narrowing با `message.role === 'assistant'` هیچ‌وقت
 * BaseMessage را رد نمی‌کرد. الان هر عضو یک role literal کاملاً مجزا دارد،
 * پس narrowing واقعی و امن کار می‌کند.
 */
export type ChatMessage = UserMessage | SystemMessage | AssistantMessage;

/** برای سازگاری با importهای قدیمی که BaseMessage را مستقیم می‌خواستند */
export type BaseMessage = ChatMessage;