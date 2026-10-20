// 'use client';
// import { ExploreHeader } from '@widgets/explore-page/explore-header';
// import { Sidebar } from '@widgets/layout/sidebar';
// import { ExploreContent } from './explore-content';
// import { ExploreMobileView } from '@widgets/explore-page/mobile/ui/explore-mobile-view';
// import { useMediaQuery } from '@shared/lib/hooks';

// export function ExplorePage() {
//   const isMobile = useMediaQuery('(max-width: 639px)');

//   return (
//     <div className="h-dvh w-full">
//       <div className="hidden h-full sm:flex">
//         <Sidebar />

//         {isMobile ? (
//           <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
//             <ExploreHeader />
//             <div className="min-h-0 flex-1">
//               <ExploreContent />
//             </div>
//           </div>
//         ) : (
//           <ExploreMobileView />
//         )}
//       </div>
//     </div>
//   );
// }
'use client';

import { ExploreHeader } from '@widgets/explore-page/explore-header';
import { Sidebar } from '@widgets/layout/sidebar';
import { ExploreContent } from './explore-content';
import { ExploreMobileView } from '@widgets/explore-page/mobile/ui/explore-mobile-view';
import { useMediaQuery } from '@shared/lib/hooks';

export function ExplorePage() {
  const isMobile = useMediaQuery('(max-width: 639px)');

  return (
    <div className="h-dvh w-full">
      {isMobile ? (
        <ExploreMobileView />
      ) : (
        <div className="flex h-full">
          <Sidebar />
          <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
            <ExploreHeader />
            <div className="min-h-0 flex-1">
              <ExploreContent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}