import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardImage,
  CardOverlay,
  CardTitle,
} from '@shared/components/ui';
import { HeartIcon } from '@heroicons/react/24/outline';
import { PlaceType } from './types';

export function CityCard({ place }: { place: PlaceType }) {
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
        <CardTitle className="truncate text-right text-xl 2xl:text-2xl mb-">{place.title}</CardTitle>
        <CardDescription className="text-right text-sm 2xl:text-lg text-white/90">
          {place.subTitle}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
