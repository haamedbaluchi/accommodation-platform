import { DailyItinerary, ItineraryItem, RouteSegment, TripPlan } from "@entities/trip";
import { Coordinates } from "@shared/types/geo";


function pickFirstString(...values: unknown[]): string | undefined {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }

    if (typeof value === 'number' && !Number.isNaN(value)) {
      return String(value);
    }
  }

  return undefined;
}

function pickFirstNumber(...values: unknown[]): number | undefined {
  for (const value of values) {
    if (typeof value === 'number' && !Number.isNaN(value)) {
      return value;
    }

    if (typeof value === 'string' && value.trim()) {
      const parsed = Number(value);
      if (!Number.isNaN(parsed)) {
        return parsed;
      }
    }
  }

  return undefined;
}

function pickStringArray(...values: unknown[]): string[] | undefined {
  for (const value of values) {
    if (!Array.isArray(value)) {
      continue;
    }

    const normalized = value
      .filter((item): item is string => typeof item === 'string')
      .map((item) => item.trim())
      .filter(Boolean);

    if (normalized.length > 0) {
      return normalized;
    }
  }

  return undefined;
}

function normalizeResearchData(researchData: unknown): any[] {
  if (Array.isArray(researchData)) {
    return researchData;
  }

  if (Array.isArray((researchData as any)?.items)) {
    return (researchData as any).items;
  }

  if (Array.isArray((researchData as any)?.places)) {
    return (researchData as any).places;
  }

  if (Array.isArray((researchData as any)?.results)) {
    return (researchData as any).results;
  }

  if (Array.isArray((researchData as any)?.data)) {
    return (researchData as any).data;
  }

  return [];
}

function normalizeCoordinates(raw: any): Coordinates | undefined {
  const lat = pickFirstNumber(
    raw?.coordinates?.lat,
    raw?.coordinates?.latitude,
    raw?.coords?.lat,
    raw?.coords?.latitude,
    raw?.location?.lat,
    raw?.location?.latitude,
    raw?.lat,
    raw?.latitude,
  );

  const lng = pickFirstNumber(
    raw?.coordinates?.lng,
    raw?.coordinates?.lon,
    raw?.coordinates?.long,
    raw?.coordinates?.longitude,
    raw?.coords?.lng,
    raw?.coords?.lon,
    raw?.coords?.long,
    raw?.coords?.longitude,
    raw?.location?.lng,
    raw?.location?.lon,
    raw?.location?.long,
    raw?.location?.longitude,
    raw?.lng,
    raw?.lon,
    raw?.long,
    raw?.longitude,
  );

  if (typeof lat === 'number' && typeof lng === 'number') {
    return { lat, lng };
  }

  return undefined;
}


// function normalizeTransit(raw: any): RouteSegment | undefined {
//   if (!raw) {
//     return undefined;
//   }

//   const distance = pickFirstString(
//     raw?.distance,
//     raw?.distanceText,
//     raw?.distance_text,
//     raw?.distance_to_next_km ? `${raw.distance_to_next_km} کیلومتر` : undefined,
//   );

//   const duration = pickFirstString(
//     raw?.duration,
//     raw?.durationText,
//     raw?.duration_text,
//     raw?.time,
//     raw?.travel_time_to_next_min
//       ? `${raw.travel_time_to_next_min} دقیقه`
//       : undefined,
//   );

//   const mode =
//     raw?.mode === 'car' ||
//     raw?.mode === 'walk' ||
//     raw?.mode === 'public_transit'
//       ? raw.mode
//       : undefined;

//   if (!distance && !duration && !mode) {
//     return undefined;
//   }

//   return {
//     distance,
//     duration,
//     mode,
//   };
// }

function normalizeTransit(raw: any): RouteSegment | undefined {
  if (!raw) {
    return undefined;
  }

  const distanceKm = pickFirstNumber(
    raw?.distance_to_next_km,
    raw?.distanceToNextKm,
  );

  const travelMinutes = pickFirstNumber(
    raw?.travel_time_to_next_min,
    raw?.travelTimeToNextMin,
  );

  const distance =
    distanceKm !== undefined
      ? `${distanceKm} کیلومتر`
      : pickFirstString(
          raw?.distance,
          raw?.distanceText,
          raw?.distance_text,
        );

  const duration =
    travelMinutes !== undefined
      ? `${travelMinutes} دقیقه`
      : pickFirstString(
          raw?.duration,
          raw?.durationText,
          raw?.duration_text,
        );

  const mode =
    raw?.mode === 'car' ||
    raw?.mode === 'walk' ||
    raw?.mode === 'public_transit'
      ? raw.mode
      : undefined;

  if (!distance && !duration && !mode) {
    return undefined;
  }

  return {
    distance,
    duration,
    mode,
  };
}
function normalizeTextKey(value: unknown): string | undefined {
  if (typeof value !== 'string') {
    return undefined;
  }

  const normalized = value.trim().toLowerCase();
  return normalized || undefined;
}

function findResearchMatch(place: any, researchData?: unknown) {
  const normalizedResearch = normalizeResearchData(researchData);

  if (normalizedResearch.length === 0) {
    return undefined;
  }

  const placeKey = normalizeTextKey(
    pickFirstString(
      place?.title,
      place?.name,
      place?.place_name,
      place?.destination,
    ),
  );

  if (!placeKey) {
    return undefined;
  }

  return normalizedResearch.find((item) => {
    const researchKey = normalizeTextKey(
      pickFirstString(
        item?.title,
        item?.name,
        item?.place_name,
        item?.destination,
      ),
    );

    return researchKey === placeKey;
  });
}

function mergePlaceWithResearch(place: any, researchItem: any) {
  if (!researchItem) {
    return place;
  }

  return {
    ...researchItem,
    ...place,

    rating: place?.rating ?? researchItem?.rating,

    commentsCount:
      place?.commentsCount ??
      place?.reviewCount ??
      place?.reviews_count ??
      place?.reviews ??
      researchItem?.commentsCount ??
      researchItem?.reviewCount ??
      researchItem?.reviews_count ??
      researchItem?.reviews,

    shortAddress:
      place?.shortAddress ??
      place?.address ??
      place?.vicinity ??
      researchItem?.shortAddress ??
      researchItem?.address ??
      researchItem?.vicinity,

    fullAddress:
      place?.fullAddress ??
      place?.formatted_address ??
      place?.address_full ??
      researchItem?.fullAddress ??
      researchItem?.formatted_address ??
      researchItem?.address_full,

    suggestedVisitTime:
      place?.suggestedVisitTime ??
      place?.visitDuration ??
      place?.duration ??
      researchItem?.suggestedVisitTime ??
      researchItem?.visitDuration ??
      researchItem?.duration,

    admissionFee:
      place?.admissionFee ??
      place?.ticketPrice ??
      place?.ticket_price ??
      place?.entry_fee ??
      researchItem?.admissionFee ??
      researchItem?.ticketPrice ??
      researchItem?.ticket_price ??
      researchItem?.entry_fee,

    locationSummary:
      place?.locationSummary ??
      place?.summary ??
      place?.description ??
      place?.editorial_summary ??
      researchItem?.locationSummary ??
      researchItem?.summary ??
      researchItem?.description ??
      researchItem?.editorial_summary,

    openingHours:
      place?.openingHours ??
      place?.hours ??
      place?.workingHours ??
      place?.opening_hours ??
      researchItem?.openingHours ??
      researchItem?.hours ??
      researchItem?.workingHours ??
      researchItem?.opening_hours,

    statusNow:
      place?.statusNow ??
      place?.open_now ??
      researchItem?.statusNow ??
      researchItem?.open_now,

    openStatus:
      place?.openStatus ??
      place?.open_now ??
      researchItem?.openStatus ??
      researchItem?.open_now,

    images:
      place?.images ??
      place?.photos ??
      place?.gallery ??
      researchItem?.images ??
      researchItem?.photos ??
      researchItem?.gallery,

    coordinates:
      place?.coordinates ??
      place?.coords ??
      place?.location ??
      researchItem?.coordinates ??
      researchItem?.coords ??
      researchItem?.location,
  };
}

function mapPlaceToItineraryItem(place: any, index: number): ItineraryItem{
  const images =
    pickStringArray(
      place?.images,
      place?.photos,
      place?.gallery,
      place?.media?.images,
      place?.image_urls,
    ) ?? [];

  const imageUrl =
    pickFirstString(
      place?.imageUrl,
      place?.image_url,
      place?.image,
      place?.photo,
      place?.thumbnail,
      images[0],
    ) ?? null;

  const openingHours = Array.isArray(place?.opening_hours?.weekday_text)
    ? place.opening_hours.weekday_text.join(' | ')
    : pickFirstString(
        place?.openingHours,
        place?.hours,
        place?.workingHours,
        place?.opening_hours,
      );

  return {
    id: String(
      place?.id ??
        place?.place_id ??
        place?.slug ??
        place?.name ??
        place?.title ??
        `place-${index}`,
    ),

    title:
      pickFirstString(
        place?.title,
        place?.name,
        place?.place_name,
        place?.destination,
      ) ?? 'مقصد بدون نام',

    imageUrl,

    imageAlt:
      pickFirstString(
        place?.imageAlt,
        place?.image_alt,
        place?.title,
        place?.name,
      ) ?? 'تصویر مقصد',

    images: images.length > 0 ? images : imageUrl ? [imageUrl] : undefined,

    category: pickFirstString(
      place?.category,
      place?.type,
      place?.tag,
      place?.place_type,
    ),

    visitDuration:
      pickFirstString(
        place?.visitDuration,
        place?.suggestedVisitTime,
        place?.duration,
        place?.length_of_visit,
        place?.visit_time,
      ) ??
      (typeof place?.duration_hours === 'number'
        ? `${place.duration_hours} ساعت`
        : undefined),

    startTime: pickFirstString(
      place?.startTime,
      place?.start_time,
      place?.from,
      place?.time?.start,
      place?.time,
    ),

    endTime: pickFirstString(
      place?.endTime,
      place?.end_time,
      place?.to,
      place?.time?.end,
    ),

    estimatedCost: pickFirstNumber(place?.estimatedCost, place?.estimated_cost),

    notes: pickFirstString(place?.notes, place?.description),

    isAttraction:
  typeof place?.isAttraction === 'boolean'
    ? place.isAttraction
    : typeof place?.is_attraction === 'boolean'
      ? place.is_attraction
      : place?.isAttraction === 'true' || place?.is_attraction === 'true'
        ? true
        : place?.isAttraction === 'false' || place?.is_attraction === 'false'
          ? false
          : undefined,


    rating: pickFirstString(place?.rating),

    commentsCount: pickFirstString(
      place?.commentsCount,
      place?.reviewCount,
      place?.reviews_count,
      place?.reviews,
    ),

    shortAddress: pickFirstString(
      place?.shortAddress,
      place?.short_address,
      place?.address,
      place?.vicinity,
      place?.location,
      place?.location?.short_address,
    ),

    fullAddress: pickFirstString(
      place?.fullAddress,
      place?.full_address,
      place?.formatted_address,
      place?.address_full,
      place?.location?.full_address,
    ),

    suggestedVisitTime: pickFirstString(
      place?.suggestedVisitTime,
      place?.suggested_visit_time,
      place?.visitDuration,
      place?.duration,
    ),

    admissionFee: pickFirstString(
      place?.admissionFee,
      place?.admission_fee,
      place?.ticketPrice,
      place?.ticket_price,
      place?.entry_fee,
    ),

    // locationSummary: pickFirstString(
    //   place?.locationSummary,
    //   place?.location_summary,
    //   place?.summary,
    //   place?.description,
    //   place?.editorial_summary,
    // ),
    locationSummary: pickFirstString(
      place?.locationSummary,
      place?.location_summary,
      place?.overview,
      place?.summary,
      place?.description,
      place?.editorial_summary,
    ),

    mapLink: pickFirstString(place?.mapLink, place?.map_link),

    transitToNext:
      normalizeTransit(
        place?.transitToNext ?? place?.transit_to_next ?? place?.next_leg,
      ) ?? normalizeTransit(place),

    openingHours,

    statusNow:
      typeof place?.statusNow === 'boolean'
        ? place.statusNow
        : typeof place?.status_now === 'boolean'
          ? place.status_now
          : typeof place?.open_now === 'boolean'
            ? place.open_now
            : undefined,

    openStatus:
      typeof place?.openStatus === 'boolean'
        ? place.openStatus
        : typeof place?.open_status === 'boolean'
          ? place.open_status
          : typeof place?.open_now === 'boolean'
            ? place.open_now
            : undefined,

    coordinates: normalizeCoordinates(place),

    // transitToNext: normalizeTransit(
    //   place?.transitToNext ?? place?.transit_to_next ?? place?.next_leg,
    // ),
  };
}
export function mapDayToDailyItinerary(
  day: any,
  dayIndex: number,
  researchData?: unknown,
): DailyItinerary {
  const rawItems = Array.isArray(day?.items)
    ? day.items
    : Array.isArray(day?.activities)
      ? day.activities
      : Array.isArray(day?.places)
        ? day.places
        : Array.isArray(day?.destinations)
          ? day.destinations
          : [];

  const items = rawItems.map((place: any, index: number) => {
    const researchMatch = findResearchMatch(place, researchData);
    const mergedPlace = mergePlaceWithResearch(place, researchMatch);

    return mapPlaceToItineraryItem(mergedPlace, index);
  });

  return {
    id: String(day?.id ?? `day-${dayIndex}`),

    dayNumber: Number(
      day?.dayNumber ?? day?.day_number ?? day?.day ?? dayIndex + 1,
    ),

    title: pickFirstString(day?.title, day?.theme, day?.label, day?.summary),

    date: pickFirstString(day?.date),

    dailyCost: pickFirstNumber(day?.dailyCost, day?.daily_cost),

    activities: items,
  };
}

export function mapStructuredToTripPlan(
  structured: any,
  researchData?: unknown,
): TripPlan {
  const rawDays = Array.isArray(structured?.days)
    ? structured.days
    : Array.isArray(structured?.itinerary)
      ? structured.itinerary
      : Array.isArray(structured?.dailyItinerary)
        ? structured.dailyItinerary
        : Array.isArray(structured?.daily_itinerary)
          ? structured.daily_itinerary
          : Array.isArray(structured)
            ? structured
            : [];

  const days = rawDays.map((day: any, index: number) =>
    mapDayToDailyItinerary(day, index, researchData),
  );

  return {
    days,
    totalDays: days.length,
  };
}
