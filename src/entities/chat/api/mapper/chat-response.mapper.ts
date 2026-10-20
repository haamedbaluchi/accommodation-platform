// import type { AiMessageData } from '../../model/message.types';
// import type { SendMessageResponse } from '../contract/responses/send-message.response';


// export function unwrapAiResponse(
//   response: SendMessageResponse,
// ): SendMessageResponse {
//   if (!response.ai_response) return response;
//   return {
//     ...response,
//     ...response.ai_response,
//     ai_response: response.ai_response,
//   };
// }

// function isGenericReadyMessage(message?: string) {
//   return (
//     message === 'پیام هوش مصنوعی آماده است.' ||
//     message === 'AI message is ready.' ||
//     message === 'Trip is ready.'
//   );
// }

// export function getAssistantContent(response: SendMessageResponse): string {
//   if (response.status === 'needs_clarification') {
//     return response.question || 'لطفاً اطلاعات بیشتری وارد کنید.';
//   }
//   if (response.final_output?.markdown) return response.final_output.markdown;
//   if (response.final_output?.narrative) return response.final_output.narrative;
//   if (response.final_output?.structured) {
//     return `\`\`\`json\n${JSON.stringify(response.final_output.structured, null, 2)}\n\`\`\``;
//   }
//   if (response.structured) {
//     return `\`\`\`json\n${JSON.stringify(response.structured, null, 2)}\n\`\`\``;
//   }
//   if (response.final_output) {
//     return `\`\`\`json\n${JSON.stringify(response.final_output, null, 2)}\n\`\`\``;
//   }
//   if (response.message && !isGenericReadyMessage(response.message)) {
//     return response.message;
//   }
//   return 'پاسخی دریافت نشد.';
// }

// export function buildAiDataFromResponse(
//   response: SendMessageResponse,
//   fallbackSessionId?: string,
// ): AiMessageData {
//   return {
//     status: response.status,
//     sessionId: response.session_id ?? fallbackSessionId,
//     question: response.question,
//     finalOutput: response.final_output,
//     structured: response.structured ?? response.final_output?.structured,
//     parsedRequest: response.parsed_request,
//     researchData: response.research_data,
//     map_context:
//       (response.final_output?.structured as any)?.map_context ??
//       response.final_output?.map_context,
//     validationReport: response.validation_report,
//     nodeObservability: response.node_observability,
//     plannerFallbackUsed: response.planner_fallback_used,
//     revisionFallbackUsed: response.revision_fallback_used,
//     revisionWebSources: response.revision_web_sources,
//     rawResponse: response,
//   };
// }
import type { AiMessageData } from '../../model/message.types';
import type { SendMessageResponse } from '../contract/responses/send-message.response';

export function unwrapAiResponse(
  response: SendMessageResponse,
): SendMessageResponse {
  if (!response.ai_response) return response;
  return {
    ...response,
    ...response.ai_response,
    ai_response: response.ai_response,
  };
}

function isGenericReadyMessage(message?: string) {
  return (
    message === 'پیام هوش مصنوعی آماده است.' ||
    message === 'AI message is ready.' ||
    message === 'Trip is ready.'
  );
}

export function getAssistantContent(response: SendMessageResponse): string {
  if (response.status === 'needs_clarification') {
    return response.question || 'لطفاً اطلاعات بیشتری وارد کنید.';
  }
  if (response.final_output?.markdown) return response.final_output.markdown;
  if (response.final_output?.narrative) return response.final_output.narrative;
  if (response.final_output?.structured) {
    return `\`\`\`json\n${JSON.stringify(response.final_output.structured, null, 2)}\n\`\`\``;
  }
  if (response.structured) {
    return `\`\`\`json\n${JSON.stringify(response.structured, null, 2)}\n\`\`\``;
  }
  if (response.final_output) {
    return `\`\`\`json\n${JSON.stringify(response.final_output, null, 2)}\n\`\`\``;
  }
  if (response.message && !isGenericReadyMessage(response.message)) {
    return response.message;
  }
  return 'پاسخی دریافت نشد.';
}

export function buildAiDataFromResponse(
  response: SendMessageResponse,
  fallbackSessionId?: string,
): AiMessageData {
  return {
    status: response.status,
    sessionId: response.session_id ?? fallbackSessionId,
    question: response.question,
    finalOutput: response.final_output,
    structured: response.structured ?? response.final_output?.structured,
    parsedRequest: response.parsed_request,
    // نکته: research_data.hotels از سمت بک‌اند field-nameهای مخصوص Shab داره
    // (nightly_rate, star_rating, provider_id, ...) که با HotelOption عمومی
    // یکی نیست؛ چون ResearchData یک index signature باز داره این فیلدهای
    // اضافه بدون مشکل type-check از آب در میان، فقط جای مصرف (MessageBubble)
    // با ChatSuggestedHotel کست می‌شه.
    researchData: response.research_data,
    map_context:
      (response.final_output?.structured as any)?.map_context ??
      response.final_output?.map_context,
    validationReport: response.validation_report,
    nodeObservability: response.node_observability,
    plannerFallbackUsed: response.planner_fallback_used,
    revisionFallbackUsed: response.revision_fallback_used,
    revisionWebSources: response.revision_web_sources,
    rawResponse: response,
  };
}