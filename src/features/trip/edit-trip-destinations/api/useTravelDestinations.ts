
import { ApiResponse, travelApi, TravelDestination } from '@entities/trip';
import { ApiError } from '@shared/api';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useTravelDestinations = () => {
  return useMutation<ApiResponse, ApiError, TravelDestination>({
    mutationKey: ['travel', 'destinations'],
    mutationFn: (payload: TravelDestination) =>
      travelApi.travelDestination(payload),

    onSuccess: (data) => {
      toast.success(data.message || 'مقصد ها با موفقیت ثبت شدن');
    },

    onError: (error) => {
      toast.error(error.message || 'خطا در ثبت');
    },
  });
};
