import { HeartIcon, MapPinIcon } from '@heroicons/react/24/outline';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardImage,
  CardOverlay,
  CardTag,
  CardTags,
  CardTitle,
} from '@shared/ui';
import { PlaceType } from './types';

export function CafeCard({ place }: { place: PlaceType }) {
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
        <CardTitle className="truncate text-right text-xl 2xl:text-2xl">
          {place.title}
        </CardTitle>
        <CardDescription className="flex gap-1 text-right text-sm 2xl:text-lg text-white/90">
          <MapPinIcon className="w-4 h-4"/>
          {place.subTitle}
        </CardDescription>
        <CardTags className='mt-1'>
          {place.tags?.map((tag, index) => (
            <CardTag key={`${tag}--${index}`}>{tag}</CardTag>
          ))}
        </CardTags>
      </CardContent>
    </Card>
  );
}
