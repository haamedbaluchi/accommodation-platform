//   'use client';
  
//   import { FilterInpiration, InspirationFilter } from '@features/inspiration/filter-inspirations';
//   import { InspirationSearchBar } from '@features/inspiration/search-inspirations';
// import { useState } from 'react';
  
//   interface InspirationToolbarProps {
//     search: string;
//     onSearchChange: (value: string) => void;
//   }
  
//   export function InspirationToolbar({
//     search,
//     onSearchChange,
//   }: InspirationToolbarProps) {
//     const [activeFilter, setActiveFilter] = useState<InspirationFilter>('all');
//   return (
//     <div className="flex flex-col gap-2.5 px-7 py-6 sticky top-0 bg-background z-20">
//       <InspirationSearchBar
//         value={search}
//         changeValue={(e) => onSearchChange(e.target.value)}
//       />

//       {/* NOTE: filter chips (popular/cultural/nature/...) don't map to backend's
//           sort: "created_at"|"title"|"city" — disconnected until API supports category filtering */}
//       <FilterInpiration
//         activeFilter={activeFilter}
//         onFilterChange={setActiveFilter}
//       />
//     </div>
//   );
// }
'use client';

import { FilterInpiration, InspirationFilter } from '@features/inspiration/filter-inspirations';
import { InspirationSearchBar } from '@features/inspiration/search-inspirations';

interface InspirationToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  activeFilter: InspirationFilter;
  onFilterChange: (filter: InspirationFilter) => void;
}

export function InspirationToolbar({
  search,
  onSearchChange,
  activeFilter,
  onFilterChange,
}: InspirationToolbarProps) {
  return (
    <div className="flex flex-col gap-2.5 px-7 py-6 sticky top-0 bg-background z-20">
      <InspirationSearchBar value={search} changeValue={(e) => onSearchChange(e.target.value)} />
      <FilterInpiration activeFilter={activeFilter} onFilterChange={onFilterChange} />
    </div>
  );
}