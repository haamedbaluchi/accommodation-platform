// 'use client';

// import PanelTabs from './panel-tabs';
// import { TripPlanView } from './trip-plan-view';
// import { useEffect, useMemo, useState } from 'react';
// import {
//   extractAttractionPoints,
//   useTripAttractionsStore,
// } from '@entities/trip/attraction';
// import { mapStructuredToTripPlan } from '../model/trip-plan.mapper';
// import { RenderActivity } from '../model/render-activity.type';
// import { useActiveAiMessage } from '@entities/chat';
// export type TabsType = 'tripPlan' | 'tripTravlers' | 'reserves' | 'chats';

// type TripAsideProps = {
//   onClose?: VoidFunction;
//   renderActivity: RenderActivity;
// };

// export default function TripAside({ onClose, renderActivity }: TripAsideProps) {
//   const [activeTab, setActiveTab] = useState<TabsType>('tripPlan');

//   const aiMessage = useActiveAiMessage();
//   const setAttractions = useTripAttractionsStore((s) => s.setAttractions);

//   const structured =
//     aiMessage?.aiData?.structured ??
//     aiMessage?.aiData?.finalOutput?.structured ??
//     null;

//   const tripPlan = useMemo(() => {
//     if (!structured) return null;

//     return mapStructuredToTripPlan(structured, aiMessage?.aiData?.researchData);
//   }, [structured, aiMessage?.aiData?.researchData]);

//   useEffect(() => {
//     const points = extractAttractionPoints(tripPlan);
//     setAttractions(points);
//   }, [tripPlan, setAttractions]);

//   return (
//     <div className="h-auto w-full overflow-y-auto custom-scrollbar p-4 2xl:p-7">
//       <PanelTabs
//         activeTab={activeTab}
//         changeTabs={setActiveTab}
//         onClose={onClose}
//       />

//       {activeTab === 'tripPlan' && (
//         <TripPlanView tripPlan={tripPlan} renderActivity={renderActivity} />
//       )}
//     </div>
//   );
// }
'use client';

import PanelTabs from './panel-tabs';
import { TripPlanView } from './trip-plan-view';
import { useEffect, useMemo, useState } from 'react';
import { extractAttractionPoints, useTripAttractionsStore } from '@entities/trip/attraction';
import { mapStructuredToTripPlan } from '../model/trip-plan.mapper';
import { RenderActivity } from '../model/render-activity.type';
import { useActiveAiMessage } from '@entities/chat';

export type TabsType = 'tripPlan' | 'tripTravlers' | 'reserves' | 'chats';

type TripAsideProps = {
  onClose?: VoidFunction;
  renderActivity: RenderActivity;
};

export default function TripAside({ onClose, renderActivity }: TripAsideProps) {
  const [activeTab, setActiveTab] = useState<TabsType>('tripPlan');

  const aiMessage = useActiveAiMessage();
  const setAttractions = useTripAttractionsStore((s) => s.setAttractions);

  const structured =
    aiMessage?.aiData?.structured ?? aiMessage?.aiData?.finalOutput?.structured ?? null;

  const tripPlan = useMemo(() => {
    if (!structured) return null;
    return mapStructuredToTripPlan(structured, aiMessage?.aiData?.researchData);
  }, [structured, aiMessage?.aiData?.researchData]);

  useEffect(() => {
    const points = extractAttractionPoints(tripPlan);
    setAttractions(points);
  }, [tripPlan, setAttractions]);

  return (
    <div className="h-auto w-full overflow-y-auto custom-scrollbar p-4 2xl:p-7">
      <PanelTabs activeTab={activeTab} changeTabs={setActiveTab} onClose={onClose} />
      {activeTab === 'tripPlan' && <TripPlanView tripPlan={tripPlan} renderActivity={renderActivity} />}
    </div>
  );
}