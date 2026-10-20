
'use client';

import dynamic from 'next/dynamic';
import { Loader } from '@shared/ui';
import type { MapPoint } from '@shared/types/map';

const Map = dynamic(() => import('@shared/ui/map').then((mod) => mod.Map), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <Loader size={7} />
    </div>
  ),
});

interface ContextMapViewProps {
  points: MapPoint[];
}

export function ContextMapView({ points }: ContextMapViewProps) {
  const center = points[0] ?? { lat: 35.6892, lng: 51.389 };

  return (
    <div className="relative h-full w-full overflow-hidden rounded-r-3xl">
      <Map
        lat={center.lat}
        lng={center.lng}
        zoom={12}
        points={points}
        readonly
        className="h-full w-full"
      />
    </div>
  );
}