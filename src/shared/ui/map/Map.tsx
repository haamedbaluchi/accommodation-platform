'use client';



import { useNeshanFlyTo } from './hooks/use-neshan-fly-to';
import { useNeshanMap } from './hooks/use-neshan-map';
import { useNeshanMapPosition } from './hooks/use-neshan-map-position';
import { useNeshanMarkers } from './hooks/use-neshan-markers';
import type { MapProps } from './types';

export function Map({
  lat,
  lng,
  points = [],
  readonly = true,
  zoom = 13,
  className,
  onChange,
}: MapProps) {
  const { containerRef, mapRef, markerRef } = useNeshanMap({
    lat,
    lng,
    zoom,
    readonly,
    onChange,
  });

  useNeshanMarkers({
    mapRef,
    points,
  });

  useNeshanMapPosition({
    mapRef,
    markerRef,
    lat,
    lng,
    hasPoints: points.length > 0,
  });

  useNeshanFlyTo({
    mapRef,
    lat,
    lng,
    zoom,
    hasPoints: points.length > 0,
  });

  return <div ref={containerRef} className={className} />;
}