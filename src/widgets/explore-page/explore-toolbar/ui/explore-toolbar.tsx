'use client';

import { HugeiconsIcon } from '@hugeicons/react';
import { MapsLocation01Icon } from '@hugeicons/core-free-icons';
import { SearchExploreBar } from '@features/explore-page/search-explore';
import { Button } from '@shared/ui';
import { cn } from '@shared/lib';
import { useExplorePanelStore } from '@views/explore-page/model/explore-panel-store';
import { ExploreFilterRow } from './explore-filter-row';

export function ExploreToolbar({ className }: { className?: string }) {
  const panelMode = useExplorePanelStore((s) => s.mode);
  const toggleMap = useExplorePanelStore((s) => s.toggleMap);

  return (
    <div className={cn('flex flex-col gap-4 py-5', className)}>
      <div className="flex items-center gap-2">
        <SearchExploreBar />

        <Button
          rounded="full"
          size="medium"
          variant={panelMode === 'map' ? 'primary' : 'outline'}
          aria-label={panelMode === 'map' ? 'بستن نقشه' : 'بازکردن نقشه'}
          rightIcon={<HugeiconsIcon icon={MapsLocation01Icon} size={20} />}
          onClick={toggleMap}
        >
          {panelMode === 'map' ? 'بستن نقشه' : 'کشف روی نقشه'}
        </Button>
      </div>

      <ExploreFilterRow />
    </div>
  );
}
