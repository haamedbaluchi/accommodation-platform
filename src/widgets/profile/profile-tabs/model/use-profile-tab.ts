'use client';

import { useState } from 'react';
import { ProfileTabId } from '@entities/user';

export function useProfileTab() {
  const [activeTab, setActiveTab] =
    useState<ProfileTabId>('trips');

  return {
    activeTab,
    setActiveTab,
  };
}