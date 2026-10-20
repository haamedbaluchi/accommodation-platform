import { Trip } from '@entities/trip';
import { useQuery } from '@tanstack/react-query';
import { apiClient, ApiError } from '@shared/api';
import { TravelTripsResponse } from './trips.type';
import { mapTripDtoToTrip } from '@entities/trip/model';

export const useTravelTrips = () => {
  return useQuery<Trip[], ApiError>({
    queryKey: ['travel', 'trips'],
    queryFn: async () => {
      const res = await apiClient<TravelTripsResponse>('/api/v1/travel/trips');

      return res.data.map(mapTripDtoToTrip);
    },
  });
};
