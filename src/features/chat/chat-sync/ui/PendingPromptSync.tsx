'use client';

import { useEffect } from 'react';
import { MODAL_ITEMS, useModalStore } from '@_app/modal';

import { useAuthStore } from '@features/auth';
import { useSendChatMessage } from '@features/chat/send-message/model/useSendChatMessage';
import { usePendingPromptStore } from '@entities/chat';
const pendingPromptInFlightIds = new Set<string>();

export function PendingPromptSync() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const userId = useAuthStore((state) => state.user?.id ?? null);

  const openModal = useModalStore((state) => state.openModal);

  const pendingPrompt = usePendingPromptStore((state) => state.pendingPrompt);

  const markPendingPromptSending = usePendingPromptStore(
    (state) => state.markPendingPromptSending,
  );

  const clearPendingPrompt = usePendingPromptStore(
    (state) => state.clearPendingPrompt,
  );

  const { sendChatMessage } = useSendChatMessage();

  useEffect(() => {
    // if (!hasHydrated) return;
    if (!pendingPrompt) return;
    if (pendingPrompt.status !== 'idle') return;

    if (!isAuthenticated || !userId) {
      openModal(MODAL_ITEMS.AUTH);
      return;
    }
    if (pendingPromptInFlightIds.has(pendingPrompt.id)) return;

    pendingPromptInFlightIds.add(pendingPrompt.id);
    markPendingPromptSending(pendingPrompt.id);

    void sendChatMessage(pendingPrompt.content)
      .then(() => {
        clearPendingPrompt();
      })
      .catch(() => {
        clearPendingPrompt();
      })
      .finally(() => {
        pendingPromptInFlightIds.delete(pendingPrompt.id);
      });
  }, [
    // hasHydrated,
    pendingPrompt,
    isAuthenticated,
    userId,
    openModal,
    markPendingPromptSending,
    clearPendingPrompt,
    sendChatMessage,
  ]);

  return null;
}
