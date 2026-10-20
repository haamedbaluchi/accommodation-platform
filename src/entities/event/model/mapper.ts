import { toPersianDateParts } from '@shared/lib/date/to-persian-date-parts';
import type { LocalEvent } from '@widgets/explore-page/collections/local-event/model/types';
import type { EventDTO } from './types';
import { EventDetailsData } from '@widgets/explore-page/explore-item-detail/event-details/model/types';
import { buildFileUrl } from '@shared/lib';
import { parseCoordinates } from '@shared/lib/geo-location';

export function mapEventToUi(dto: EventDTO): LocalEvent {
  const { day, month, weekday } = toPersianDateParts(dto.event_date);
  const eventImage = buildFileUrl(dto.images?.[0]?.url);

  return {
    id: String(dto.id),
    coverImage: dto.images?.[0]?.url.startsWith('/static')
      ? eventImage ?? '/images/placeholder-event.jpg'
      : (dto.images?.[0]?.url ?? '/images/placeholder-event.jpg'),
    dateDay: day,
    dateMonth: month,
    dateWeekday: weekday,
    title: dto.name,
    location: `${dto.country} , ${dto.city_name}`,
    tagLabel: dto.tags?.[0] ?? 'رویداد',
    timeLabel: dto.event_time,
  };
}

export function mapEventToDetails(dto: EventDTO): EventDetailsData {
  const { day, month, weekday } = toPersianDateParts(dto.event_date);

  return {
    title: dto.name,
    categoryLabel: dto.tags?.[0],
    dateDay: day,
    dateMonth: month,
    dateWeekday: weekday,
    timeLabel: dto.event_time,
    address: dto.address ?? dto.city_name,
    fullAddress: dto.address,
    organizers: dto.organizers,
    images: dto.images?.map((img) => img.url),
    description: dto.general_description ?? dto.short_description,
    coordinates: parseCoordinates(dto.latitude, dto.longitude),
  };
}
