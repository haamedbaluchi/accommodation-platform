'use client';

import { useEffect, useState } from 'react';

import { TripPanelContent } from './trip-panel-content';
import { SidePanel } from '@widgets/layout/side-panel';
import { TripTabBar } from '@widgets/trip/trip-panel';
import { usePanelStore } from '@widgets/trip/trip-panel/model/panel.store';
import { GuideView } from '@widgets/trip/trip-guide';
import { useActiveAiMessage } from '@entities/chat';

export function DesktopTripPanel() {
  const [activeTabId, setActiveTabId] = useState('guide_tab');

  const aiMessage = useActiveAiMessage();

  const structured =
    aiMessage?.aiData?.structured ?? aiMessage?.aiData?.finalOutput?.structured;

  const isAsideOpen = usePanelStore((state) => state.isAsideOpen);
  const setAsideStatus = usePanelStore((state) => state.setAsideStatus);
  const activePanelView = usePanelStore((state) => state.activePanelView);
  const changeActivePanelView = usePanelStore((state) => state.changeActivePanelView);

  useEffect(() => {
    if (structured) {
      setAsideStatus(true);
      changeActivePanelView('trip');
    }
  }, [structured, setAsideStatus, changeActivePanelView]);

  return (
    <SidePanel
      isOpen={isAsideOpen}
      variant="outline"
      className="mt-4 mb-3 hidden md:block pr-1 py-1"
      footer={
        activePanelView === 'trip' ? (
          <TripTabBar defaultActiveId="guide_tab" onChange={(item) => setActiveTabId(item.id as string)} />
        ) : undefined
      }
    >
      {activePanelView === 'guide' ? <GuideView /> : <TripPanelContent activeTabId={activeTabId} />}
    </SidePanel>
  );
}