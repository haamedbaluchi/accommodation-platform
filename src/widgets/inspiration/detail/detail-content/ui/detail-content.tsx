// 'use client';

// import {
//   mapAuthorToTraveler,
//   mapDetailsToHero,
//   mapDetailsToItinerary,
//   mapDetailsToWhySection,
// } from '@entities/travel-inspiration';
// import { mockDetail } from '../model/mock-data';
// import { BeforeYouGoSection } from './before-you-go/before-you-go-section';
// import { ExperienceSection } from './experience/experience-section';
// import { HeroSection } from './hero/hero-section';
// import { ItinerarySection } from './itinerary/itinerary-section';
// import { JourneyExperienceSection } from './journey-experience/journey-experience-section';
// import { RecommendedSection } from './recommended/recommended-section';
// import { TravelerDiscoveryCard } from './traveler-discovery/traveler-discovery-section';
// import { WhySection } from './why-this-trip/WhySection';
// import { useInspirationDetails } from '../model/use-inspiration-details';
// import { FoodExperience } from './food_experience/food_experience';
// import { Weather } from './weather/weather';

// interface DetailContentProps {
//   inspirationId: string;
//   onViewStopDetails?: (placeUid: string) => void;
// }

// export function DetailContent({
//   inspirationId,
//   onViewStopDetails,
// }: DetailContentProps) {
//   const { details, isLoading, error } = useInspirationDetails(inspirationId);

//   if (isLoading) return null;
//   if (error || !details)
//     return <p className="p-7">مشکلی در دریافت اطلاعات این سفر پیش آمد.</p>;

//   return (
//     <main className="space-y-0 w-full">
//       <HeroSection
//         data={mapDetailsToHero(details)}
//         inspirationId={inspirationId}
//       />
//       <div className="pl-2 lg:pl-4 xl:pl-7 pr-4 lg:pr-7">
//         <WhySection data={mapDetailsToWhySection(details)} />
//         <RecommendedSection recommendations={mockDetail.recommendations} />
//         {/* <ExperienceSection experiences={mockDetail.experiences} /> */}
//         <BeforeYouGoSection
//           data={{ title: 'قبل از رفتن بدان', text: details.know_before_travel }}
//         />
//         <Weather data={{ text: details.weather }} />
//         <FoodExperience data={{ text: details.food_experience }} />
//         <JourneyExperienceSection description={details.route_experience} />
//         <ItinerarySection
//           days={mapDetailsToItinerary(details)}
//           onViewStopDetails={onViewStopDetails}
//         />
//       </div>
//       <TravelerDiscoveryCard traveler={mapAuthorToTraveler(details.author)} />
//     </main>
//   );
// }
'use client';

import { mapAuthorToTraveler, mapDetailsToHero } from '@entities/travel-inspiration';
import { HeroSection } from './hero/hero-section';
import { TravelerDiscoveryCard } from './traveler-discovery/traveler-discovery-section';
import { useInspirationDetails } from '../model/use-inspiration-details';
import { InspirationOverviewContent } from './inspiration-overview-content';
import { InspirationRouteContent } from './inspiration-route-content';

interface DetailContentProps {
  inspirationId: string;
  onViewStopDetails?: (placeUid: string) => void;
}

export function DetailContent({ inspirationId, onViewStopDetails }: DetailContentProps) {
  const { details, isLoading, error } = useInspirationDetails(inspirationId);

  if (isLoading) return null;
  if (error || !details) return <p className="p-7">مشکلی در دریافت اطلاعات این سفر پیش آمد.</p>;

  return (
    <main className="space-y-0 w-full">
      <HeroSection data={mapDetailsToHero(details)} inspirationId={inspirationId} />
      <div className="pl-2 lg:pl-4 xl:pl-7 pr-4 lg:pr-7">
        <InspirationOverviewContent details={details} />
        <InspirationRouteContent details={details} onViewStopDetails={onViewStopDetails} />
      </div>
      <TravelerDiscoveryCard traveler={mapAuthorToTraveler(details.author)} />
    </main>
  );
}