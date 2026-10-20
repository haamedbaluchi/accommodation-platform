// 'use client';

// import { useEffect, useRef } from 'react';
// import L from '@neshan-maps-platform/leaflet';

// import type { MapPoint } from '@shared/types/map';

// interface UseNeshanMarkersOptions {
//   mapRef: React.RefObject<L.Map | null>;
//   points: MapPoint[];
// }

// export function useNeshanMarkers({
//   mapRef,
//   points,
// }: UseNeshanMarkersOptions) {
//   const markersRef = useRef<L.Marker[]>([]);

//   useEffect(() => {
//     const map = mapRef.current;

//     if (!map) {
//       return;
//     }

//     markersRef.current.forEach((marker) => {
//       marker.remove();
//     });

//     markersRef.current = [];

//     if (!points.length) {
//       return;
//     }

//     const validPoints = points.filter(
//       (point) =>
//         Number.isFinite(point.lat) &&
//         Number.isFinite(point.lng),
//     );

//     if (!validPoints.length) {
//       return;
//     }

//     validPoints.forEach((point) => {
//       const marker = L.marker([
//         point.lat,
//         point.lng,
//       ])
//         .addTo(map)
//         .bindPopup(`
//           <div style="direction: rtl">
//             <strong>${point.title}</strong>
//             ${
//               point.address
//                 ? `<br />${point.address}`
//                 : ''
//             }
//           </div>
//         `);

//       markersRef.current.push(marker);
//     });

//     const bounds = L.latLngBounds(
//       validPoints.map((point) => [
//         point.lat,
//         point.lng,
//       ]),
//     );

//     map.fitBounds(bounds, {
//       padding: [50, 50],
//     });

//     return () => {
//       markersRef.current.forEach((marker) => {
//         marker.remove();
//       });

//       markersRef.current = [];
//     };
//   }, [mapRef, points]);
// }
// shared/ui/map/hooks/use-neshan-markers.ts
'use client';

import { useEffect, useRef } from 'react';
import L from '@neshan-maps-platform/leaflet';
import type { MapPoint } from '@shared/types/map';

interface UseNeshanMarkersOptions {
  mapRef: React.RefObject<L.Map | null>;
  points: MapPoint[];
}

export function useNeshanMarkers({ mapRef, points }: UseNeshanMarkersOptions) {
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    let cancelled = false;

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    if (!points.length) return;

    const validPoints = points.filter(
      (point) => Number.isFinite(point.lat) && Number.isFinite(point.lng),
    );

    if (!validPoints.length) return;

    // صبر می‌کنیم نقشه واقعاً آماده باشه، و بعدش هم چک می‌کنیم
    // که افکت هنوز زنده‌ست و نقشه هنوز remove نشده
    map.whenReady(() => {
      if (cancelled || !mapRef.current || mapRef.current !== map) return;

      validPoints.forEach((point) => {
        const marker = L.marker([point.lat, point.lng])
          .addTo(map)
          .bindPopup(`
            <div style="direction: rtl">
              <strong>${point.title}</strong>
              ${point.address ? `<br />${point.address}` : ''}
            </div>
          `);
        markersRef.current.push(marker);
      });

      const bounds = L.latLngBounds(validPoints.map((p) => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [50, 50] });
    });

    return () => {
      cancelled = true;
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
    };
  }, [mapRef, points]);
}