import {
  BriefcaseIcon as BriefcaseOutlineIcon,
  HeartIcon as HeartOutlineIcon,
  ChatBubbleOvalLeftEllipsisIcon as ChatOutlineIcon,
} from '@heroicons/react/24/outline';

import {
  BriefcaseIcon as BriefcaseSolidIcon,
  HeartIcon as HeartSolidIcon,
  ChatBubbleOvalLeftEllipsisIcon as ChatSolidIcon,
} from '@heroicons/react/24/solid';
import type { ComponentType } from 'react';
import { ProfileTabId } from '@entities/user';

type IconComponent = ComponentType<{
  className?: string;
}>;

type ProfileTabsProps = {
  activeTab: ProfileTabId;
  onTabChange: (tab: ProfileTabId) => void;
};

type TabItem = {
  id: ProfileTabId;
  label: string;
  outlineIcon: IconComponent;
  solidIcon: IconComponent;
};

const tabs: TabItem[] = [
  {
    id: 'trips',
    label: 'سفرهای من',
    outlineIcon: BriefcaseOutlineIcon,
    solidIcon: BriefcaseSolidIcon,
  },
  {
    id: 'favorites',
    label: 'لیست آرزوها',
    outlineIcon: HeartOutlineIcon,
    solidIcon: HeartSolidIcon,
  },
  {
    id: 'reviews',
    label: 'تجربه‌ها',
    outlineIcon: ChatOutlineIcon,
    solidIcon: ChatSolidIcon,
  },
];

export function ProfileTabs({ activeTab, onTabChange }: ProfileTabsProps) {
  return (
    <div className="grid grid-cols-3 xs:flex gap-3 2xl:gap-5 border-b border-border-secondary bg-background mx-5 mt-5 sm:mt-3">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = isActive ? tab.solidIcon : tab.outlineIcon;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`relative flex items-center justify-center gap-2 px-3 py-1.5 2xl:py-3 text-xs sm:text-sm lg:text-base 2xl:text-lg font-medium transition ${
              isActive
                ? 'text-primary'
                : 'text-text-secondary hover:text-text-main'
            }`}
          >
            <Icon className="size-5" />

            <span>{tab.label}</span>

            <span
              className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-primary transition ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
