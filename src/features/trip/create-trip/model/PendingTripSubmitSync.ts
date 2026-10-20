// 'use client';

// import { useRouter } from 'next/navigation';
// import { useEffect, useRef, useState } from 'react';

// import { useAuthStore } from '@features/auth';
// import { useCreateTrip } from '@features/trip/create-trip/api/useCreateTrip';
// import { useCreateChat } from '@features/chat/create-chat/model/useCreateChat';
// import { useTripDraftStore } from '@entities/trip/trip-draft';
// import { submitTripFlow } from '@features/trip/create-trip/lib/submitTripFlow';
// import { chatCrudApi, useChatStore } from '@entities/chat';
// import { usePendingTripSubmitStore } from '@features/trip/pending-trip-submit';

// export function PendingTripSubmitSync() {
//   const router = useRouter();

//   const { mutateAsync: createTrip } = useCreateTrip();
//   const { mutateAsync: createChat } = useCreateChat();

//   const setDraft = useTripDraftStore((s) => s.setDraft);

//   const setActiveChatId = useChatStore((s) => s.setActiveChatId);
//   const setChatSessionId = useChatStore((s) => s.setChatSessionId);
//   const addMessage = useChatStore((s) => s.addMessage);
//   const updateMessage = useChatStore((s) => s.updateMessage);

//   const user = useAuthStore((s) => s.user);
//   const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
//   // const hasHydrated = useAuthStore((s) => s.hasHydrated);

//   const pendingTripSubmit = usePendingTripSubmitStore(
//     (s) => s.pendingTripSubmit,
//   );
//   const setPendingTripSubmit = usePendingTripSubmitStore(
//     (s) => s.setPendingTripSubmit,
//   );
//   const clearPendingTripSubmit = usePendingTripSubmitStore(
//     (s) => s.clearPendingTripSubmit,
//   );

//   const lockRef = useRef(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     // if (!hasHydrated) return;
//     if (!isAuthenticated || !user?.id) return;
//     if (!pendingTripSubmit) return;
//     if (isSubmitting) return;
//     if (lockRef.current) return;

//     const pendingData = pendingTripSubmit;

//     lockRef.current = true;
//     setIsSubmitting(true);

//     clearPendingTripSubmit();

//     void submitTripFlow({
//       data: pendingData,
//       user: { id: String(user.id) },
//       deps: {
//         createTrip,
//         createChat,
//         setActiveChatId,
//         setChatSessionId,
//         addMessage,
//         updateMessage,
//         setDraft,
//         router,
//         chatApi,
//       },
//     })
//       .catch(() => {
//         setPendingTripSubmit(pendingData);
//       })
//       .finally(() => {
//         lockRef.current = false;
//         setIsSubmitting(false);
//       });
//   }, [
//     isAuthenticated,
//     user?.id,
//     pendingTripSubmit,
//     isSubmitting,
//     createTrip,
//     createChat,
//     setActiveChatId,
//     setChatSessionId,
//     addMessage,
//     updateMessage,
//     setDraft,
//     router,
//     clearPendingTripSubmit,
//     setPendingTripSubmit,
//   ]);

//   return null;
// }
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { useAuthStore } from '@features/auth';
import { useCreateTrip } from '../api/useCreateTrip';
import { useTripDraftStore } from '@entities/trip/trip-draft';
import { submitTripFlow } from '../lib/submitTripFlow';
import { useCreateChat } from '@features/chat/create-chat/model/useCreateChat';
import { chatCrudApi, useChatStore } from '@entities/chat';
import { usePendingTripSubmitStore } from '@features/trip/pending-trip-submit';
import { tripChatApiFacade } from '../lib/chatApiFacade';

export function PendingTripSubmitSync() {
  const router = useRouter();

  const { mutateAsync: createTrip } = useCreateTrip();
  const { mutateAsync: createChat } = useCreateChat();

  const setDraft = useTripDraftStore((s) => s.setDraft);

  const setActiveChatId = useChatStore((s) => s.setActiveChatId);
  const setChatSessionId = useChatStore((s) => s.setChatSessionId);
  const addMessage = useChatStore((s) => s.addMessage);
  const updateMessage = useChatStore((s) => s.updateMessage);

  const user = useAuthStore((s) => s.user);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const pendingTripSubmit = usePendingTripSubmitStore((s) => s.pendingTripSubmit);
  const setPendingTripSubmit = usePendingTripSubmitStore((s) => s.setPendingTripSubmit);
  const clearPendingTripSubmit = usePendingTripSubmitStore((s) => s.clearPendingTripSubmit);

  const lockRef = useRef(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isAuthenticated || !user?.id) return;
    if (!pendingTripSubmit) return;
    if (isSubmitting) return;
    if (lockRef.current) return;

    const pendingData = pendingTripSubmit;

    lockRef.current = true;
    setIsSubmitting(true);
    clearPendingTripSubmit();

     void submitTripFlow({
      data: pendingData,
      user: { id: String(user.id) },
      deps: {
        createTrip,
        createChat,
        setActiveChatId,
        setChatSessionId,
        addMessage,
        updateMessage,
        setDraft,
        router,
        chatApi: tripChatApiFacade, // FIX
      },
    })
      .catch(() => {
        setPendingTripSubmit(pendingData);
      })
      .finally(() => {
        lockRef.current = false;
        setIsSubmitting(false);
      });
  }, [
    isAuthenticated,
    user?.id,
    pendingTripSubmit,
    isSubmitting,
    createTrip,
    createChat,
    setActiveChatId,
    setChatSessionId,
    addMessage,
    updateMessage,
    setDraft,
    router,
    clearPendingTripSubmit,
    setPendingTripSubmit,
  ]);

  return null;
}