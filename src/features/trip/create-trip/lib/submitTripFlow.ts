import { generateId } from '@shared/lib';
import { NewTripFormInputs } from '../model/createTripSchema';
import { mapCreateTripFormToPayload } from './mapCreateTripFormToPayload';

import { TripDraftBudget } from '@entities/trip/trip-draft/model/useTripDraftStore';
import { buildTripTitleFromDestinations } from '@entities/trip';
import { getAssistantContent } from '@features/chat/send-message/lib/assistant-content';
import { useChatSendingStore } from '@features/chat/send-message';
import { buildAiDataFromResponse, SendMessageResponse, unwrapAiResponse } from '@entities/chat';


export async function submitTripFlow({
  data,
  user,
  deps,
}: {
  data: NewTripFormInputs;
  user: { id: string };
  deps: {
    createTrip: any;
    createChat: any;
    setActiveChatId: any;
    setChatSessionId: any;
    addMessage: any;
    updateMessage: any;
    setDraft: any;
    router: any;
    closeModal?: () => void;
    chatApi: any;
  };
}) {
  const {
    createTrip,
    createChat,
    setActiveChatId,
    setChatSessionId,
    addMessage,
    updateMessage,
    setDraft,
    router,
    chatApi,
    closeModal,
  } = deps;

  const payload = mapCreateTripFormToPayload(data);

  const res = await createTrip(payload);

  const welcomeMessage = res.ai_message;
  const title = buildTripTitleFromDestinations(data.destinations);

  const chat = await createChat({
    title,
    trip_id: res.trip_id,
  });

  const chatId = chat.chat_data.chat_id;
  const sessionId = chat.chat_data.session_id;

  setActiveChatId(chatId);
  setChatSessionId(chatId, sessionId);

  addMessage(chatId, {
    id: generateId(),
    role: 'user',
    content: welcomeMessage,
    isLocal: true,
    createdAt: Date.now(),
  });

  const assistantId = generateId();

  addMessage(chatId, {
    id: assistantId,
    role: 'assistant',
    content: '',
    isLoading: true,
    streamLabel: 'در حال آماده‌سازی برنامه سفر...',
    createdAt: Date.now() + 1,
  });

  closeModal?.();
  router.replace(`/chat_ai?id=${chatId}`);

  let streamed = '';

  const { startSending, stopSending } = useChatSendingStore.getState();
  const abortController = startSending();

  try {
    const rawResponse: SendMessageResponse = await chatApi.sendMessageStream({
      sessionId,
      userId: String(user.id),
      content: welcomeMessage,
      signal: abortController.signal,

      onEvent: (event: any) => {
        if (event.type === 'state') {
          updateMessage(chatId, assistantId, {
            streamLabel: event.label,
            isLoading: true,
          });
          return;
        }

        if (event.type === 'token') {
          streamed += event.text;
          updateMessage(chatId, assistantId, {
            content: streamed,
            streamLabel: undefined,
            isLoading: true,
          });
          return;
        }

        if (event.type === 'error') {
          updateMessage(chatId, assistantId, {
            isLoading: false,
            isError: true,
            streamLabel: undefined,
            content: event.message || 'خطا در دریافت پاسخ',
            errorText: event.message || 'خطا در دریافت پاسخ',
          });
        }
      },
    });

    const response = unwrapAiResponse(rawResponse);

    if (response.session_id) {
      setChatSessionId(chatId, response.session_id);
    }

    const assistantContent = streamed.trim() || getAssistantContent(response);

    updateMessage(chatId, assistantId, {
      content: assistantContent,
      streamLabel: undefined,
      isLoading: false,
      isError: response.status === 'error',
      isLocal: false,
      aiData: buildAiDataFromResponse(response, sessionId),
    });
  } catch (err) {
    const isAbort = err instanceof DOMException && err.name === 'AbortError';

    if (isAbort) {
      updateMessage(chatId, assistantId, {
        streamLabel: undefined,
        isLoading: false,
        content: streamed.trim() || 'پاسخ توسط شما متوقف شد.',
      });
    } else {
      console.error('submitTripFlow stream error:', err);
      updateMessage(chatId, assistantId, {
        isLoading: false,
        isError: true,
        streamLabel: undefined,
        content: 'خطا در دریافت پاسخ',
        errorText: 'خطا در دریافت پاسخ',
      });
    }
  } finally {
    stopSending();
  }

  setDraft({
    title: res?.data?.title ?? data.title,
    destinations: data.destinations,
    startDate: data.startDate || '',
    endDate: data.endDate || '',
    totalDays: data.totalDays || 1,
    travelerCount: data.travelerCount || 1,
    budgetRange: (data.budgetRange ?? [0, 50]) as TripDraftBudget,
  });

  return chatId;
}
