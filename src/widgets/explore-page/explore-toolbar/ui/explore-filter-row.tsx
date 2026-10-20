'use client';

import { FilterExplore } from '@features/explore-page/filter-explore';
import { useExploreToolbarStore } from '@views/explore-page/model/explore-toolbar-store';

export function ExploreFilterRow() {
  const activeFilter = useExploreToolbarStore((s) => s.activeFilter);
  const setActiveFilter = useExploreToolbarStore((s) => s.setActiveFilter);

  return <FilterExplore activeFilter={activeFilter} onFilterChange={setActiveFilter} />;
}