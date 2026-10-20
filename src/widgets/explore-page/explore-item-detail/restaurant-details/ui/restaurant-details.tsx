import { LocationSummary } from '@widgets/place/location-details/ui/location-overview/location-summary';
import { LocationMapView } from '@widgets/place/location-details/ui/location-map-view/location-map-view';

import { RestaurantDetailsData } from '../model/types';
import { normalizeRestaurantDetails } from '../model/normalize-restaurant-details';
import { RestaurantHero } from './restaurant-hero';
import { RestaurantVisitInfo } from './restaurant-visit-info';
import { DetailsHeaderActions } from '@shared/ui/details-header-actions';

interface RestaurantDetailsProps {
  restaurant?: RestaurantDetailsData;
  onClose?: () => void;
}

export function RestaurantDetails({
  restaurant,
  onClose,
}: RestaurantDetailsProps) {
  const data = normalizeRestaurantDetails(restaurant);

  return (
    <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 mb-6 p-3 md:p-5 lg:p-7">
      <DetailsHeaderActions onClose={onClose} />

      <RestaurantHero
        title={data.title}
        foodTypes={data.foodTypes}
        rating={data.rating}
        commentsCount={data.commentsCount}
        shortAddress={data.shortAddress}
        images={data.images}
        suggestedVisitTime={data.suggestedVisitTime}
        openStatus={data.openStatus}
        priceRange={data.priceRange}
      />

      <section>
        <div className="flex flex-col gap-5 items-center">
          <h3 className="self-start font-bold text-base text-text-main font-yekta">
            یه نگاه کلی
          </h3>
          <LocationSummary locationSummary={data.locationSummary} />
        </div>
      </section>

      <div className='flex items-center gap-2'>
       <h3 className='text-text-main font-bold '>نوع غذا:</h3>
        <div className="flex items-center gap-2 flex-wrap">
          {data.foodTypes.map((type, index) => (
            <span
              key={index}
              className="rounded-full bg-text-muted-foreground px-3 py-1 text-xs font-medium text-text-main font-yekta"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      <RestaurantVisitInfo
        fullAddress={data.fullAddress}
        statusNow={data.statusNow}
        openingHours={data.openingHours}
        mapLink={data.mapLink}
        phone={data.phone}
        website={data.website}
      />

      <LocationMapView
        shortAddress={data.shortAddress}
        coordinates={data.coordinates}
      />
    </div>
  );
}
