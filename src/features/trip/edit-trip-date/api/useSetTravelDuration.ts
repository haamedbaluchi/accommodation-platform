
import { useMutation } from '@tanstack/react-query';
import { DateTripFormInput } from '../model/dateTripSchema';
import { travelApi } from '@entities/trip';

function buildTravelDurationPayload(data: DateTripFormInput) {
  const hasDateRange = !!data.startDate && !!data.endDate;

  if (hasDateRange) {
    return {
      duration: {
        type: 'date_range' as const,
        start_date: data.startDate,
        end_date: data.endDate,
      },
    };
  }

  return {
    duration: {
      type: 'days' as const,
      total_days: data.totalDays || 1,
    },
  };
}

export function useSetTravelDuration() {
  return useMutation({
    mutationFn: async (data: DateTripFormInput) => {
      const payload = buildTravelDurationPayload(data);
      return travelApi.travelDuration(payload);
    },
  });
}
