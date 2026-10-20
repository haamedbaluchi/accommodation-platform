import { LocationImageGallery } from '@widgets/place/location-details/ui/location-hero/location-image-gallery';
import { RestaurantBasicInfo } from './restaurant-basic-info';
import { RestaurantKeyInfo } from './restaurant-key-info';

interface RestaurantHeroProps {
  title: string;
  foodTypes: string[];
  rating: string;
  commentsCount: string;
  shortAddress: string;
  images: string[];
  suggestedVisitTime: string;
  openStatus: boolean;
  priceRange: string;
}

export function RestaurantHero({
  title,
  foodTypes,
  rating,
  commentsCount,
  shortAddress,
  images,
  suggestedVisitTime,
  openStatus,
  priceRange,
}: RestaurantHeroProps) {
  return (
    <section className="pb-5 border-b border-dashed border-text-muted-foreground">
      <div className="flex flex-col gap-5">
        <RestaurantBasicInfo
          title={title}
          foodTypes={foodTypes}
          rating={rating}
          commentsCount={commentsCount}
          shortAddress={shortAddress}
        />

        <LocationImageGallery images={images} />

        <RestaurantKeyInfo
          suggestedVisitTime={suggestedVisitTime}
          openStatus={openStatus}
          priceRange={priceRange}
        />
      </div>
    </section>
  );
}