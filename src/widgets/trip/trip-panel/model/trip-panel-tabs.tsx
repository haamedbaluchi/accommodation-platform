import Image from 'next/image';

import { TabItem } from '@shared/ui/tab-bar';

import activeMapIconUrl from '@shared/assets/icons/map_active.svg?url';
import activeLuggageIconUrl from '@shared/assets/icons/luggage_active.svg?url';
import activeTourGuideIconUrl from '@shared/assets/icons/tour_guide_active.svg?url';

export const tripPanelTabs: TabItem[] = [
  {
    id: 'map_tab',
    label: 'نقشه',
    // icon: <Image src={mapIconUrl} alt="" width={32} height={32} />,
    icon: (
      <Image src={activeMapIconUrl} alt="" width={32} height={32} />
    ),
  },
  {
    id: 'guide_tab',
    label: 'برنامه',
    // icon: <Image src={tourGuideIconUrl} alt="" width={32} height={32} />,
    icon: (
      <Image src={activeTourGuideIconUrl} alt="" width={32} height={32} />
    ),
  },
  {
    id: 'booked_tab',
    label: 'رزروها',
    // icon: <Image src={luggageIconUrl} alt="" width={32} height={32} />,
    icon: (
      <Image src={activeLuggageIconUrl} alt="" width={32} height={32} />
    ),
  },
];
