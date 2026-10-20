import { apiClient } from '@shared/api';
import {
  ApiResponse,
  CreateTripPayload,
  CreateTripResponse,
  TravelDestination,
  TravelTripDuration,
} from './travel.type';
import { formatBudgetRange } from '@shared/lib/format';

export const travelApi = {
  createTrip: (payload: CreateTripPayload) =>
    apiClient<CreateTripResponse>('/api/v1/travel/trips', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  travelDestination: (payload: TravelDestination) =>
    apiClient<ApiResponse>('/api/v1/travel/destinations', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  travelDuration: ({ duration }: { duration: TravelTripDuration }) => {
    const body =
      duration.type === 'date_range'
        ? {
            type: duration.type,
            start_date: duration.start_date,
            end_date: duration.end_date,
          }
        : {
            type: duration.type,
            total_days: duration.total_days,
          };

    return apiClient<ApiResponse>('/api/v1/travel/duration', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  },

  travelCompanions: ({ companions }: { companions: string[] }) =>
    apiClient<ApiResponse>('/api/v1/travel/companions', {
      method: 'POST',
      body: JSON.stringify({ companions }),
    }),

  travelBudget: ({ budgetRange }: { budgetRange: [number, number] }) =>
    apiClient<ApiResponse>('/api/v1/travel/budget', {
      method: 'POST',
      body: JSON.stringify({
        budget_range: formatBudgetRange([budgetRange[0], budgetRange[1]]),
      }),
    }),
};
