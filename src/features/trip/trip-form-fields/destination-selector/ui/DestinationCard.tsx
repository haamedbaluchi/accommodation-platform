import { TouristDestination } from '@entities/destination';
import { PlusIcon, RoadLocation } from '@shared/assets/icons';
import { Button } from '@shared/ui';
import Image from 'next/image';

export function DestinationCard({
  destination,
  onAdd,
}: {
  destination: TouristDestination;
  onAdd: () => void;
}) {
  const backendBaseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const imageUrl = destination?.image?.image_url
    ? `${backendBaseUrl}${destination.image.image_url}`
    : '/images/masjed_shakh.svg';

  const imageAlt =
    destination?.image?.image_alt || destination?.city_name || 'destination';
  return (
    <div className="flex flex-col gap-1 sm:gap-2 shrink-0">
      <div className="relative w-full rounded-lg overflow-hidden">
        <div className="relative w-25 h-25 sm:w-30 sm:h-30 md:w-40 md:h-40">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <Button
          variant="secondary"
          rounded="full"
          leftIcon={<PlusIcon className="w-2 h-2" />}
          className="text-[0.5rem] gap-1 px-1 sm:px-2 h-5 absolute top-1.5 right-1.5"
          onClick={onAdd}
        >
          افزودن
        </Button>
      </div>
      <div className="flex flex-col sm:px-2 text-text-foreground">
        <div className="flex justify-between items-center font-yekta text-text-main">
          <h4 className="font-black text-xs sm:text-sm">
            {destination?.city_name}
          </h4>
          <div className="flex items-center gap-1 text-[0.625rem] sm:text-xs font-bold">
            <span>
              {destination?.distance ?? '200 km'}
              {destination?.distanceUnit}
            </span>
            <RoadLocation className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        </div>
        <span className="text-[0.625rem] sm:text-xs font-medium">
          {destination?.province},{destination?.country}
        </span>
      </div>
    </div>
  );
}
