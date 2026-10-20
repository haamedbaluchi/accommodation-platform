import { useMutation } from '@tanstack/react-query';
import { mapTripChatResponse } from './trip-chat.mapper';
import { tripApi } from '@features/trip/api';

export function useOpenTripChatMutation() {
  return useMutation({
    mutationFn: async (tripId: number) => {
      const response = await tripApi.getChatByTrip({
        tripId,
      });

      return mapTripChatResponse(response);
    },
  });
}