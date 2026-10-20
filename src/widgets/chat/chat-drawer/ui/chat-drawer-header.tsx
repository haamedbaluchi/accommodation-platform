'use client';

import { EditBIcon, SearchIcon } from '@shared/assets/icons';
import { Button, TextField } from '@shared/ui';
import { PlusIcon } from '@heroicons/react/24/solid';
import { useRouter, useSearchParams } from 'next/navigation';
import { MODAL_ITEMS, useModalStore } from '@_app/modal';
import { useTripDraftStore } from '@entities/trip/trip-draft';
import { useChatStore } from '@entities/chat';

interface ChatDrawerHeaderProps {
  onClose: () => void;
}

export function ChatDrawerHeader({ onClose }: ChatDrawerHeaderProps) {
  const openModal = useModalStore((state) => state.openModal);
  const startNewChat = useChatStore((state) => state.startNewChat);
  const resetDraft = useTripDraftStore((state) => state.resetDraft);

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleNewChat = () => {
    resetDraft();
    startNewChat();
    const params = new URLSearchParams(searchParams?.toString());
    params.delete('id');
    params.delete('_rsc');

    const query = params.toString();
    router.push(query ? `?${query}` : '?');

    onClose();
  };

  const handleNewTrip = () => {
    openModal(MODAL_ITEMS.NEWTRIP);
    onClose();
  };

  return (
    <div className="flex flex-col gap-5 pl-5 mb-1">
      <TextField
        label="جستجو در چت ها"
        hiddenLabel
        sizeInput="md"
        className="bg-text-muted-foreground"
        rightIcon={<SearchIcon className="h-4 w-4" />}
        placeholder="جستجو کنید..."
      />

      <div className="flex flex-col">
        <Button
          variant="ghost"
          rounded="full"
          size="large"
          className="justify-start py-0 text-xs font-bold text-text-main sm:text-sm md:text-base"
          rightIcon={<EditBIcon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />}
          onClick={handleNewChat}
        >
          گفتگو جدید
        </Button>

        <Button
          variant="ghost"
          size="large"
          rounded="full"
          className="justify-start py-0 text-xs font-bold text-text-main sm:text-sm md:text-base"
          rightIcon={<PlusIcon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />}
          onClick={handleNewTrip}
        >
          سفر جدید
        </Button>
      </div>
    </div>
  );
}
