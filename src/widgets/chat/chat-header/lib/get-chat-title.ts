import { SelectedDestination } from "@entities/destination";

export const getChatTitle = (payload: {
  title: string;
  destinations: SelectedDestination[];
}): string => {
  const title = payload.title?.trim();
  const isDefaultTitle = !title || title === 'سفر جدید';

  if (!isDefaultTitle) return title;
  if (payload.destinations.length === 1) {
    return `سفر به ${payload.destinations[0].city_name}`;
  }
  if (payload.destinations.length > 1) {
    return 'سفر چندمقصده';
  }
  return 'گفت‌وگوی جدید';
};