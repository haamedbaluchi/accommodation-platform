'use client';

import { useState } from 'react';
import { SidePanel } from '@widgets/layout/side-panel';
import { ContextTabBar } from '@widgets/inspiration/detail/context-panel/tab-bar';
import { ContextMapView } from '@widgets/inspiration/detail/context-panel/map';
import { WeatherContent } from '@widgets/inspiration/detail/context-panel/weather';
import { useRouteWeather } from '@widgets/inspiration/detail/context-panel/weather/model/use-route-weather';
import { useInspirationDetails } from '@widgets/inspiration/detail/detail-content/model/use-inspiration-details';
import { mapPlacesToMapPoints } from '@entities/travel-inspiration';
import { useTouristPlaceDetails } from '../model/use-tourist-place-details';
import { LocationDetails } from '@widgets/place/location-details';
import { useCurrentUser } from '@entities/user/model/use-current-user';
import { useAuthStore } from '@features/auth';
import { LocationDetailsSkeleton } from '@widgets/place/location-details/ui/location-details-skeleton';

interface ContextPanelProps {
  inspirationId: string;
  selectedStopUid: string | null;
}
// widgets/inspiration/detail/context-panel/ui/context-panel.tsx

export function ContextPanel({
  inspirationId,
  selectedStopUid,
}: ContextPanelProps) {
  const [activeTabId, setActiveTabId] = useState('map_tab');
  // const { user, hasHydrated } = useCurrentUser();
  const user = useAuthStore((state) => state.user);

  const { details } = useInspirationDetails(inspirationId);
  const mapPoints = details ? mapPlacesToMapPoints(details) : [];

  // hasHydrated=false یعنی هنوز localStorage خونده نشده، پس هنوز query نزن
  const { data: weather, isLoading: isWeatherLoading } = useRouteWeather(
    user?.city,
    details?.city_name,
  );

  const { place: stopDetails, isLoading: isStopLoading } =
    useTouristPlaceDetails(selectedStopUid);

  return (
    <SidePanel
      isOpen
      variant="outline"
      // width="clamp(640px,42vw,740px)"
      // یه گزینه: کف رو با vw هماهنگ کن نه یه عدد ثابت بزرگ
      width="clamp(360px, 42vw, 740px)"
      className="mt-7 mb-11 pr-px pb-px hidden md:block"
      header={
        selectedStopUid ? null : (
          <ContextTabBar
            defaultActiveId="map_tab"
            onChange={(item) => setActiveTabId(item.id as string)}
          />
        )
      }
    >
      {selectedStopUid ? (
        isStopLoading ? (
          <LocationDetailsSkeleton />
        ) : (
          <div className="p-7" key={selectedStopUid}>
            <LocationDetails location={stopDetails} />
          </div>
        )
      ) : activeTabId === 'map_tab' ? (
        <ContextMapView points={mapPoints} />
      ) : isWeatherLoading || !weather ? null : (
        <WeatherContent
          data={weather}
          originLocationName={user?.city ?? ''}
          destinationLocationName={details?.city_name ?? ''}
        />
      )}
    </SidePanel>
  );
}
