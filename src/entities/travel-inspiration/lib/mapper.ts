import { mockDetail } from '@widgets/inspiration/detail/detail-content/model/mock-data';
import type {
  DestinationExperience,
  Inspiration,
  InspirationAuthor,
  InspirationDay,
  InspirationDetails,
  InspirationPlace,
} from '../model/types';
import type {
  InspirationHeroData,
  InspirationWhySectionData,
  ItineraryDayType,
  ItineraryStop,
  ItineraryStopTag,
  Traveler,
} from '../model/types';
import { mockTraveler } from '@widgets/inspiration/detail/detail-content/model/mock-traveler-data';

const DAY_LABELS = [
  'اول',
  'دوم',
  'سوم',
  'چهارم',
  'پنجم',
  'ششم',
  'هفتم',
  'هشتم',
  'نهم',
  'دهم',
];

export function getDayLabel(dayNumber: number) {
  return `روز ${DAY_LABELS[dayNumber - 1] ?? dayNumber}`;
}

export function formatPersianDate(isoDate: string) {
  return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'long' }).format(
    new Date(isoDate),
  );
}

export function mapTagsToItineraryTags(
  tags: string[] = [],
): ItineraryStopTag[] {
  return tags.map((label, index) => ({ id: `${label}-${index}`, label }));
}
// entities/travel-inspiration/lib/mapper.ts — mapPlaceToItineraryStop رو آپدیت کن
export function mapPlaceToItineraryStop(
  place: InspirationPlace,
): ItineraryStop {
  return {
    id: String(place.id),
    placeUid: place.card.uid,
    title: place.card.name || place.place_name,
    subtitle: place.card.summary,
    travelerNote: place.comment,
    coverImage: place.card.image_url,
    tags: mapTagsToItineraryTags(
      place.tags?.length ? place.tags : place.card.tags,
    ),
    detailsHref: `/inspiration/stops/${place.card.uid}`,
  };
}

export function mapDayToItineraryDay(day: InspirationDay): ItineraryDayType {
  return {
    id: String(day.id),
    dayNumber: day.day,
    dayLabel: getDayLabel(day.day),
    title: day.title,
    description: day.description,
    stops: day.places.map(mapPlaceToItineraryStop),
    // NOTE: backend does not return distance/duration between stops yet.
    // Leaving empty until API adds a per-day "transitions" field.
    transitions: [],
  };
}

export function mapDetailsToItinerary(
  details: InspirationDetails,
): ItineraryDayType[] {
  return details.days.map(mapDayToItineraryDay);
}

export function mapDetailsToHero(
  details: InspirationDetails,
): InspirationHeroData {
  return {
    title: details.title,
    coverImage: details.image_url,
    author: {
      name: `${details.author.name} ${details.author.family_name}`.trim(),
      avatar: details.author.avatar_url,
      family_name: details.author.family_name,
      avatar_url: details.author.avatar_url,
      id:details.author.id
    },
    location: details.city_name,
    duration: mockDetail.hero.duration,
    updatedAt: formatPersianDate(details.updated_at),
    isFavorited: details.is_favorited, // اضافه شد
  };
}

export function mapDetailsToWhySection(
  details: InspirationDetails,
): InspirationWhySectionData {
  return {
    description: details.why_chosen,
    tags: details.tags,
  };
}

export function mapAuthorToTraveler(author: InspirationAuthor): Traveler {
  return {
    id: String(author.id),
    name: `${author.name} ${author.family_name}`.trim(),
    avatarUrl: author.avatar_url,
    profileHref: `/inspiration/travelers/${author.id}`,
    // NOTE: backend author object has no username/specialties/bio fields yet — keeping mock
    username: mockTraveler.username,
    statusBadge: mockTraveler.statusBadge,
    specialties: mockTraveler.specialties,
    bioTitle: mockTraveler.bioTitle,
    bioTitleIcon: mockTraveler.bioTitleIcon,
    bioQuote: mockTraveler.bioQuote,
  };
}

export function mapInspirationToDestinationExperience(
  inspiration: Inspiration,
): DestinationExperience {
  return {
    id: String(inspiration.id),
    coverImage: inspiration.image_url,
    title: inspiration.title,
    description: inspiration.travel_description,
    durationDays: 0,
    spotsCount: 0,
    category: inspiration.tags[0] ?? 'عمومی',
    location: inspiration.city_name,
    author: {
      name: inspiration.author_name,
    },
    author_image:inspiration.author_image,
    isFavorited: inspiration.is_favorited, // اضافه شد
    tags:inspiration.tags
  };
}

export function mapInspirationsToDestinationExperiences(
  inspirations: Inspiration[],
): DestinationExperience[] {
  return inspirations.map(mapInspirationToDestinationExperience);
}

import type { MapPoint } from '@shared/types/map';

export function mapPlacesToMapPoints(details: InspirationDetails): MapPoint[] {
  return details.days.flatMap((day) =>
    day.places
      .filter(
        (place) =>
          Number.isFinite(place.card.latitude) &&
          Number.isFinite(place.card.longitude),
      )
      .map((place) => ({
        id: place.card.uid,
        lat: place.card.latitude,
        lng: place.card.longitude,
        title: place.card.name || place.place_name,
        address: place.card.summary,
      })),
  );
}
