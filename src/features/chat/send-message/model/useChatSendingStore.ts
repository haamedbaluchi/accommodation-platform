import { create } from 'zustand';

interface ChatSendingState {
  isSending: boolean;
  abortController: AbortController | null;

  startSending: () => AbortController;
  stopSending: () => void;
  cancelSending: () => void;
}
export const useChatSendingStore = create<ChatSendingState>((set, get) => ({
  isSending: false,
  abortController: null,

  startSending: () => {
    const controller = new AbortController();
    set({ isSending: true, abortController: controller });
    return controller;
  },

  stopSending: () => {
    set({ isSending: false, abortController: null });
  },

  cancelSending: () => {
    get().abortController?.abort();
  },
}));