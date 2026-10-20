import { chatCrudApi } from "@entities/chat";
import { sendMessage, sendMessageStream } from "@features/chat/send-message/api/sendMessageStream";

/**
 * submitTripFlow هم به CRUD (createChat از قبل جدا مصرف می‌شه) و هم به
 * sendMessageStream نیاز داره تا اولین پیام خوش‌آمدگویی رو بعد از ساخت
 * چت بفرسته. FIX باگ رانتایم «chatApi.sendMessageStream is not a function»:
 * قبلاً فقط chatCrudApi (بدون متد stream) به‌عنوان chatApi پاس داده می‌شد.
 */
export const tripChatApiFacade = {
  ...chatCrudApi,
  sendMessageStream,
  sendMessage,
};