// entities/tourist-place/lib/mapper.ts
import { LocationDetailsData } from '@widgets/place/location-details/model/types';
import type { TouristPlaceAiDetails, TouristPlacePoi } from '../model/types';
function extractOpeningHoursText(
  openingHours: TouristPlacePoi['opening_hours'],
): string | undefined {
  if (!openingHours) return undefined;
  if (typeof openingHours === 'string') return openingHours;
  return openingHours.raw ?? openingHours.weekday_text?.join('، ');
}


export function mapTouristPlaceToLocationDetails(
  details: TouristPlaceAiDetails,
): LocationDetailsData {
  const { poi, card } = details;

  return {
    title: poi.name,
    category: poi.category ?? poi.tags[0],
    rating: poi.rating != null ? String(poi.rating) : undefined,
    commentsCount: poi.ratings_total ? String(poi.ratings_total) : undefined,
    shortAddress: poi.address ?? `${poi.city}، ${poi.province}`,
    fullAddress: poi.address ?? `${poi.city}، ${poi.province}`,
    suggestedVisitTime: poi.duration_hours
      ? `حدود ${poi.duration_hours} ساعت`
      : undefined,
    // NOTE: بکند فیلد باز/بسته بودن نمی‌ده — از fallback پیش‌فرض کامپوننت استفاده میشه
    admissionFee:
      poi.entry_fee_irr != null
        ? `${poi.entry_fee_irr.toLocaleString('fa-IR')} تومان`
        : 'رایگان یا نامشخص',
    images: poi.images.length ? poi.images : [card.image_url],
    locationSummary: poi.description || poi.ai_description || poi.summary,
    openingHours: extractOpeningHoursText(poi.opening_hours),
    mapLink: `https://www.google.com/maps?q=${poi.lat},${poi.lng}`,
    coordinates: { lat: poi.lat, lng: poi.lng },
  };
}