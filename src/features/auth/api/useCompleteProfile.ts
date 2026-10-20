import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { toast } from 'sonner';
import { authApi } from './auth.api';
import {
  ApiError,
  CompleteProfileRequest,
  CompleteProfileResponse,
} from './auth.types';

export const useCompleteProfile = (): UseMutationResult<
  CompleteProfileResponse,
  ApiError,
  CompleteProfileRequest
> => {
  return useMutation<
    CompleteProfileResponse,
    ApiError,
    CompleteProfileRequest
  >({
    mutationKey: ['auth', 'completeProfile'],
    mutationFn: authApi.completeProfile,
    onSuccess: (data) => {
      toast.success(data.message || 'اطلاعات شما با موفقیت ثبت شد.');
    },
    onError: (error) => {
      toast.error(error.message || 'مشکلی در ثبت اطلاعات پیش آمده است.');
    },
  });
};
