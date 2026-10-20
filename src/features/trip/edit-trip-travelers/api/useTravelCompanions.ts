import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { ApiResponse, travelApi } from '@entities/trip';
import { ApiError } from '@shared/api';

interface TravelCompanionsPayload {
  companions: string[];
}

export const useTravelCompanions = () => {
  return useMutation<ApiResponse, ApiError, TravelCompanionsPayload>({
    mutationKey: ['travel', 'companions'],
    mutationFn: (payload: TravelCompanionsPayload) =>
      travelApi.travelCompanions(payload),

    onSuccess: (data) => {
      toast.success(data.message || 'همسفرها با موفقیت ثبت شدند');
    },

    onError: (error) => {
      toast.error("مشکلی در ثبت همسفران پیش آمده است");
    },
  });
};
