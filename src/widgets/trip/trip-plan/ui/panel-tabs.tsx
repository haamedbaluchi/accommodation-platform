import {
  CancelIcon,
  CloseSectionIcon,
} from '@shared/assets/icons';
import { Button, Tooltip } from '@shared/ui';
import { Dispatch, SetStateAction } from 'react';

import type { TabsType } from './trip-aside';

import { usePanelStore } from '@widgets/trip/trip-panel/model/panel.store';

interface PanelTabsProps {
  activeTab: TabsType;
  changeTabs: Dispatch<SetStateAction<TabsType>>;
  onClose?: () => void;
}

export default function PanelTabs({
  activeTab,
  changeTabs,
  onClose,
}: PanelTabsProps) {
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
    <div className="flex items-end justify-end lg:justify-between">
      <Tooltip content="برگشتن">
        <Button
          size="icon"
          rounded="full"
          variant="ghost"
          aria-label="برگشتن"
          className="hidden lg:flex shadow-[0px_0px_4px_0px_#00000040]"
        >
          <CloseSectionIcon className="w-6 h-6" />
        </Button>
      </Tooltip>

      <Tooltip content="بستن">
        <Button
          size="icon"
          rounded="full"
          variant="ghost"
          aria-label="بستن"
          onClick={handleClose}
          className="shadow-[0px_0px_4px_0px_#00000040]"
        >
          <CancelIcon className="w-6 h-6" />
        </Button>
      </Tooltip>
    </div>
  );
}