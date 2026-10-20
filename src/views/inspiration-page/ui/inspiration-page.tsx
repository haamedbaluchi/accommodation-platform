// 'use client';

// import { mapInspirationsToDestinationExperiences } from '@entities/travel-inspiration';
// import { navLinks } from '@shared/constants';
// import { TabBar } from '@shared/ui';
// import { DiscoveryExperienceSection } from '@widgets/inspiration/collections/discovery-experience';
// import { LocalExperienceSection } from '@widgets/inspiration/collections/local-experience';
// import { InspirationHeader } from '@widgets/inspiration/header';
// import { InspirationToolbar } from '@widgets/inspiration/toolbar';
// import { Sidebar } from '@widgets/layout/sidebar';
// import { useState } from 'react';
// import { useInspiration } from '../model/use-inspiration';

// export function InspirationPage() {
//   const [search, setSearch] = useState('');
//   const { ispirations, isLoading, error } = useInspiration({ search });

//   return (
//     <div className="flex flex-col sm:flex-row h-screen w-full">
//       <Sidebar />
      
//       <div className="flex flex-1 flex-col overflow-y-auto no-scrollbar sm:custom-scrollbar pb-14 sm:pb-0 relative">
//         <InspirationHeader />
//         <InspirationToolbar search={search} onSearchChange={setSearch} />

//         {/* <LocalExperienceSection /> */}

//         <DiscoveryExperienceSection
//           destinations={mapInspirationsToDestinationExperiences(ispirations)}
//         />
//       </div>
//       <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden justify-center px-4 pb-4 pointer-events-none">
//         <TabBar
//           items={navLinks}
//           tabClassName="flex flex-col gap-1 w-18 xs:w-27"
//           className="pointer-events-auto backdrop-blur-3xl backdrop-saturate-150"
//         />
//       </div>
//     </div>
//   );
// }
'use client';

import { mapInspirationsToDestinationExperiences } from '@entities/travel-inspiration';
import {
  FILTER_VALUES,
  filterDestinationsByCategory,
  InspirationFilter,
} from '@features/inspiration/filter-inspirations';
import { navLinks } from '@shared/constants';
import { TabBar } from '@shared/ui';
import { DiscoveryExperienceSection } from '@widgets/inspiration/collections/discovery-experience';
import { InspirationHeader } from '@widgets/inspiration/header';
import { InspirationToolbar } from '@widgets/inspiration/toolbar';
import { Sidebar } from '@widgets/layout/sidebar';
import { useMemo, useState } from 'react';
import { useInspiration } from '../model/use-inspiration';

export function InspirationPage() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<InspirationFilter>(FILTER_VALUES.ALL);
  const { ispirations, isLoading } = useInspiration({ search });

  const destinations = useMemo(
    () => mapInspirationsToDestinationExperiences(ispirations),
    [ispirations],
  );

  const filteredDestinations = useMemo(
    () => filterDestinationsByCategory(destinations, activeFilter),
    [destinations, activeFilter],
  );

  return (
    <div className="flex flex-col sm:flex-row h-screen w-full">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-y-auto no-scrollbar sm:custom-scrollbar pb-14 sm:pb-0 relative">
        <InspirationHeader />
        <InspirationToolbar
          search={search}
          onSearchChange={setSearch}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <DiscoveryExperienceSection destinations={filteredDestinations} isLoading={isLoading} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden justify-center px-4 pb-4 pointer-events-none">
        <TabBar
          items={navLinks}
          tabClassName="flex flex-col gap-1 w-18 xs:w-27"
          className="pointer-events-auto backdrop-blur-3xl backdrop-saturate-150"
        />
      </div>
    </div>
  );
}