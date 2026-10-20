// 'use client';

// import dynamic from 'next/dynamic';
// import { useMemo } from 'react';
// import { iranProvincesWithGeo } from '@shared/constants';
// import { useExploreToolbarStore } from '@views/explore-page/model/explore-toolbar-store';
// import { findNearestProvince } from '@shared/lib/geo-location';

// const Map = dynamic(() => import('@shared/ui/map').then((mod) => mod.Map), {
//   ssr: false,
// });

// const IRAN_CENTER = { lat: 32.4279, lng: 53.688 };

// export function ExploreMap() {
//   const selectedProvinceId = useExploreToolbarStore(
//     (s) => s.selectedProvinceId,
//   );
//   const setSelectedProvinceId = useExploreToolbarStore(
//     (s) => s.setSelectedProvinceId,
//   );

//   const center = useMemo(() => {
//     const province = iranProvincesWithGeo.find(
//       (p) => p.id === selectedProvinceId,
//     );
//     return province ? { lat: province.lat, lng: province.lng } : IRAN_CENTER;
//   }, [selectedProvinceId]);

//   return (
//     <div className="relative h-full w-full overflow-hidden rounded-r-3xl">
//       <Map
//         lat={center.lat}
//         lng={center.lng}
//         zoom={selectedProvinceId ? 9 : 5}
//         readonly={false}
//         onChange={(coords) => {
//           const nearest = findNearestProvince(coords, iranProvincesWithGeo);
//           if (nearest) {
//             setSelectedProvinceId(nearest.id);
//             useExploreToolbarStore.getState().setSearch(''); // پاک کردن متن سرچ قبلی
//           }
//         }}
//         // onChange={(coords) => {
//         //   const nearest = findNearestProvince(coords, iranProvincesWithGeo);

//         //   if (!nearest) return;

//         //   const currentProvinceId =
//         //     useExploreToolbarStore.getState().selectedProvinceId;

//         //   if (currentProvinceId === nearest.id) {
//         //     return;
//         //   }

//         //   setSelectedProvinceId(nearest.id);

//         //   useExploreToolbarStore.getState().setSearch('');
//         // }}
//         className="h-full w-full"
//       />
//     </div>
//   );
// }
'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

import { iranProvincesWithGeo } from '@shared/constants';
import { useExploreToolbarStore } from '@views/explore-page/model/explore-toolbar-store';
import { findNearestProvince } from '@shared/lib/geo-location';

const Map = dynamic(
  () => import('@shared/ui/map').then((mod) => mod.Map),
  {
    ssr: false,
  },
);

const IRAN_CENTER = {
  lat: 32.4279,
  lng: 53.688,
};

export function ExploreMap() {
  const selectedProvinceId = useExploreToolbarStore(
    (s) => s.selectedProvinceId,
  );

  const setSelectedProvinceId = useExploreToolbarStore(
    (s) => s.setSelectedProvinceId,
  );

  const setSearch = useExploreToolbarStore(
    (s) => s.setSearch,
  );

  const center = useMemo(() => {
    const province = iranProvincesWithGeo.find(
      (p) => p.id === selectedProvinceId,
    );

    if (
      province &&
      Number.isFinite(province.lat) &&
      Number.isFinite(province.lng)
    ) {
      return {
        lat: province.lat,
        lng: province.lng,
      };
    }

    return IRAN_CENTER;
  }, [selectedProvinceId]);

  const handleMapChange = (coords: {
    lat: number;
    lng: number;
  }) => {
    if (
      !Number.isFinite(coords.lat) ||
      !Number.isFinite(coords.lng)
    ) {
      return;
    }

    const nearest = findNearestProvince(
      coords,
      iranProvincesWithGeo,
    );

    if (!nearest) {
      return;
    }

    const currentProvinceId =
      useExploreToolbarStore.getState().selectedProvinceId;

    // اگر استان تغییر نکرده، هیچ state update نکن
    if (currentProvinceId === nearest.id) {
      return;
    }

    setSelectedProvinceId(nearest.id);
    setSearch('');
  };

  return (
    <div className="relative h-full w-full overflow-hidden rounded-r-3xl">
      <Map
        lat={center.lat}
        lng={center.lng}
        zoom={selectedProvinceId ? 9 : 5}
        readonly={false}
        onChange={handleMapChange}
        className="h-full w-full"
      />
    </div>
  );
}