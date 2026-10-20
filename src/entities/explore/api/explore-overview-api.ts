
import { apiClient } from '@shared/api';
import { DestinationDTO } from '@entities/destination';
import { RestaurantDTO } from '@entities/restaurant';
import { AccommodationDTO } from '@entities/accommodation';
import { EventDTO } from '@entities/event';

export interface ExploreAggregateData {
  destinations: DestinationDTO[];
  restaurants: RestaurantDTO[];
  accommodations: AccommodationDTO[];
  events: EventDTO[];
}

export interface ExploreOverviewResponse {
  success: boolean;
  message: string;
  data: ExploreAggregateData;
}

export const exploreOverviewApi = {
  get: () => apiClient<ExploreOverviewResponse>('/api/v1/explore'),
};