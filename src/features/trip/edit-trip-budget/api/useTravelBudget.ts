
import { ApiResponse, travelApi } from '@entities/trip';
import { ApiError } from '@shared/api';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useTravelBudget = () => {
  return useMutation<ApiResponse, ApiError, [number, number]>({
    mutationKey: ['travel', 'budget'],

    mutationFn: (budgetRange) =>
      travelApi.travelBudget({ budgetRange }),

    onSuccess: (data) => {
      toast.success(data.message || 'بازه هزینه ثبت شد');
    },

    onError: (error) => {
      toast.error(error.detail || error.message);
    },
  });
};