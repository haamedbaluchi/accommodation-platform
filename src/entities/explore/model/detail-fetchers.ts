import { destinationApi } from '@entities/destination/api/destination-api';
import { restaurantApi } from '@entities/restaurant/api/restaurant-api';
import { accommodationApi } from '@entities/accommodation/api/accommodation-api';
import { eventApi } from '@entities/event/api/event-api';
import { mapDestinationToDetails } from '@entities/destination/model/mappers';
import { mapRestaurantToDetails } from '@entities/restaurant';
import { mapAccommodationToDetails } from '@entities/accommodation';
import { mapEventToDetails } from '@entities/event';

export type ExploreItemType = 'destination' | 'restaurant' | 'accommodation' | 'event';

export const exploreDetailFetchers: Record<ExploreItemType, (id: string) => Promise<any>> = {
  destination: async (id) => mapDestinationToDetails(await destinationApi.details(id)),
  restaurant: async (id) => mapRestaurantToDetails(await restaurantApi.details(id)),
  accommodation: async (id) => mapAccommodationToDetails(await accommodationApi.details(id)),
  event: async (id) => mapEventToDetails(await eventApi.details(id)),
};