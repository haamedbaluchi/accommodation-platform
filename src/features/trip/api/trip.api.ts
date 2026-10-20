import { apiClient } from '@shared/api';
import { ChatByTripResponse } from './trips.type';

export const tripApi = {
  getChatByTrip: ({ tripId }: { tripId: string | number }) =>
    apiClient<ChatByTripResponse>(
      `/api/v1/chats/by-trip?trip_id=${encodeURIComponent(String(tripId))}`,
    ),
};
