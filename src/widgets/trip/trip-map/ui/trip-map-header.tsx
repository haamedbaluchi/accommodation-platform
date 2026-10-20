import { CancelIcon, CloseSectionIcon } from '@shared/assets/icons';
import { Button, Tooltip } from '@shared/ui';
import React from 'react';

interface TripMapHeaderProps {
  onBack: VoidFunction;
  onClose: VoidFunction;
}
export default function TripMapHeader({ onBack, onClose }: TripMapHeaderProps) {
  return (
    <div className="absolute top-5 z-50 flex w-full items-end justify-between px-5">
      <Tooltip content="برگشتن">
        <Button
          size="icon"
          rounded="full"
          variant="ghost"
          onClick={onBack}
          className="bg-background shadow-[0px_0px_4px_0px_#00000040]"
        >
          <CloseSectionIcon className="h-6 w-6" />
        </Button>
      </Tooltip>

      <Tooltip content="بستن">
        <Button
          size="icon"
          rounded="full"
          variant="ghost"
          onClick={onClose}
          className="bg-background shadow-[0px_0px_4px_0px_#00000040]"
        >
          <CancelIcon className="h-6 w-6" />
        </Button>
      </Tooltip>
    </div>
  );
}
