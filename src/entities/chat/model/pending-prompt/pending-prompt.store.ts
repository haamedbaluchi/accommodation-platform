// entities/chat-ai/model/pending-prompt/pending-prompt.store.ts
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { generateId } from '@shared/lib';

export type PendingPromptStatus = 'idle' | 'sending';

export interface PendingPrompt {
  id: string;
  content: string;
  source: 'landing' | 'chat';
  status: PendingPromptStatus;
  createdAt: number;
}

interface PendingPromptState {
  pendingPrompt: PendingPrompt | null;
  enqueuePendingPrompt: (
    content: string,
    source?: PendingPrompt['source'],
  ) => void;
  markPendingPromptSending: (id: string) => void;
  clearPendingPrompt: () => void;
}

export const PENDING_PROMPT_STORAGE_KEY = 'pending-prompt-storage';

export const usePendingPromptStore = create<PendingPromptState>()(
  persist(
    (set, get) => ({
      pendingPrompt: null,

      enqueuePendingPrompt: (content, source = 'landing') => {
        const trimmed = content.trim();
        if (!trimmed) return;

        set({
          pendingPrompt: {
            id: generateId(),
            content: trimmed,
            source,
            status: 'idle',
            createdAt: Date.now(),
          },
        });
      },

      markPendingPromptSending: (id) => {
        const current = get().pendingPrompt;
        if (!current || current.id !== id) return;

        set({ pendingPrompt: { ...current, status: 'sending' } });
      },

      clearPendingPrompt: () => {
        set({ pendingPrompt: null });
        if (typeof window !== 'undefined') {
          window.sessionStorage.removeItem(PENDING_PROMPT_STORAGE_KEY);
        }
      },
    }),
    {
      name: PENDING_PROMPT_STORAGE_KEY,
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);