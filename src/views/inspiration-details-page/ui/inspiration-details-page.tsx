// 'use client';

// import { useState } from 'react';
// import { useParams } from 'next/navigation';
// import { DetailContent } from '@widgets/inspiration/detail/detail-content';
// import { Sidebar } from '@widgets/layout/sidebar';
// import { ContextPanel } from './context-panel';

// export function InspirationDetailsPage() {
//   const params = useParams<{ id: string }>();
//   const [selectedStopUid, setSelectedStopUid] = useState<string | null>(null);

//   return (
//     <div className="flex overflow-clip">
//       <Sidebar />
//       <div className="w-full h-dvh flex">
//         <section className="flex-1 pl-2 lg:pl-4 xl:pl-7 max-h-dvh overflow-y-auto">
//           <DetailContent inspirationId={params.id} onViewStopDetails={setSelectedStopUid} />
//         </section>
//         <ContextPanel inspirationId={params.id} selectedStopUid={selectedStopUid} />
//       </div>
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { DetailContent } from '@widgets/inspiration/detail/detail-content';
import { Sidebar } from '@widgets/layout/sidebar';
import { ContextPanel } from './context-panel';
import { useMediaQuery } from '@shared/lib/hooks';
import { InspirationMobileView } from '@widgets/inspiration/detail/mobile/ui/inspiration-mobile-view';

export function InspirationDetailsPage() {
  const params = useParams<{ id: string }>();
  const [selectedStopUid, setSelectedStopUid] = useState<string | null>(null);
  const isMobile = useMediaQuery('(max-width: 639px)');

  if (isMobile === null) {
    return <div className="h-dvh w-full" />;
  }

  if (isMobile) {
    return (
      <InspirationMobileView
        inspirationId={params.id}
        selectedStopUid={selectedStopUid}
        onSelectStop={setSelectedStopUid}
      />
    );
  }

  return (
    <div className="flex overflow-clip">
      <Sidebar />
      <div className="w-full h-dvh flex">
        <section className="flex-1 pl-2 lg:pl-4 xl:pl-7 max-h-dvh overflow-y-auto">
          <DetailContent inspirationId={params.id} onViewStopDetails={setSelectedStopUid} />
        </section>
        <ContextPanel inspirationId={params.id} selectedStopUid={selectedStopUid} />
      </div>
    </div>
  );
}