// shared/ui/map/hooks/useNeshanMap.ts
'use client';

import { useEffect, useRef } from 'react';
import L from '@neshan-maps-platform/leaflet';

import type { Coordinates } from '@shared/types/geo';

interface UseNeshanMapOptions extends Coordinates {
  zoom: number;
  readonly: boolean;
  onChange?: (coords: Coordinates) => void;
}

export function useNeshanMap({
  lat,
  lng,
  zoom,
  readonly,
  onChange,
}: UseNeshanMapOptions) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    // const container = containerRef.current;

    // if (!container || mapRef.current) {
    //   return;
    // }

    // const key = process.env.NEXT_PUBLIC_NESHAN_MAP_KEY;

    // if (!key) {
    //   console.error('Neshan map key is missing.');
    //   return;
    // }

    // const map = new L.Map(container, {
    //   key,
    //   maptype: 'dreamy',
    //   center: [lat, lng],
    //   zoom,
    //   zoomControl: false,
    // });
    const container = containerRef.current;

    if (!container || mapRef.current || !container.isConnected) {
      return;
    }

    const key = process.env.NEXT_PUBLIC_NESHAN_MAP_KEY;
    if (!key) {
      console.error('Neshan map key is missing.');
      return;
    }

    let map: L.Map;
    try {
      map = new L.Map(container, {
        key,
        maptype: 'dreamy',
        center: [lat, lng],
        zoom,
        zoomControl: false,
      });
    } catch (error) {
      // اگه به هر دلیلی (مثلاً race condition داخل خود لایبرری) ساخت نقشه شکست خورد،
      // کل صفحه رو کرش نده، فقط لاگ کن
      console.error('Failed to initialize map:', error);
      return;
    }
    mapRef.current = map;

    if (!readonly) {
      map.on('click', (event) => {
        const coords = {
          lat: event.latlng.lat,
          lng: event.latlng.lng,
        };

        markerRef.current?.setLatLng([coords.lat, coords.lng]);

        onChangeRef.current?.(coords);
      });
    }

    const resizeObserver = new ResizeObserver(() => {
      // اگه بین trigger شدن observer و اجرای callback نقشه remove شده باشه،
      // mapRef.current دیگه برابر map نیست پس از invalidateSize روی نقشه‌ی مرده جلوگیری می‌کنیم
      if (mapRef.current === map) {
        map.invalidateSize();
      }
    });

    resizeObserver.observe(container);

    const rafId = requestAnimationFrame(() => {
      // همون محافظت: قبل از remount/unmount سریع، این callback نباید
      // روی نقشه‌ای که دیگه وجود نداره invalidateSize صدا بزنه
      if (mapRef.current === map) {
        map.invalidateSize();
      }
    });

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();

      markerRef.current?.remove();
      markerRef.current = null;

      map.remove();
      mapRef.current = null;
    };
  }, [lat, lng, readonly, zoom]);

  return {
    containerRef,
    mapRef,
    markerRef,
  };
}
