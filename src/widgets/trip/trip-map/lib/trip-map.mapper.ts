// import { MapPoint } from "@shared/types/map";


// function pickFirstString(...values: unknown[]): string | undefined {
//   for (const value of values) {
//     if (typeof value === 'string' && value.trim()) {
//       return value.trim();
//     }

//     if (typeof value === 'number' && !Number.isNaN(value)) {
//       return String(value);
//     }
//   }

//   return undefined;
// }

// export function mapMapContextToMapPoints(
//   mapContext: any,
// ): MapPoint[] {
//   const places = mapContext?.places;

//   if (!Array.isArray(places)) {
//     return [];
//   }

//   return places
//     .filter(
//       (place: any) =>
//         typeof place?.lat === 'number' &&
//         typeof place?.lng === 'number',
//     )
//     .map((place: any, index: number) => ({
//       id: String(
//         place.id ??
//           place.place_id ??
//           `point-${index}`,
//       ),

//       title:
//         place.name ??
//         place.title ??
//         'مکان بدون نام',

//       lat: place.lat,
//       lng: place.lng,

//       address:
//         place.formatted_address ??
//         place.address ??
//         '',

//       category:
//         place.type ??
//         place.category,

//       imageUrl: null,
//     }));
// }
// function pickFirstNumber(...values: unknown[]): number | undefined {
//   for (const value of values) {
//     if (typeof value === 'number' && !Number.isNaN(value)) {
//       return value;
//     }

//     if (typeof value === 'string' && value.trim()) {
//       const parsed = Number(value);
//       if (!Number.isNaN(parsed)) {
//         return parsed;
//       }
//     }
//   }

//   return undefined;
// }

// function normalizeResearchData(researchData: unknown): any[] {
//   if (Array.isArray(researchData)) {
//     return researchData;
//   }

//   if (Array.isArray((researchData as any)?.items)) {
//     return (researchData as any).items;
//   }

//   if (Array.isArray((researchData as any)?.places)) {
//     return (researchData as any).places;
//   }

//   if (Array.isArray((researchData as any)?.attractions)) {
//     return (researchData as any).attractions;
//   }

//   if (Array.isArray((researchData as any)?.hotels)) {
//     return (researchData as any).hotels;
//   }

//   if (Array.isArray((researchData as any)?.results)) {
//     return (researchData as any).results;
//   }

//   if (Array.isArray((researchData as any)?.data)) {
//     return (researchData as any).data;
//   }

//   return [];
// }

// function extractLatLng(item: any): { lat: number; lng: number } | undefined {
//   const lat = pickFirstNumber(
//     item?.lat,
//     item?.latitude,
//     item?.coordinates?.lat,
//     item?.coordinates?.latitude,
//     item?.coords?.lat,
//     item?.coords?.latitude,
//     item?.location?.lat,
//     item?.location?.latitude,
//     item?.geometry?.location?.lat,
//     item?.position?.lat,
//   );

//   const lng = pickFirstNumber(
//     item?.lng,
//     item?.lon,
//     item?.long,
//     item?.longitude,
//     item?.coordinates?.lng,
//     item?.coordinates?.lon,
//     item?.coordinates?.long,
//     item?.coordinates?.longitude,
//     item?.coords?.lng,
//     item?.coords?.lon,
//     item?.coords?.long,
//     item?.coords?.longitude,
//     item?.location?.lng,
//     item?.location?.lon,
//     item?.location?.long,
//     item?.location?.longitude,
//     item?.geometry?.location?.lng,
//     item?.geometry?.location?.lon,
//     item?.geometry?.location?.longitude,
//     item?.position?.lng,
//   );

//   if (typeof lat !== 'number' || typeof lng !== 'number') {
//     return undefined;
//   }

//   return { lat, lng };
// }

// function extractImageUrl(item: any): string | null {
//   return (
//     pickFirstString(
//       item?.imageUrl,
//       item?.image_url,
//       item?.image,
//       item?.photo,
//       item?.thumbnail,
//       item?.photos?.[0],
//       item?.images?.[0],
//       item?.gallery?.[0],
//     ) ?? null
//   );
// }

// function mapItemToMapPoint(item: any, index: number): MapPoint | undefined {
//   const coords = extractLatLng(item);

//   if (!coords) {
//     return undefined;
//   }

//   return {
//     id: String(
//       item?.id ??
//         item?.place_id ??
//         item?.slug ??
//         item?.name ??
//         item?.title ??
//         `map-point-${index}`,
//     ),
//     title:
//       pickFirstString(
//         item?.title,
//         item?.name,
//         item?.place_name,
//         item?.destination,
//       ) ?? 'مکان بدون نام',
//     lat: coords.lat,
//     lng: coords.lng,
//     address: pickFirstString(
//       item?.address,
//       item?.shortAddress,
//       item?.short_address,
//       item?.formatted_address,
//       item?.vicinity,
//     ),
//     category: pickFirstString(
//       item?.category,
//       item?.type,
//       item?.tag,
//       item?.place_type,
//     ),
//     imageUrl: extractImageUrl(item),
//   };
// }

// export function mapResearchDataToMapPoints(researchData: unknown): MapPoint[] {
//   const normalizedResearchData = normalizeResearchData(researchData);

//   return normalizedResearchData
//     .map((item, index) => mapItemToMapPoint(item, index))
//     .filter((item): item is MapPoint => Boolean(item));
// }
