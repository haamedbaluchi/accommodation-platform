
import type { TabItem } from '@shared/ui/tab-bar';
import Image from 'next/image';

import mapIconUrl from "@shared/assets/icons/map.svg?url"
import activeMapIconUrl from '@shared/assets/icons/map_active.svg?url';
import weatherIconUrl from '@shared/assets/icons/weather.svg?url';
import activeWeatherIconUrl from '@shared/assets/icons/weather-active.svg?url';

export type DetailTabId = 'overview' | 'route' | 'weather' | 'map';

export const DETAIL_TABS: TabItem[] = [
  { id: 'overview', label: 'در یک نگاه', icon: <span className='size-8'>🧭</span> },
  {
    id: 'map',
    label: 'نقشه',
    icon: <Image src={mapIconUrl} alt="" width={16} height={16} />,
    activeIcon: (
      <Image src={activeMapIconUrl} alt="" width={16} height={16} />
    ),
  },
  {
    id: 'weather',
    label: 'وضعیت آب‌وهوا',
    icon: <Image src={weatherIconUrl} alt="" width={16} height={16} />,
    activeIcon: (
      <Image src={activeWeatherIconUrl} alt="" width={16} height={16} />
    ),
  },
];