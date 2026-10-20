import {
  mapDetailsToWhySection,
} from '@entities/travel-inspiration';
import { mockDetail } from '../model/mock-data';
import { WhySection } from './why-this-trip/WhySection';
import { RecommendedSection } from './recommended/recommended-section';
import { BeforeYouGoSection } from './before-you-go/before-you-go-section';
import { Weather } from './weather/weather';
import { FoodExperience } from './food_experience/food_experience';
import type { InspirationDetails } from '@entities/travel-inspiration';

export function InspirationOverviewContent({ details }: { details: InspirationDetails }) {
  return (
    <div className="space-y-0">
      <WhySection data={mapDetailsToWhySection(details)} />
      <RecommendedSection recommendations={mockDetail.recommendations} />
      <BeforeYouGoSection data={{ title: 'قبل از رفتن بدان', text: details.know_before_travel }} />
      <Weather data={{ text: details.weather }} />
      <FoodExperience data={{ text: details.food_experience }} />
    </div>
  );
}