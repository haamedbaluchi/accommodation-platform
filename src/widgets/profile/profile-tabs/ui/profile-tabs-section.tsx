'use client';


import { ProfileTabs } from './profile-tabs';
import { useProfileTab } from '../model/use-profile-tab';
import { ProfileTabContent } from './profile-tab-content';

export function ProfileTabsSection() {
  const { activeTab, setActiveTab } = useProfileTab();

  return (
    <section className="flex flex-1 flex-col overflow-hidden">
      <ProfileTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="flex-1 overflow-y-auto custom-scrollbar pt-4 mx-1 pb-6">
        <ProfileTabContent activeTab={activeTab} />
      </div>
    </section>
  );
}