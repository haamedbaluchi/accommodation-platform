// 'use client';

// import dynamic from 'next/dynamic';
// import { Dialog, Loader } from '@shared/ui';
// import { useRouter } from 'next/navigation';
// import { useAuthStore } from '@features/auth';
// import React, { useCallback, useState } from 'react';
// import { MODAL_ITEMS, useModalStore } from '@_app/api';
// import { FormProvider, useForm } from 'react-hook-form';
// import { submitTripFlow } from '../lib/submitTripFlow';
// import { TRIP_STEPS } from '../model/stepConfiguration';
// import { valibotResolver } from '@hookform/resolvers/valibot';
// import { useTripDraftStore } from '@entities/trip/trip-draft';
// import { TripModalFormFooter } from './TripModalFormFooter';
// import { NewTripFormInputs, createTripSchema } from '../model/createTripSchema';
// import { useCreateChat } from '@features/chat/create-chat/model/useCreateChat';
// import { useCreateTrip } from '../api/useCreateTrip';
// import { chatCrudApi, useChatStore } from '@entities/chat';
// import { usePendingTripSubmitStore } from '@features/trip/pending-trip-submit';

// const TripBuilderForm = dynamic(
//   () => import('./TripBuilderForm').then((m) => m.TripBuilderForm),
//   {
//     ssr: false,
//     loading: () => (
//       <div className="w-full h-100 flex itemx-center justify-center">
//         <Loader size={8} />
//       </div>
//     ),
//   },
// );

// export function TripBuilderModal({ open, setOpen }) {
//   React.useEffect(() => {
//     console.log('🟢 MOUNT - open:', open);
//     return () => console.log('🔴 UNMOUNT');
//   }, []);
//   console.log('render, open =', open);

//   const { mutateAsync: createTrip, isPending } = useCreateTrip();
//   const { mutateAsync: createChat } = useCreateChat();

//   const setDraft = useTripDraftStore((s) => s.setDraft);

//   const setActiveChatId = useChatStore((s) => s.setActiveChatId);
//   const setChatSessionId = useChatStore((s) => s.setChatSessionId);
//   const addMessage = useChatStore((s) => s.addMessage);
//   const updateMessage = useChatStore((s) => s.updateMessage);

//   const user = useAuthStore((s) => s.user);
//   const router = useRouter();
//   const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
//   const hasHydrated = useAuthStore((s) => s.hasHydrated);

//   const openModal = useModalStore((s) => s.openModal);

//   const pendingTripSubmit = usePendingTripSubmitStore(
//     (s) => s.pendingTripSubmit,
//   );
//   const setPendingTripSubmit = usePendingTripSubmitStore(
//     (s) => s.setPendingTripSubmit,
//   );

//   const [isSubmittingTrip, setIsSubmittingTrip] = useState(false);

//   const [currentStep, setCurrentStep] = useState(0);
//   const methods = useForm<NewTripFormInputs>({
//     resolver: valibotResolver(createTripSchema),
//     defaultValues: {
//       title: 'سفر جدید',
//       destinations: [],
//       isRoadTrip: false,
//       totalDays: 1,
//       travelerCount: 1,
//       friends: [],
//       budgetRange: [0, 50],
//       paceType: 'balanced',
//       favoriteLocations: [],
//       startDate: '',
//       endDate: '',
//     },
//   });

//   const onSubmit = useCallback(
//     async (data: NewTripFormInputs) => {
//       // if (!hasHydrated) return;

//       if (!isAuthenticated || !user?.id) {
//         setPendingTripSubmit(data);
//         openModal(MODAL_ITEMS.AUTH);
//         return;
//       }

//       setIsSubmittingTrip(true);

//       try {
//         await submitTripFlow({
//           data,
//           user: { id: String(user.id) },
//           deps: {
//             createTrip,
//             createChat,
//             setActiveChatId,
//             setChatSessionId,
//             addMessage,
//             updateMessage,
//             setDraft,
//             router,
//             chatApi,
//             closeModal: () => setOpen(false),
//           },
//         });
//       } finally {
//         setIsSubmittingTrip(false);
//       }
//     },
//     [
//       // hasHydrated,
//       isAuthenticated,
//       user?.id,
//       setPendingTripSubmit,
//       openModal,
//       createTrip,
//       createChat,
//       setActiveChatId,
//       setChatSessionId,
//       addMessage,
//       updateMessage,
//       setDraft,
//       router,
//       setOpen,
//       // methods
//     ],
//   );

//   return (
//     <FormProvider {...methods}>
//       <Dialog
//         title="ساخت سفر جدید"
//         isOpen={open}
//         onClose={setOpen}
//         size="x_large"
//         footer={
//           <TripModalFormFooter
//             currentStep={currentStep}
//             isLastStep={currentStep === TRIP_STEPS.length - 1}
//             onNext={() => setCurrentStep((p) => p + 1)}
//             onPrev={() => setCurrentStep((p) => Math.max(p - 1, 0))}
//             onNextWV={() => setCurrentStep((p) => p + 1)}
//             isPending={isPending || isSubmittingTrip}
//           />
//         }
//       >
//         <TripBuilderForm
//           currentStep={currentStep}
//           onSubmit={methods.handleSubmit(onSubmit)}
//         />
//       </Dialog>
//     </FormProvider>
//   );
// }

'use client';

import dynamic from 'next/dynamic';
import { Dialog, Loader } from '@shared/ui';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@features/auth';
import React, { useCallback, useState } from 'react';
import { MODAL_ITEMS, useModalStore } from '@_app/modal';
import { FormProvider, useForm } from 'react-hook-form';
import { submitTripFlow } from '../lib/submitTripFlow';
import { TRIP_STEPS } from '../model/stepConfiguration';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { useTripDraftStore } from '@entities/trip/trip-draft';
import { TripModalFormFooter } from './TripModalFormFooter';
import { NewTripFormInputs, createTripSchema } from '../model/createTripSchema';
import { useCreateTrip } from '../api/useCreateTrip';
import { useCreateChat } from '@features/chat/create-chat/model/useCreateChat';
import { chatCrudApi, useChatStore } from '@entities/chat';
import { usePendingTripSubmitStore } from '@features/trip/pending-trip-submit';
import { tripChatApiFacade } from '../lib/chatApiFacade';
import type { Resolver } from 'react-hook-form'
const TripBuilderForm = dynamic(
  () => import('./TripBuilderForm').then((m) => m.TripBuilderForm),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-100 flex itemx-center justify-center">
        <Loader size={8} />
      </div>
    ),
  },
);

export function TripBuilderModal({ open, setOpen }) {
  const { mutateAsync: createTrip, isPending } = useCreateTrip();
  const { mutateAsync: createChat } = useCreateChat();

  const setDraft = useTripDraftStore((s) => s.setDraft);

  const setActiveChatId = useChatStore((s) => s.setActiveChatId);
  const setChatSessionId = useChatStore((s) => s.setChatSessionId);
  const addMessage = useChatStore((s) => s.addMessage);
  const updateMessage = useChatStore((s) => s.updateMessage);

  const user = useAuthStore((s) => s.user);
  const router = useRouter();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const hasHydrated = useAuthStore((s) => s.hasHydrated);

  const openModal = useModalStore((s) => s.openModal);

  const pendingTripSubmit = usePendingTripSubmitStore(
    (s) => s.pendingTripSubmit,
  );
  const setPendingTripSubmit = usePendingTripSubmitStore(
    (s) => s.setPendingTripSubmit,
  );

  const [isSubmittingTrip, setIsSubmittingTrip] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm<NewTripFormInputs>({
  resolver: valibotResolver(createTripSchema) as Resolver<NewTripFormInputs>,
    defaultValues: {
      title: 'سفر جدید',
      destinations: [],
      isRoadTrip: false,
      totalDays: 1,
      travelerCount: 1,
      friends: [],
      budgetRange: [0, 50],
      paceType: 'balanced',
      favoriteLocations: [],
      startDate: '',
      endDate: '',
    },
  });

  const onSubmit = useCallback(
    async (data: NewTripFormInputs) => {
      if (!isAuthenticated || !user?.id) {
        setPendingTripSubmit(data);
        openModal(MODAL_ITEMS.AUTH);
        return;
      }

      setIsSubmittingTrip(true);

      try {
        await submitTripFlow({
          data,
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
            closeModal: () => setOpen(false),
          },
        });
      } finally {
        setIsSubmittingTrip(false);
      }
    },
    [
      isAuthenticated,
      user?.id,
      setPendingTripSubmit,
      openModal,
      createTrip,
      createChat,
      setActiveChatId,
      setChatSessionId,
      addMessage,
      updateMessage,
      setDraft,
      router,
      setOpen,
    ],
  );

  return (
    <FormProvider {...methods}>
      <Dialog
        title="ساخت سفر جدید"
        isOpen={open}
        onClose={setOpen}
        size="x_large"
        footer={
          <TripModalFormFooter
            currentStep={currentStep}
            isLastStep={currentStep === TRIP_STEPS.length - 1}
            onNext={() => setCurrentStep((p) => p + 1)}
            onPrev={() => setCurrentStep((p) => Math.max(p - 1, 0))}
            onNextWV={() => setCurrentStep((p) => p + 1)}
            isPending={isPending || isSubmittingTrip}
          />
        }
      >
        <TripBuilderForm
          currentStep={currentStep}
          onSubmit={methods.handleSubmit(onSubmit)}
        />
      </Dialog>
    </FormProvider>
  );
}
