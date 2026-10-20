'use client';

import { cn } from '@shared/lib';
import { CurvedSegmentPath } from './CurvedSegmentPath';
import { useCurvedSegmentTabs } from '../model/useCurvedSegmentTabs';
import { CurvedSegmentTabsProps } from '../model/curved.segment.type';
import { CURVED_SEGMENT_TABS_CONFIG } from '../config/curvedSegmentTabs.config';

export function CurvedSegmentTabs<T extends string>({
  tabs,
  defaultValue,
  onChange,
  className = '',
}: CurvedSegmentTabsProps<T>) {
  const defaultIndex = defaultValue
    ? tabs.findIndex((tab) => tab.value === defaultValue)
    : 0;

  const { activeIndex, selectTab, handleKeyDown, setButtonRef } =
    useCurvedSegmentTabs(defaultIndex, {
      tabs,
      onChange,
    });

  const totalWidth = tabs.length * CURVED_SEGMENT_TABS_CONFIG.buttonWidth;

  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className={cn('relative inline-flex', className)}
      style={{
        width: totalWidth,
        height: CURVED_SEGMENT_TABS_CONFIG.height,
      }}
      dir="rtl"
    >
      <CurvedSegmentPath segmentCount={tabs.length} />

      <div className="relative z-10 flex w-full h-full">
        {tabs.map((tab, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              type="button"
              role="tab"
              key={tab.value}
              ref={setButtonRef(index)}
              aria-disabled={tab.disabled}
              disabled={tab.disabled}
              tabIndex={isActive && !tab.disabled ? 0 : -1}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-selected={isActive}
              onClick={() => selectTab(index)}
              className="relative flex-1 h-full flex items-center justify-center cursor-pointer group focus:outline-primary"
              style={{
                width: CURVED_SEGMENT_TABS_CONFIG.buttonWidth,
              }}
            >
              <div
                className={cn(
                  'absolute inset-x-2 top-1.5 bottom-3.5 rounded-full transition-all duration-300 h-[72%] w-[84%]',
                  isActive
                    ? 'bg-text-muted-foreground'
                    : 'bg-transparent group-hover:bg-slate-50',
                )}
              />

              <span
                className={`
                  relative z-20 font-bold text-xs sm:text-sm transition-colors duration-300
                  ${isActive ? 'text-text-main' : 'text-text-secondary'}
                `}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
