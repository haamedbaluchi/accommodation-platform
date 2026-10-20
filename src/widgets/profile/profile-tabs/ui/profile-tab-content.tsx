'use client';

import { toast } from 'sonner';
import { Button } from '@shared/ui';
import type { ProfileTabId } from '@entities/user';
import { EmptyState } from './empty-state/empty-state';
import { PlusIcon } from '@heroicons/react/24/outline';
import { emptyStateConfig } from '../model/empty-state.config';

type ProfileTabContentProps = {
  activeTab: ProfileTabId;
};

export function ProfileTabContent({ activeTab }: ProfileTabContentProps) {
  const state = emptyStateConfig[activeTab];

  return (
    <EmptyState
      title={state.title}
      description={state.description}
      imageUrl={state.imageUrl}
      action={
        <Button
          variant="primary"
          rounded="full"
          size="medium"
          rightIcon={<PlusIcon className="size-4" />}
          onClick={() => toast.info('این بخش به زودی اضافه میشود')}
        >
          {state.buttonText}
        </Button>
      }
    />
  );
}
