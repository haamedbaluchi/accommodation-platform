import { useState } from 'react';

export function useTripDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTabId, setActiveTabId] = useState('guide_tab');

  const openWithTab = (tabId: string) => {
    setActiveTabId(tabId);
    setIsOpen(true);
  };

  return {
    isOpen,
    activeTabId,
    setIsOpen,
    openWithTab,
  };
}