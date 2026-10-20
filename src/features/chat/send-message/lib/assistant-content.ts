import { SendMessageResponse } from "@features/chat/chat-ai";

export function getAssistantContent(response: SendMessageResponse) {
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
