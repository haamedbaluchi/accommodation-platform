'use client';

import { useEffect, useMemo, useState } from 'react';

import { useTripAttractionsStore } from '@entities/trip/attraction';

import type { Coordinates } from '@shared/types/geo';
import type { MapPoint } from '@shared/types/map';

const DEFAULT_COORDS: Coordinates = {
  lat: 35.699756,
  lng: 51.338076,
};

export function useTripMap() {
  const attractions = useTripAttractionsStore((state) => state.attractions);

  const mapPoints = useMemo<MapPoint[]>(() => {
    return attractions.map((attraction) => ({
      id: attraction.id,

      title: attraction.title,

      lat: attraction.coordinates.lat,

      lng: attraction.coordinates.lng,

      address: attraction.shortAddress,

      category: attraction.category,

      imageUrl: attraction.imageUrl,
    }));
  }, [attractions]);

  const initialCoords = mapPoints[0]
    ? {
        lat: mapPoints[0].lat,
        lng: mapPoints[0].lng,
      }
    : DEFAULT_COORDS;

  const [coords, setCoords] = useState<Coordinates>(initialCoords);

  useEffect(() => {
    if (!mapPoints.length) {
      return;
    }

    setCoords({
      lat: mapPoints[0].lat,
      lng: mapPoints[0].lng,
    });
  }, [mapPoints]);

  return {
    mapPoints,

    coords,

    setCoords,
  };
}
