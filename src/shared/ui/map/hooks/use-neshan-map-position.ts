// 'use client';

// import { useEffect } from 'react';
// import L from '@neshan-maps-platform/leaflet';

// interface UseNeshanMapPositionOptions {
//   mapRef: React.RefObject<L.Map | null>;
//   markerRef: React.RefObject<L.Marker | null>;
//   lat: number;
//   lng: number;
//   hasPoints: boolean;
// }

// export function useNeshanMapPosition({
//   mapRef,
//   markerRef,
//   lat,
//   lng,
//   hasPoints,
// }: UseNeshanMapPositionOptions) {
//   useEffect(() => {
//     const map = mapRef.current;
//     const marker = markerRef.current;

//     if (!map || !marker || hasPoints) {
//       return;
//     }

//     const position: [number, number] = [
//       lat,
//       lng,
//     ];

//     marker.setLatLng(position);

//     map.setView(
//       position,
//       map.getZoom(),
//       {
//         animate: true,
//       },
//     );
//   }, [
//     lat,
//     lng,
//     hasPoints,
//     mapRef,
//     markerRef,
//   ]);
// }
'use client';

import { useEffect } from 'react';
import L from '@neshan-maps-platform/leaflet';

interface UseNeshanMapPositionOptions {
  mapRef: React.RefObject<L.Map | null>;
  markerRef: React.RefObject<L.Marker | null>;
  lat: number;
  lng: number;
  hasPoints: boolean;
}

export function useNeshanMapPosition({
  mapRef,
  markerRef,
  lat,
  lng,
  hasPoints,
}: UseNeshanMapPositionOptions) {
  useEffect(() => {
    const map = mapRef.current;
    const marker = markerRef.current;

    if (!map || !marker || hasPoints) {
      return;
    }

    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
      console.error('Invalid map position:', {
        lat,
        lng,
      });

      return;
    }

    if (!map.getContainer()?.isConnected) {
      return;
    }

    const position: [number, number] = [lat, lng];

    marker.setLatLng(position);

    map.setView(position, map.getZoom(), {
      animate: true,
    });
  }, [lat, lng, hasPoints, mapRef, markerRef]);
}