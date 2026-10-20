// 'use client';

// import { useEffect, useRef } from 'react';
// import L from '@neshan-maps-platform/leaflet';

// interface UseNeshanFlyToOptions {
//   mapRef: React.RefObject<L.Map | null>;
//   lat: number;
//   lng: number;
//   zoom: number;
//   hasPoints: boolean;
// }

// export function useNeshanFlyTo({
//   mapRef,
//   lat,
//   lng,
//   zoom,
//   hasPoints,
// }: UseNeshanFlyToOptions) {
//   // مقدار اول رو skip می‌کنیم چون همون موقع ساخت نقشه ست شده
//   const isFirstRun = useRef(true);

//   useEffect(() => {
//     const map = mapRef.current;

//     if (!map || hasPoints) {
//       return;
//     }

//     if (isFirstRun.current) {
//       isFirstRun.current = false;
//       return;
//     }

//     map.flyTo([lat, lng], zoom, {
//       animate: true,
//       duration: 1.2, // ثانیه — می‌تونی کمتر/بیشترش کنی
//       easeLinearity: 0.25,
//     });
//   }, [lat, lng, zoom, hasPoints, mapRef]);
// }
'use client';

import { useEffect, useRef } from 'react';
import L from '@neshan-maps-platform/leaflet';

interface UseNeshanFlyToOptions {
  mapRef: React.RefObject<L.Map | null>;
  lat: number;
  lng: number;
  zoom: number;
  hasPoints: boolean;
}

export function useNeshanFlyTo({
  mapRef,
  lat,
  lng,
  zoom,
  hasPoints,
}: UseNeshanFlyToOptions) {
  const isFirstRun = useRef(true);

  useEffect(() => {
    const map = mapRef.current;

    if (!map || hasPoints) {
      return;
    }

    if (
      !Number.isFinite(lat) ||
      !Number.isFinite(lng) ||
      !Number.isFinite(zoom)
    ) {
      console.error('Invalid flyTo coordinates:', {
        lat,
        lng,
        zoom,
      });

      return;
    }

    if (!map.getContainer()?.isConnected) {
      return;
    }

    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    map.flyTo([lat, lng], zoom, {
      animate: true,
      duration: 1.2,
      easeLinearity: 0.25,
    });
  }, [lat, lng, zoom, hasPoints, mapRef]);
}