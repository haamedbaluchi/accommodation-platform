import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { authApi } from './auth.api';
import { ApiError, VerifyOtpRequest, VerifyOtpResponse } from './auth.types';

export const useVerifyOtp = (): UseMutationResult<
  VerifyOtpResponse,
  ApiError,
  VerifyOtpRequest
> => {
  const queryClient = useQueryClient();

  return useMutation<VerifyOtpResponse, ApiError, VerifyOtpRequest>({
    mutationKey: ['auth', 'verifyOtp'],
    mutationFn: authApi.verifyOtp,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['chat', 'list'] });
    },
  });
};
