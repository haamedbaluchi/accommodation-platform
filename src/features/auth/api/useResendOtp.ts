import { toast } from 'sonner';
import { authApi } from './auth.api';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { ApiError, ResendOtpRequest, ResendOtpResponse } from './auth.types';

export const useResendOtp = (): UseMutationResult<
  ResendOtpResponse,
  ApiError,
  ResendOtpRequest
> => {
  return useMutation<ResendOtpResponse, ApiError, ResendOtpRequest>({
    mutationKey: ['auth', 'resendOtp'],
    mutationFn: authApi.resendOtp,
    onSuccess: (data) => {
      toast.success(data.message || 'کد تایید مجددا برای شما ارسال شد.');
    },
    onError: (error) => {
      toast.error(
        error.message ||
          'مشکلی در ارسال مجدد کد پیش آمده، لطفا دوباره تلاش کنید.',
      );
    },
  });
};
