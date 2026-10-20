
// // 'use client';

// // import { useEffect, useState } from 'react';
// // import { HugeiconsIcon } from '@hugeicons/react';
// // import { MapsLocation01Icon } from '@hugeicons/core-free-icons';

// // import { Drawer, DrawerContent } from '@shared/ui/drawer/drawer';
// // import { Button } from '@shared/ui';

// // import { SearchExploreBar } from '@features/explore-page/search-explore';
// // import { ExploreFilterRow } from '@widgets/explore-page/explore-toolbar/ui/explore-filter-row';
// // import { ExploreMap } from '@widgets/explore-page/explore-map';

// // import { TrendingDestinationSection } from '@widgets/explore-page/collections/trending-destination';
// // import { AccommodationSection } from '@widgets/explore-page/collections/accommodation-card';
// // import { LocalFoodSection } from '@widgets/explore-page/collections/local-food';
// // import { LocalEventSection } from '@widgets/explore-page/collections/local-event';
// // import { SectionSkeleton } from '@widgets/explore-page/explore-states/ui/ection-skeleton';
// // import {
// //   ExploreEmptyState,
// //   ExploreErrorState,
// // } from '@widgets/explore-page/explore-states/ui/explore-state-views';

// // import { useExplorePanelStore } from '@views/explore-page/model/explore-panel-store';
// // import { useLocationDetails } from '@views/explore-page/model/use-location-details';
// // import { useExploreListing } from '@views/explore-page/model/use-explore-listing';

// // import { RestaurantDetails } from '@widgets/explore-page/explore-item-detail/restaurant-details';
// // import { HotelDetails } from '@widgets/explore-page/explore-item-detail/hotel-details';
// // import { EventDetails } from '@widgets/explore-page/explore-item-detail/event-details';
// // import { DestinationDetails } from '@widgets/explore-page/explore-item-detail/destination-details';

// // // اسنپ‌پوینت‌ها: جمع‌شده (فقط دستگیره + دکمه بازگشت)، نیمه‌باز، تقریباً تمام‌صفحه
// // const SNAP_COLLAPSED = '112px';
// // const SNAP_HALF = 0.42;
// // const SNAP_FULL = 0.94;

// // export function ExploreMobileView() {
// //   const mode = useExplorePanelStore((s) => s.mode);
// //   const selectedItem = useExplorePanelStore((s) => s.selectedItem);
// //   const closeDetails = useExplorePanelStore((s) => s.closeDetails);

// //   const { details, isLoading: isDetailsLoading } = useLocationDetails(selectedItem);
// //   const {
// //     trendingDestinations,
// //     accommodations,
// //     localFoods,
// //     localEvents,
// //     isLoading: isListLoading,
// //     isError,
// //   } = useExploreListing();

// //   const showDetails = mode === 'details';

// //   // اسنپ فعلی دراور — کاملاً کنترل‌شده، نه uncontrolled
// //   const [activeSnapPoint, setActiveSnapPoint] = useState<string | number>(SNAP_HALF);
// //   // آخرین اسنپی که کاربر توی حالت browse (نه details) انتخاب کرده بود، تا برگشت بهش یادش بمونه
// //   const [lastBrowseSnap, setLastBrowseSnap] = useState<string | number>(SNAP_HALF);

// //   // وقتی جزییات باز/بسته میشه، فقط اسنپ رو عوض می‌کنیم — دراور هیچ‌وقت unmount نمیشه
// //   useEffect(() => {
// //     setActiveSnapPoint(showDetails ? SNAP_COLLAPSED : lastBrowseSnap);
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [showDetails]);

// //   const isEmpty =
// //     !isListLoading &&
// //     !isError &&
// //     trendingDestinations.length === 0 &&
// //     accommodations.length === 0 &&
// //     localFoods.length === 0 &&
// //     localEvents.length === 0;

// //   return (
// //     <div className="relative h-dvh w-full overflow-hidden">
// //       {/* نقشه: همیشه یک نمونه، هیچ‌وقت شرطی mount/unmount نمیشه */}
// //       <div className="absolute inset-0 z-0">
// //         <ExploreMap />
// //       </div>

// //       {/* جزییات آیتم: تمام‌صفحه، روی نقشه */}
// //       {showDetails && !isDetailsLoading && (
// //         <div className="absolute inset-0 z-30 overflow-y-auto bg-background px-4 pb-28 pt-6">
// //           {selectedItem?.type === 'destination' && (
// //             <DestinationDetails destination={details} onClose={closeDetails} />
// //           )}
// //           {selectedItem?.type === 'restaurant' && (
// //             <RestaurantDetails restaurant={details} onClose={closeDetails} />
// //           )}
// //           {selectedItem?.type === 'accommodation' && (
// //             <HotelDetails hotel={details} onClose={closeDetails} />
// //           )}
// //           {selectedItem?.type === 'event' && (
// //             <EventDetails event={details} onClose={closeDetails} />
// //           )}
// //         </div>
// //       )}

// //       {/* سرچ‌بار: فقط توی حالت browse؛ توی جزییات کاملاً حذف میشه */}
// //       {!showDetails && (
// //         <div className="absolute inset-x-0 top-0 z-40 px-4 pt-4">
// //           <SearchExploreBar />
// //         </div>
// //       )}

// //       {/* درایور: همیشه mount، فقط اسنپ‌پوینتش عوض میشه */}
// //       <Drawer
// //         snapPoints={[SNAP_COLLAPSED, SNAP_HALF, SNAP_FULL]}
// //         activeSnapPoint={activeSnapPoint}
// //         setActiveSnapPoint={(snap) => {
// //           const resolved = snap ?? SNAP_COLLAPSED;
// //           setActiveSnapPoint(resolved);
// //           // فقط وقتی توی حالت browse هستیم، آخرین انتخاب کاربر رو یادمون بمونه
// //           if (!showDetails) setLastBrowseSnap(resolved);
// //         }}
// //         modal={false}
// //         dismissible={false}
// //         open
// //       >
// //         <DrawerContent className="fixed inset-x-0 bottom-0 z-50 flex max-h-[94dvh] flex-col rounded-t-3xl bg-background shadow-[0px_-4px_24px_0px_#10182814]">
// //           <div className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-text-muted-foreground" />

// //           {showDetails ? (
// //             // حالت جمع‌شده‌ی مخصوص جزییات: فقط یه دکمه‌ی بازگشت
// //             <button
// //               onClick={closeDetails}
// //               className="flex items-center justify-center py-4 text-sm font-bold text-text-main font-yekta"
// //             >
// //               بازگشت به گشت‌وگذار
// //             </button>
// //           ) : (
// //             <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-6 pt-4">
// //               <div className="flex items-center justify-between gap-2">
// //                 <ExploreFilterRow />

// //                 <Button
// //                   rounded="full"
// //                   size="small"
// //                   variant="outline"
// //                   className="shrink-0"
// //                   rightIcon={<HugeiconsIcon icon={MapsLocation01Icon} size={16} />}
// //                   onClick={() => setActiveSnapPoint(SNAP_COLLAPSED)}
// //                 >
// //                   نمایش نقشه
// //                 </Button>
// //               </div>

// //               <div className="mt-4 flex flex-col gap-5">
// //                 {isListLoading ? (
// //                   <>
// //                     <SectionSkeleton />
// //                     <SectionSkeleton />
// //                     <SectionSkeleton />
// //                   </>
// //                 ) : isError ? (
// //                   <ExploreErrorState />
// //                 ) : isEmpty ? (
// //                   <ExploreEmptyState />
// //                 ) : (
// //                   <>
// //                     {/* {trendingDestinations.length > 0 && (
// //                       <TrendingDestinationSection destinations={trendingDestinations.slice(0, 4)} />
// //                     )} */}
// //                     {accommodations.length > 0 && (
// //                       <AccommodationSection accommodations={accommodations.slice(0, 4)} />
// //                     )}
// //                     {localFoods.length > 0 && (
// //                       <LocalFoodSection foods={localFoods.slice(0, 4)} />
// //                     )}
// //                     {localEvents.length > 0 && (
// //                       <LocalEventSection events={localEvents.slice(0, 4)} />
// //                     )}
// //                   </>
// //                 )}
// //               </div>
// //             </div>
// //           )}
// //         </DrawerContent>
// //       </Drawer>
// //     </div>
// //   );
// // }
// 'use client';

// import { useEffect, useState } from 'react';
// import { Drawer, DrawerContent } from '@shared/ui/drawer/drawer';
// import { ErrorBoundary } from '@shared/ui/error-boundary';

// import { SearchExploreBar } from '@features/explore-page/search-explore';
// import { ExploreFilterRow } from '@widgets/explore-page/explore-toolbar/ui/explore-filter-row';
// import { ExploreMap } from '@widgets/explore-page/explore-map';

// import { TrendingDestinationSection } from '@widgets/explore-page/collections/trending-destination';
// import { AccommodationSection } from '@widgets/explore-page/collections/accommodation-card';
// import { LocalFoodSection } from '@widgets/explore-page/collections/local-food';
// import { LocalEventSection } from '@widgets/explore-page/collections/local-event';
// import { SectionSkeleton } from '@widgets/explore-page/explore-states/ui/ection-skeleton';
// import {
//   ExploreEmptyState,
//   ExploreErrorState,
// } from '@widgets/explore-page/explore-states/ui/explore-state-views';

// import { useExplorePanelStore } from '@views/explore-page/model/explore-panel-store';
// import { useLocationDetails } from '@views/explore-page/model/use-location-details';
// import { useExploreListing } from '@views/explore-page/model/use-explore-listing';

// import { RestaurantDetails } from '@widgets/explore-page/explore-item-detail/restaurant-details';
// import { HotelDetails } from '@widgets/explore-page/explore-item-detail/hotel-details';
// import { EventDetails } from '@widgets/explore-page/explore-item-detail/event-details';
// import { DestinationDetails } from '@widgets/explore-page/explore-item-detail/destination-details';

// const SNAP_COLLAPSED = '112px';
// const SNAP_HALF = 0.42;
// const SNAP_FULL = 0.94;

// // حداقل ارتفاع محتوای دراور — تا با تغییر ناگهانیِ لیست پر ↔ خالی،
// // دراور یهو کوچیک‌وبزرگ نشه و vaul موقع محاسبه‌ی اسنپ کرش نکنه
// const DRAWER_CONTENT_MIN_HEIGHT = '55dvh';

// function DrawerCrashFallback() {
//   return (
//     <div className="fixed inset-x-0 bottom-0 z-50 flex h-28 flex-col items-center justify-center gap-1 rounded-t-3xl bg-background shadow-[0px_-4px_24px_0px_#10182814]">
//       <p className="text-sm text-text-main font-yekta">مشکلی پیش اومد.</p>
//       <button
//         onClick={() => window.location.reload()}
//         className="text-xs text-primary-active font-yekta"
//       >
//         بارگذاری دوباره
//       </button>
//     </div>
//   );
// }

// export function ExploreMobileView() {
//   const mode = useExplorePanelStore((s) => s.mode);
//   const selectedItem = useExplorePanelStore((s) => s.selectedItem);
//   const closeDetails = useExplorePanelStore((s) => s.closeDetails);

//   const {
//     details,
//     isLoading: isDetailsLoading,
//     isError: isDetailsError,
//   } = useLocationDetails(selectedItem);

//   const {
//     trendingDestinations,
//     accommodations,
//     localFoods,
//     localEvents,
//     isLoading: isListLoading,
//     isError: isListError,
//   } = useExploreListing();

//   const showDetails = mode === 'details';

//   const [activeSnapPoint, setActiveSnapPoint] = useState<string | number>(SNAP_HALF);
//   const [lastBrowseSnap, setLastBrowseSnap] = useState<string | number>(SNAP_HALF);

//   useEffect(() => {
//     setActiveSnapPoint(showDetails ? SNAP_COLLAPSED : lastBrowseSnap);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [showDetails]);

//   const isEmpty =
//     !isListLoading &&
//     !isListError &&
//     trendingDestinations.length === 0 &&
//     accommodations.length === 0 &&
//     localFoods.length === 0 &&
//     localEvents.length === 0;

//   return (
//     // Boundary سطح بالا: اگه هر جای دیگه (حتی خودِ Drawer) کرش کرد،
//     // به‌جای محو کامل صفحه، یه نوار پایین با دکمه‌ی ریلود نشون بده
//     <ErrorBoundary fallback={<DrawerCrashFallback />}>
//       <div className="relative h-dvh w-full overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <ErrorBoundary fallback={<div className="h-full w-full bg-text-muted-foreground" />}>
//             <ExploreMap />
//           </ErrorBoundary>
//         </div>

//         {showDetails && !isDetailsLoading && (
//           <div className="absolute inset-0 z-30 overflow-y-auto bg-background px-4 pb-28 pt-6">
//             <ErrorBoundary
//               fallback={
//                 <div className="flex h-full flex-col items-center justify-center gap-3 text-center font-yekta">
//                   <span className="text-3xl">⚠️</span>
//                   <p className="text-sm text-text-main font-bold">این مورد در دسترس نیست.</p>
//                   <button onClick={closeDetails} className="text-sm text-primary-active">
//                     بازگشت
//                   </button>
//                 </div>
//               }
//             >
//               {isDetailsError ? (
//                 <div className="flex h-full flex-col items-center justify-center gap-3 text-center font-yekta">
//                   <span className="text-3xl">🧭</span>
//                   <p className="text-sm text-text-main font-bold">این مورد پیدا نشد.</p>
//                   <button onClick={closeDetails} className="text-sm text-primary-active">
//                     بازگشت به گشت‌وگذار
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   {selectedItem?.type === 'destination' && (
//                     <DestinationDetails destination={details} onClose={closeDetails} />
//                   )}
//                   {selectedItem?.type === 'restaurant' && (
//                     <RestaurantDetails restaurant={details} onClose={closeDetails} />
//                   )}
//                   {selectedItem?.type === 'accommodation' && (
//                     <HotelDetails hotel={details} onClose={closeDetails} />
//                   )}
//                   {selectedItem?.type === 'event' && (
//                     <EventDetails event={details} onClose={closeDetails} />
//                   )}
//                 </>
//               )}
//             </ErrorBoundary>
//           </div>
//         )}

//         {!showDetails && (
//           <div className="absolute inset-x-0 top-0 z-40 px-4 pt-4">
//             <SearchExploreBar />
//           </div>
//         )}

//         <Drawer
//           snapPoints={[SNAP_COLLAPSED, SNAP_HALF, SNAP_FULL]}
//           activeSnapPoint={activeSnapPoint}
//           setActiveSnapPoint={(snap) => {
//             const resolved = snap ?? SNAP_COLLAPSED;
//             setActiveSnapPoint(resolved);
//             if (!showDetails) setLastBrowseSnap(resolved);
//           }}
//           modal={false}
//           dismissible={false}
//           open
//         >
//           <DrawerContent className="fixed inset-x-0 bottom-0 z-50 flex max-h-[94dvh] flex-col rounded-t-3xl bg-background shadow-[0px_-4px_24px_0px_#10182814]">
//             <div className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-text-muted-foreground" />

//             {showDetails ? (
//               <button
//                 onClick={closeDetails}
//                 className="flex items-center justify-center py-4 text-sm font-bold text-text-main font-yekta"
//               >
//                 بازگشت به گشت‌وگذار
//               </button>
//             ) : (
//               <div
//                 className="min-h-0 flex-1 overflow-y-auto px-4 pb-6 pt-4"
//                 style={{ minHeight: DRAWER_CONTENT_MIN_HEIGHT }}
//               >
//                 <ExploreFilterRow />

//                 <div className="mt-4 flex flex-col gap-5">
//                   {isListLoading ? (
//                     <>
//                       <SectionSkeleton />
//                       <SectionSkeleton />
//                       <SectionSkeleton />
//                     </>
//                   ) : isListError ? (
//                     <ExploreErrorState />
//                   ) : isEmpty ? (
//                     <ExploreEmptyState />
//                   ) : (
//                     <>
//                       {trendingDestinations.length > 0 && (
//                         <TrendingDestinationSection destinations={trendingDestinations.slice(0, 4)} />
//                       )}
//                       {accommodations.length > 0 && (
//                         <AccommodationSection accommodations={accommodations.slice(0, 4)} />
//                       )}
//                       {localFoods.length > 0 && (
//                         <LocalFoodSection foods={localFoods.slice(0, 4)} />
//                       )}
//                       {localEvents.length > 0 && (
//                         <LocalEventSection events={localEvents.slice(0, 4)} />
//                       )}
//                     </>
//                   )}
//                 </div>
//               </div>
//             )}
//           </DrawerContent>
//         </Drawer>
//       </div>
//     </ErrorBoundary>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { MapsLocation01Icon } from '@hugeicons/core-free-icons';

import { Drawer, DrawerContent } from '@shared/ui/drawer/drawer';
import { ErrorBoundary } from '@shared/ui/error-boundary';

import { SearchExploreBar } from '@features/explore-page/search-explore';
import { ExploreFilterRow } from '@widgets/explore-page/explore-toolbar/ui/explore-filter-row';
import { ExploreMap } from '@widgets/explore-page/explore-map';

import { TrendingDestinationSection } from '@widgets/explore-page/collections/trending-destination';
import { AccommodationSection } from '@widgets/explore-page/collections/accommodation-card';
import { LocalFoodSection } from '@widgets/explore-page/collections/local-food';
import { LocalEventSection } from '@widgets/explore-page/collections/local-event';
import { SectionSkeleton } from '@widgets/explore-page/explore-states/ui/ection-skeleton';
import {
  ExploreEmptyState,
  ExploreErrorState,
} from '@widgets/explore-page/explore-states/ui/explore-state-views';

import { useExplorePanelStore } from '@views/explore-page/model/explore-panel-store';
import { useLocationDetails } from '@views/explore-page/model/use-location-details';
import { useExploreListing } from '@views/explore-page/model/use-explore-listing';

import { RestaurantDetails } from '@widgets/explore-page/explore-item-detail/restaurant-details';
import { HotelDetails } from '@widgets/explore-page/explore-item-detail/hotel-details';
import { EventDetails } from '@widgets/explore-page/explore-item-detail/event-details';
import { DestinationDetails } from '@widgets/explore-page/explore-item-detail/destination-details';

// حالت پیش‌فرض دیگه نیمه‌ی صفحه نیست، بالاترـه (فقط یه نوار باریک از نقشه دیده میشه)
const SNAP_COLLAPSED = '112px';
const SNAP_DEFAULT = 0.42;
const SNAP_FULL = 1;

const DRAWER_CONTENT_MIN_HEIGHT = '60dvh';

function DrawerCrashFallback() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex h-28 flex-col items-center justify-center gap-1 rounded-t-3xl bg-background shadow-[0px_-4px_24px_0px_#10182814]">
      <p className="text-sm text-text-main font-yekta">مشکلی پیش اومد.</p>
      <button
        onClick={() => window.location.reload()}
        className="text-xs text-primary-active font-yekta"
      >
        بارگذاری دوباره
      </button>
    </div>
  );
}

export function ExploreMobileView() {
  const mode = useExplorePanelStore((s) => s.mode);
  const selectedItem = useExplorePanelStore((s) => s.selectedItem);
  const closeDetails = useExplorePanelStore((s) => s.closeDetails);

  const {
    details,
    isLoading: isDetailsLoading,
    isError: isDetailsError,
  } = useLocationDetails(selectedItem);

  const {
    trendingDestinations,
    accommodations,
    localFoods,
    localEvents,
    isLoading: isListLoading,
    isError: isListError,
  } = useExploreListing();

  const showDetails = mode === 'details';

  const [activeSnapPoint, setActiveSnapPoint] = useState<string | number>(SNAP_DEFAULT);
  const [lastBrowseSnap, setLastBrowseSnap] = useState<string | number>(SNAP_DEFAULT);

  useEffect(() => {
    setActiveSnapPoint(showDetails ? SNAP_COLLAPSED : lastBrowseSnap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDetails]);

  const isEmpty =
    !isListLoading &&
    !isListError &&
    trendingDestinations.length === 0 &&
    accommodations.length === 0 &&
    localFoods.length === 0 &&
    localEvents.length === 0;

  // دکمه‌ی شناور فقط وقتی نمایش داده میشه که دراور توی حالت تمام‌صفحه‌ست
  const isFullyExpanded = !showDetails && activeSnapPoint === SNAP_FULL;

  return (
    <ErrorBoundary fallback={<DrawerCrashFallback />}>
      <div className="relative h-dvh w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ErrorBoundary fallback={<div className="h-full w-full bg-text-muted-foreground" />}>
            <ExploreMap />
          </ErrorBoundary>
        </div>

        {showDetails && !isDetailsLoading && (
          <div className="absolute inset-0 z-30 overflow-y-auto bg-background px-4 pb-28 pt-6">
            <ErrorBoundary
              fallback={
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center font-yekta">
                  <span className="text-3xl">⚠️</span>
                  <p className="text-sm text-text-main font-bold">این مورد در دسترس نیست.</p>
                  <button onClick={closeDetails} className="text-sm text-primary-active">
                    بازگشت
                  </button>
                </div>
              }
            >
              {isDetailsError ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center font-yekta">
                  <span className="text-3xl">🧭</span>
                  <p className="text-sm text-text-main font-bold">این مورد پیدا نشد.</p>
                  <button onClick={closeDetails} className="text-sm text-primary-active">
                    بازگشت به گشت‌وگذار
                  </button>
                </div>
              ) : (
                <>
                  {selectedItem?.type === 'destination' && (
                    <DestinationDetails destination={details} onClose={closeDetails} />
                  )}
                  {selectedItem?.type === 'restaurant' && (
                    <RestaurantDetails restaurant={details} onClose={closeDetails} />
                  )}
                  {selectedItem?.type === 'accommodation' && (
                    <HotelDetails hotel={details} onClose={closeDetails} />
                  )}
                  {selectedItem?.type === 'event' && (
                    <EventDetails event={details} onClose={closeDetails} />
                  )}
                </>
              )}
            </ErrorBoundary>
          </div>
        )}

        {!showDetails && (
          <div className="absolute inset-x-0 top-0 z-[70] px-4 pt-4">
            <SearchExploreBar />
          </div>
        )}

        {/* دکمه‌ی شناور «نمایش نقشه» — فقط وقتی دراور تمام‌صفحه‌ست */}
        {isFullyExpanded && (
          <button
            onClick={() => setActiveSnapPoint(SNAP_DEFAULT)}
            className="fixed inset-x-0 bottom-6 z-[60] mx-auto flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white font-yekta shadow-[0px_4px_16px_0px_#10182833]"
          >
            <HugeiconsIcon icon={MapsLocation01Icon} size={18} />
            نمایش نقشه
          </button>
        )}

        <Drawer
          snapPoints={[SNAP_COLLAPSED, SNAP_DEFAULT, SNAP_FULL]}
          activeSnapPoint={activeSnapPoint}
          setActiveSnapPoint={(snap) => {
            const resolved = snap ?? SNAP_COLLAPSED;
            setActiveSnapPoint(resolved);
            if (!showDetails) setLastBrowseSnap(resolved);
          }}
          modal={false}
          dismissible={false}
          open
        >
          <DrawerContent className="fixed inset-x-0 bottom-0 z-50 flex max-h-[94dvh] flex-col rounded-t-3xl bg-background shadow-[0px_-4px_24px_0px_#10182814]">
            <div className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-text-muted-foreground" />

            {showDetails ? (
              <button
                onClick={closeDetails}
                className="flex items-center justify-center py-4 text-sm font-bold text-text-main font-yekta"
              >
                بازگشت به گشت‌وگذار
              </button>
            ) : (
              <div
                className="min-h-0 flex-1 overflow-y-auto px-4 pb-6 pt-4"
                style={{ minHeight: DRAWER_CONTENT_MIN_HEIGHT }}
              >
                <ExploreFilterRow />

                <div className="mt-4 flex flex-col gap-5">
                  {isListLoading ? (
                    <>
                      <SectionSkeleton />
                      <SectionSkeleton />
                      <SectionSkeleton />
                    </>
                  ) : isListError ? (
                    <ExploreErrorState />
                  ) : isEmpty ? (
                    <ExploreEmptyState />
                  ) : (
                    <>
                      {trendingDestinations.length > 0 && (
                        <TrendingDestinationSection destinations={trendingDestinations.slice(0, 4)} />
                      )}
                      {accommodations.length > 0 && (
                        <AccommodationSection accommodations={accommodations.slice(0, 4)} />
                      )}
                      {localFoods.length > 0 && (
                        <LocalFoodSection foods={localFoods.slice(0, 4)} />
                      )}
                      {localEvents.length > 0 && (
                        <LocalEventSection events={localEvents.slice(0, 4)} />
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </DrawerContent>
        </Drawer>
      </div>
    </ErrorBoundary>
  );
}