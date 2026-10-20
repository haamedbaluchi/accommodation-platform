'use client';

import { useEffect, useRef, useState } from 'react';

import { AccommodationSection } from '@widgets/explore-page/collections/accommodation-card';
import { LocalEventSection } from '@widgets/explore-page/collections/local-event';
import { LocalFoodSection } from '@widgets/explore-page/collections/local-food';
import { TrendingDestinationSection } from '@widgets/explore-page/collections/trending-destination';
import { ExploreToolbar } from '@widgets/explore-page/explore-toolbar';

import { useScrollIdle } from '@shared/hooks';
import { cn } from '@shared/lib';
import { ContextPanel } from './context-panel';
import { useExploreListing } from '../model/use-explore-listing';
import { SectionSkeleton } from '@widgets/explore-page/explore-states/ui/ection-skeleton';
import {
  ExploreEmptyState,
  ExploreErrorState,
} from '@widgets/explore-page/explore-states/ui/explore-state-views';
import { useQueryClient } from '@tanstack/react-query';

export function ExploreContent() {
  const { containerRef, isIdle } = useScrollIdle(500);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const [toolbarHeight, setToolbarHeight] = useState(0);
  const queryClient = useQueryClient();

  useEffect(() => {
  const node = toolbarRef.current;
  if (!node) return;

  setToolbarHeight(node.offsetHeight);

  const resizeObserver = new ResizeObserver(() => {
    // به‌جای entry.contentRect.height که padding رو حساب نمی‌کنه،
    // مستقیم از offsetHeight خودِ node استفاده می‌کنیم (شامل padding/border)
    setToolbarHeight(node.offsetHeight);
  });

  resizeObserver.observe(node);

  return () => resizeObserver.disconnect();
}, []);

  const {
    trendingDestinations,
    accommodations,
    localFoods,
    localEvents,
    isLoading,
    isError,
  } = useExploreListing();

  const isEmpty =
    !isLoading &&
    !isError &&
    trendingDestinations.length === 0 &&
    accommodations.length === 0 &&
    localFoods.length === 0 &&
    localEvents.length === 0;

  const handleRetry = () => {
    queryClient.invalidateQueries({ queryKey: ['explore-overview'] });
    queryClient.invalidateQueries({ queryKey: ['explore-search'] });
  };
  return (
    <div className="relative flex h-full w-full flex-row">
      <div className="relative flex min-w-0 flex-1 max-h-full flex-col overflow-y-auto">
        <div
          ref={toolbarRef}
          className={cn(
            'absolute inset-x-0 top-0 z-20 flex flex-col gap-4 px-7 py-5',
            'bg-background backdrop-blur-sm transition-transform duration-300 ease-in-out',
            isIdle ? 'translate-y-0' : '-translate-y-full',
          )}
        >
          <ExploreToolbar />
        </div>

        <div
          ref={containerRef}
          className="min-h-0 flex-1 overflow-y-auto px-7 flex flex-col gap-5 pb-7"
          style={{ paddingTop: toolbarHeight }}
        >
          {isLoading ? (
            <>
              <SectionSkeleton />
              <SectionSkeleton />
              <SectionSkeleton />
              <SectionSkeleton />
            </>
          ) : isError ? (
            <ExploreErrorState onRetry={handleRetry} />
          ) : isEmpty ? (
            <ExploreEmptyState />
          ) : 
          (
            accommodations.length > 0 && (
            <AccommodationSection accommodations={accommodations.slice(0, 4)} />
          )
           
          )
          }
          {/* {
           trendingDestinations.length > 0 && (
              <TrendingDestinationSection
                destinations={trendingDestinations.slice(0, 4)}
              />
            )
          } */}
          {localFoods.length > 0 && (
            <LocalFoodSection foods={localFoods.slice(0, 4)} />
          )}
          {localEvents.length > 0 && (
            <LocalEventSection events={localEvents.slice(0, 4)} />
          )}
        </div>
      </div>

      <ContextPanel />
    </div>
  );
}
