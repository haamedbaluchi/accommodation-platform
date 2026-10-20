'use client';

import { useModalStore } from '@_app/modal';
import { useMediaQuery } from '@shared/lib/hooks/useMediaQuery';
import { usePanelStore } from '@widgets/trip/trip-panel/model/panel.store';

export function useGuideTrigger() {
  const isMobileOrTablet = useMediaQuery('(max-width: 1023px)');
  const openModal = useModalStore((state) => state.openModal);
  const setAsideStatus = usePanelStore((state) => state.setAsideStatus);
  const changeActivePanelView = usePanelStore(
    (state) => state.changeActivePanelView,
  );

  const triggerGuide = () => {
    if (isMobileOrTablet) {
      openModal('guide_modal');
      return;
    }

    changeActivePanelView('guide');
    setAsideStatus(true);
  };

  return { triggerGuide };
}