import { LocationImageGallery } from '@widgets/place/location-details/ui/location-hero/location-image-gallery';
import { HotelBasicInfo } from './hotel-basic-info';
import { HotelKeyInfo } from './hotel-key-info';

interface HotelHeroProps {
  title: string;
  badgeLabel: string;
  rating: string;
  commentsCount: string;
  shortAddress: string;
  images: string[];
  pricePerNight: string;
  checkInTime: string;
  checkOutTime: string;
}

export function HotelHero({
  title,
  badgeLabel,
  rating,
  commentsCount,
  shortAddress,
  images,
  pricePerNight,
  checkInTime,
  checkOutTime,
}: HotelHeroProps) {
  return (
    <section className="pb-5 border-b border-dashed border-text-muted-foreground">
      <div className="flex flex-col gap-5">
        <HotelBasicInfo
          title={title}
          badgeLabel={badgeLabel}
          rating={rating}
          commentsCount={commentsCount}
          shortAddress={shortAddress}
        />

        <LocationImageGallery images={images} />

        <HotelKeyInfo
          pricePerNight={pricePerNight}
          checkInTime={checkInTime}
          checkOutTime={checkOutTime}
        />
      </div>
    </section>
  );
}