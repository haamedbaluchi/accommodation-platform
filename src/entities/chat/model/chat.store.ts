// // entities/chat-ai/model/chat.store.ts
// import { create } from 'zustand';
// import type { ChatMessage } from './message.types';
// import { mergeMessages, getMessageTime } from './chat.helpers';

// interface ChatState {
//   activeChatId: string | null;
//   chats: Record<string, ChatMessage[]>;
//   chatSessions: Record<string, string>;

//   setActiveChatId: (chatId: string | null) => void;
//   startNewChat: () => void;

//   setChatSessionId: (chatId: string, sessionId: string) => void;
//   getChatSessionId: (chatId: string) => string | undefined;

//   setMessages: (chatId: string, messages: ChatMessage[]) => void;
//   mergeServerMessages: (chatId: string, serverMessages: ChatMessage[]) => void;
//   addMessage: (chatId: string, message: ChatMessage) => void;
//   updateMessage: (
//     chatId: string,
//     messageId: string,
//     patch: Partial<ChatMessage>,
//   ) => void;
//   removeMessage: (chatId: string, messageId: string) => void;
//   clearChatMessages: (chatId: string) => void;
// }

// export const useChatStore = create<ChatState>((set, get) => ({
//   activeChatId: null,
//   chats: {},
//   chatSessions: {},

//   setActiveChatId: (chatId) => set({ activeChatId: chatId }),

//   startNewChat: () => set({ activeChatId: null }),

//   setChatSessionId: (chatId, sessionId) => {
//     set((state) => ({
//       chatSessions: { ...state.chatSessions, [chatId]: sessionId },
//     }));
//   },

//   getChatSessionId: (chatId) => get().chatSessions[chatId],

//   setMessages: (chatId, messages) => {
//     set((state) => ({
//       chats: {
//         ...state.chats,
//         [chatId]: [...messages].sort(
//           (a, b) => getMessageTime(a) - getMessageTime(b),
//         ),
//       },
//     }));
//   },

//   mergeServerMessages: (chatId, serverMessages) => {
//     set((state) => {
//       const localMessages = state.chats[chatId] ?? [];
//       return {
//         chats: {
//           ...state.chats,
//           [chatId]: mergeMessages(localMessages, serverMessages),
//         },
//       };
//     });
//   },

//   addMessage: (chatId, message) => {
//     set((state) => {
//       const currentMessages = state.chats[chatId] ?? [];
//       return {
//         chats: {
//           ...state.chats,
//           [chatId]: [...currentMessages, message].sort(
//             (a, b) => getMessageTime(a) - getMessageTime(b),
//           ),
//         },
//       };
//     });
//   },

//   updateMessage: (chatId, messageId, patch) => {
//     set((state) => {
//       const currentMessages = state.chats[chatId] ?? [];
//       return {
//         chats: {
//           ...state.chats,
//           [chatId]: currentMessages.map((message) =>
//             message.id === messageId ? { ...message, ...patch } : message,
//           ),
//         },
//       };
//     });
//   },

//   removeMessage: (chatId, messageId) => {
//     set((state) => {
//       const currentMessages = state.chats[chatId] ?? [];
//       return {
//         chats: {
//           ...state.chats,
//           [chatId]: currentMessages.filter((m) => m.id !== messageId),
//         },
//       };
//     });
//   },

//   clearChatMessages: (chatId) => {
//     set((state) => ({ chats: { ...state.chats, [chatId]: [] } }));
//   },
// }));

import { create } from 'zustand';
import type { ChatMessage, AssistantMessage } from './message.types';
import { mergeMessages, getMessageTime } from './chat.helpers';

interface ChatState {
  activeChatId: string | null;
  chats: Record<string, ChatMessage[]>;
  chatSessions: Record<string, string>;

  setActiveChatId: (chatId: string | null) => void;
  startNewChat: () => void;

  setChatSessionId: (chatId: string, sessionId: string) => void;
  getChatSessionId: (chatId: string) => string | undefined;

  setMessages: (chatId: string, messages: ChatMessage[]) => void;
  mergeServerMessages: (chatId: string, serverMessages: ChatMessage[]) => void;
  addMessage: (chatId: string, message: ChatMessage) => void;
  updateMessage: (
    chatId: string,
    messageId: string,
    // FIX: قبلاً Partial<ChatMessage> بود؛ چون ChatMessage یک union هست،
    // keyof آن فقط فیلدهای مشترک (BaseMessage) را شامل می‌شد و 'aiData'
    // (که فقط روی AssistantMessage است) رد می‌شد.
    patch: Partial<AssistantMessage>,
  ) => void;
  removeMessage: (chatId: string, messageId: string) => void;
  clearChatMessages: (chatId: string) => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  activeChatId: null,
  chats: {},
  chatSessions: {},

  setActiveChatId: (chatId) => set({ activeChatId: chatId }),

  startNewChat: () => set({ activeChatId: null }),

  setChatSessionId: (chatId, sessionId) => {
    set((state) => ({
      chatSessions: { ...state.chatSessions, [chatId]: sessionId },
    }));
  },

  getChatSessionId: (chatId) => get().chatSessions[chatId],

  setMessages: (chatId, messages) => {
    set((state) => ({
      chats: {
        ...state.chats,
        [chatId]: [...messages].sort(
          (a, b) => getMessageTime(a) - getMessageTime(b),
        ),
      },
    }));
  },

  mergeServerMessages: (chatId, serverMessages) => {
    set((state) => {
      const localMessages = state.chats[chatId] ?? [];
      return {
        chats: {
          ...state.chats,
          [chatId]: mergeMessages(localMessages, serverMessages),
        },
      };
    });
  },

  addMessage: (chatId, message) => {
    set((state) => {
      const currentMessages = state.chats[chatId] ?? [];
      return {
        chats: {
          ...state.chats,
          [chatId]: [...currentMessages, message].sort(
            (a, b) => getMessageTime(a) - getMessageTime(b),
          ),
        },
      };
    });
  },

  updateMessage: (chatId, messageId, patch) => {
    set((state) => {
      const currentMessages = state.chats[chatId] ?? [];
      return {
        chats: {
          ...state.chats,
          [chatId]: currentMessages.map((message) =>
            message.id === messageId ? { ...message, ...patch } : message,
          ),
        },
      };
    });
  },

  removeMessage: (chatId, messageId) => {
    set((state) => {
      const currentMessages = state.chats[chatId] ?? [];
      return {
        chats: {
          ...state.chats,
          [chatId]: currentMessages.filter((m) => m.id !== messageId),
        },
      };
    });
  },

  clearChatMessages: (chatId) => {
    set((state) => ({ chats: { ...state.chats, [chatId]: [] } }));
  },
}));