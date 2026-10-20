'use client';

import {
  CancelIcon,
  CloseSectionIcon,
} from '@shared/assets/icons';
import { Button, CurvedSegmentTabs, Tooltip } from '@shared/ui';
import { Dispatch, SetStateAction } from 'react';
import { TabType } from '../model/types';
import { usePanelStore } from '@widgets/trip/trip-panel/model/panel.store';

interface BookingsAsideHeaderProps {
  activeTab: TabType;
  changeTabs: Dispatch<SetStateAction<TabType>>;
  onClose?: () => void;
}

const TAB_ITEMS: { label: string; value: TabType }[] = [
  { label: 'بلیط های من', value: 'Flights' },
  { label: 'اقامتگاهای من', value: 'Hotels' },
];

export function BookingsAsideHeader({
  activeTab,
  changeTabs,
  onClose,
}: BookingsAsideHeaderProps) {
  const setAsideStatus = usePanelStore(
    (state) => state.setAsideStatus,
  );

  const handleClose = () => {
    if (onClose) {
      onClose();
      return;
    }

    setAsideStatus(false);
  };

  return (
    <div className="flex items-center justify-between">
      <Tooltip content="برگشتن">
        <Button
          size="icon"
          rounded="full"
          variant="ghost"
          aria-label="برگشتن"
          onClick={handleClose}
          className="shadow-[0px_0px_4px_0px_#00000040]"
        >
          <CloseSectionIcon className="h-4 w-4 md:h-6 md:w-6" />
        </Button>
      </Tooltip>

      <CurvedSegmentTabs
        tabs={TAB_ITEMS}
        defaultValue={activeTab}
        onChange={(val) => changeTabs(val as TabType)}
      />

      <Tooltip content="بستن">
        <Button
          size="icon"
          rounded="full"
          variant="ghost"
          aria-label="بستن"
          onClick={handleClose}
          className="shadow-[0px_0px_4px_0px_#00000040]"
        >
          <CancelIcon className="h-4 w-4 md:h-6 md:w-6" />
        </Button>
      </Tooltip>
    </div>
  );
}