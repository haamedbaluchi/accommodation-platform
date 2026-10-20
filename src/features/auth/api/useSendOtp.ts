import { toast } from 'sonner';
import { authApi } from './auth.api';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { ApiError, SendOtpRequest, SendOtpResponse } from './auth.types';

export const useSendOtp = (): UseMutationResult<
  SendOtpResponse,
  ApiError,
  SendOtpRequest
> => {
  return useMutation<SendOtpResponse, ApiError, SendOtpRequest>({
    mutationKey: ['auth', 'sendOtp'],
    mutationFn: authApi.sendOtp,
    onSuccess: (data) => {
      toast.success(data.message || 'کد تایید برای شما ارسال شد.');
    },
    onError: (error) => {
      toast.error(
        error.message || 'مشکلی در ارسال کد پیش آمده، لطفا دوباره تلاش کنید.'
      );
    },
  });
};
