'use client';

import { useState } from 'react';
import { CurvedSegmentTabs } from '@shared/ui';
import { cn } from '@shared/lib';

interface TabItem<TValue extends string> {
  label: string;
  value: TValue;
  content: React.ReactNode;
}

interface DetailsTabsSectionProps<TValue extends string> {
  tabs: TabItem<TValue>[];
  defaultValue: TValue;
  className?:string
  tabsClassName?:string
}

export function DetailsTabsSection<TValue extends string>({
  tabs,
  defaultValue,
  className,
  tabsClassName
}: DetailsTabsSectionProps<TValue>) {
  const [activeTab, setActiveTab] = useState<TValue>(defaultValue);
  const activeContent = tabs.find((t) => t.value === activeTab)?.content;

  return (
    <section className={className}>
      <div className={cn("flex flex-col gap-5 items-center",tabsClassName)}>
        <CurvedSegmentTabs
          tabs={tabs.map(({ label, value }) => ({ label, value }))}
          defaultValue={activeTab}
          onChange={(val) => setActiveTab(val as TValue)}
        />
        {activeContent}
      </div>
    </section>
  );
}