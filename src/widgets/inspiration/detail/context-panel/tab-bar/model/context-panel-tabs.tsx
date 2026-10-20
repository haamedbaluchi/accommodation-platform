import Image from 'next/image';

import { TabItem } from '@shared/ui/tab-bar';

import mapIconUrl from "@shared/assets/icons/map.svg?url"
import activeMapIconUrl from '@shared/assets/icons/map_active.svg?url';
import weatherIconUrl from '@shared/assets/icons/weather.svg?url';
import activeWeatherIconUrl from '@shared/assets/icons/weather-active.svg?url';
import roadIconUrl from '@shared/assets/icons/road.svg?url';

export const contextPanelTabs: TabItem[] = [
  {
    id: 'map_tab',
    label: 'نقشه',
    icon: <Image src={mapIconUrl} alt="" width={32} height={32} />,
    activeIcon: (
      <Image src={activeMapIconUrl} alt="" width={32} height={32} />
    ),
  },
  {
    id: 'weather_tab',
    label: 'وضعیت آب‌وهوا',
    icon: <Image src={weatherIconUrl} alt="" width={32} height={32} />,
    activeIcon: (
      <Image src={activeWeatherIconUrl} alt="" width={32} height={32} />
    ),
  },
  // {
  //   id: 'road_tab',
  //   label: 'مسیر سفر',
  //   icon: <Image src={roadIconUrl} alt="" width={32} height={32} />,
  //   activeIcon: (
  //     <Image src={roadIconUrl} alt="" width={32} height={32} />
  //   ),
  // },
];
