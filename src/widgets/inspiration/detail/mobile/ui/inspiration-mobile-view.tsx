
'use client';

import { useState } from 'react';

import { Drawer, DrawerContent } from '@shared/ui/drawer/drawer';
import { ErrorBoundary } from '@shared/ui/error-boundary';
import { LocationDetails } from '@widgets/place/location-details';
import { LocationDetailsSkeleton } from '@widgets/place/location-details/ui/location-details-skeleton';

import { useInspirationDetails } from '@widgets/inspiration/detail/detail-content/model/use-inspiration-details';
import { useRouteWeather } from '@widgets/inspiration/detail/context-panel/weather/model/use-route-weather';
import { WeatherContent } from '@widgets/inspiration/detail/context-panel/weather';
import { ContextMapView } from '@widgets/inspiration/detail/context-panel/map';

import { HeroSection } from '@widgets/inspiration/detail/detail-content/ui/hero/hero-section';
import { InspirationOverviewContent } from '@widgets/inspiration/detail/detail-content/ui/inspiration-overview-content';
import { InspirationRouteContent } from '@widgets/inspiration/detail/detail-content/ui/inspiration-route-content';

import {
  mapDetailsToHero,
  mapPlacesToMapPoints,
} from '@entities/travel-inspiration';
import { useAuthStore } from '@features/auth';
import { useTouristPlaceDetails } from '@views/inspiration-details-page/model/use-tourist-place-details';
import {
  DETAIL_TABS,
  DetailTabId,
} from '@views/inspiration-details-page/model/detail-tabs';
import { TabBar } from '@shared/ui';

interface InspirationMobileViewProps {
  inspirationId: string;
}

export function InspirationMobileView({
  inspirationId,
}: InspirationMobileViewProps) {
  const { details, isLoading, error } = useInspirationDetails(inspirationId);
  const user = useAuthStore((state) => state.user);

  const [activeTab, setActiveTab] = useState<DetailTabId>('overview');
  const [selectedStopUid, setSelectedStopUid] = useState<string | null>(null);

  const { data: weather, isLoading: isWeatherLoading } = useRouteWeather(
    user?.city,
    details?.city_name,
  );

  const { place: stopDetails, isLoading: isStopLoading } =
    useTouristPlaceDetails(selectedStopUid);

  if (isLoading) return <div className="h-dvh w-full bg-background" />;

  if (error || !details) {
    return (
      <div className="flex h-dvh w-full items-center justify-center px-6 text-center font-yekta">
        <p className="text-sm text-text-main">
          مشکلی در دریافت اطلاعات این سفر پیش آمد.
        </p>
      </div>
    );
  }

  const mapPoints = mapPlacesToMapPoints(details);

  return (
    <div className="min-h-dvh w-full overflow-y-auto bg-background pb-10">
      <HeroSection
        data={mapDetailsToHero(details)}
        inspirationId={inspirationId}
      />

      {/* تب‌ها: در یک نگاه / آب‌وهوا / نقشه — «مسیر سفر» دیگه پشت تب نیست، همیشه پایین‌تر نمایش داده می‌شه */}
      <div className="flex items-center gap-2 overflow-x-auto px-4 py-4 no-scrollbar">
        <TabBar
          items={DETAIL_TABS}
          defaultActiveId={activeTab}
          onChange={(item) => setActiveTab(item.id as DetailTabId)}
          className="max-w-90"
        />
      </div>

      <div className="px-4">
        <ErrorBoundary
          fallback={
            <div className="flex h-[50dvh] flex-col items-center justify-center gap-2 text-center font-yekta">
              <span className="text-3xl">⚠️</span>
              <p className="text-sm text-text-main font-bold">
                مشکلی پیش اومد.
              </p>
            </div>
          }
        >
          {activeTab === 'overview' && (
            <InspirationOverviewContent details={details} />
          )}

          {activeTab === 'weather' &&
            (isWeatherLoading || !weather ? (
              <div className="flex h-[40dvh] items-center justify-center">
                <p className="text-sm text-text-foreground font-yekta">
                  در حال دریافت آب‌وهوا...
                </p>
              </div>
            ) : (
              <WeatherContent
                data={weather}
                originLocationName={user?.city ?? ''}
                destinationLocationName={details.city_name}
              />
            ))}

          {activeTab === 'map' && (
            <div className="h-[60dvh] w-full overflow-hidden rounded-2xl">
              <ContextMapView points={mapPoints} />
            </div>
          )}
        </ErrorBoundary>

        <InspirationRouteContent
          details={details}
          onViewStopDetails={setSelectedStopUid}
        />
      </div>

      <Drawer
        open={!!selectedStopUid}
        onOpenChange={(open) => !open && setSelectedStopUid(null)}
      >
        <DrawerContent className="max-h-[85dvh]">
          <div className="overflow-y-auto px-4 pb-6">
            {isStopLoading ? (
              <LocationDetailsSkeleton />
            ) : (
              <ErrorBoundary
                fallback={
                  <div className="flex h-[50dvh] flex-col items-center justify-center gap-2 text-center font-yekta">
                    <span className="text-3xl">⚠️</span>
                    <p className="text-sm text-text-main font-bold">
                      این مورد در دسترس نیست.
                    </p>
                  </div>
                }
              >
                <LocationDetails
                  location={stopDetails}
                  // onClose={() => setSelectedStopUid(null)}
                />
              </ErrorBoundary>
            )}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
