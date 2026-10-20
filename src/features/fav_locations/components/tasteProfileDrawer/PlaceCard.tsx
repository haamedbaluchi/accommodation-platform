import { HeartIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { LocationIcon } from '@shared/assets/icons';
import { PlaceType } from './types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardImage,
  CardOverlay,
  CardTitle,
} from '@shared/components/ui';

export function PlaceCard({ place }: { place: PlaceType }) {
  return (
    <Card className="w-67.5 h-45">
      <CardImage src={place.imageSrc} alt={place.imageAlt} />
      <CardOverlay />

      <CardHeader>
        <button className="rounded-full bg-black/40 p-1.5 2xl:p-2 backdrop-blur-md">
          <HeartIcon className="h-4 w-4 2xl:h-5 2xl:w-5 text-white" />
        </button>
      </CardHeader>

      <CardContent>
        <CardTitle className="truncate text-right text-lg 2xl:text-2xl">{place.title}</CardTitle>
        <CardDescription className="text-right text-sm 2xl:text-lg text-white/90 flex gap-2">
          <MapPinIcon className="w-4 h-4"/>
          {place.subTitle}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
