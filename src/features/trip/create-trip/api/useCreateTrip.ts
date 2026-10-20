import {
  CreateTripPayload,
  CreateTripResponse,
  travelApi,
} from '@entities/trip';
import { ApiError } from '@shared/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useCreateTrip = () => {
  const queryClient = useQueryClient();
  return useMutation<CreateTripResponse, ApiError, CreateTripPayload>({
    mutationKey: ['travel', 'trips', 'create'],

    mutationFn: (payload) => travelApi.createTrip(payload),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['travel', 'trips'] });
      toast.success(data.message || 'سفر با موفقیت ساخته شد');
    },

    onError: (error) => {
      toast.error(error.message || 'خطا در ساخت سفر');
    },
  });
};
