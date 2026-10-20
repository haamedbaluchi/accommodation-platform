// 'use client';

// import { Chip } from '@shared/ui';
// import { MessageQuestionIcon } from '@shared/assets/icons';
// import { useGuideTrigger } from '../model/use-guide-trigger';
// import { useSendChatMessage } from '@features/chat/send-message/model/useSendChatMessage';
// import { FloatingTripButton } from '@widgets/trip/trip-panel/ui/floating-trip-button';
// import { PromptBar } from '@features/chat/send-message';
// import { useActiveAiMessage } from '@entities/chat';

// export function PromptBarSection() {
//   const { sendChatMessage, isPending, isSending, cancelSending } =
//     useSendChatMessage();
//   const { triggerGuide } = useGuideTrigger();

//   const aiMessage = useActiveAiMessage();
//   const structured =
//     aiMessage?.aiData?.structured ?? aiMessage?.aiData?.finalOutput?.structured;

//   return (
//     <div className="flex flex-1 flex-col gap-1 lg:gap-3 2xl:gap-5 relative">
//       {!structured ? (
//         <Chip
//           text="چطور میتونم از هوش مصنوعی بومرو سوال بپرسم؟"
//           icon={<MessageQuestionIcon className="h-4 w-4 xl:h-6 xl:w-6" />}
//           onClick={triggerGuide}
//           className="max-w-60 border-0 bg-active-item-background text-[0.625rem] text-primary-active lg:max-w-70 lg:text-xs xl:max-w-97 xl:text-base"
//         />
//       ) : (
//         <FloatingTripButton />
//       )}

//       <div className="mb-3 flex shrink-0 justify-center">
//         <PromptBar
//           isPending={isPending}
//           isLoading={isSending}
//           onCancel={cancelSending}
//           onSubmitMessage={async (text: string) => {
//             await sendChatMessage(text);
//           }}
//         />
//       </div>
//     </div>
//   );
// }
'use client';

import { Chip } from '@shared/ui';
import { MessageQuestionIcon } from '@shared/assets/icons';
import { useGuideTrigger } from '../model/use-guide-trigger';
import { FloatingTripButton } from '@widgets/trip/trip-panel/ui/floating-trip-button';
import { PromptBar, useSendChatMessage } from '@features/chat/send-message';
import { useActiveAiMessage } from '@entities/chat';

export function PromptBarSection() {
  const { sendChatMessage, isPending, isSending, cancelSending } = useSendChatMessage();
  const { triggerGuide } = useGuideTrigger();

  const aiMessage = useActiveAiMessage();
  const structured = aiMessage?.aiData?.structured ?? aiMessage?.aiData?.finalOutput?.structured;

  return (
    <div className="flex flex-1 flex-col gap-1 lg:gap-3 2xl:gap-5 relative">
      {!structured ? (
        <Chip
          text="چطور میتونم از هوش مصنوعی بومرو سوال بپرسم؟"
          icon={<MessageQuestionIcon className="h-4 w-4 xl:h-6 xl:w-6" />}
          onClick={triggerGuide}
          className="max-w-60 border-0 bg-active-item-background text-[0.625rem] text-primary-active lg:max-w-70 lg:text-xs xl:max-w-97 xl:text-base"
        />
      ) : (
        <FloatingTripButton />
      )}

      <div className="mb-3 flex shrink-0 justify-center">
        <PromptBar
          isPending={isPending}
          isLoading={isSending}
          onCancel={cancelSending}
          onSubmitMessage={async (text: string) => {
            await sendChatMessage(text);
          }}
        />
      </div>
    </div>
  );
}