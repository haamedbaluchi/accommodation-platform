'use client'
import { toast } from 'sonner';
import { authApi } from './auth.api';
import { ApiError } from '@shared/api';
import { useAuthStore } from '../model';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const clearUser = useAuthStore((state) => state.clearUser);

  return useMutation({
    mutationKey: ['logout'],
    mutationFn: authApi.logout,
    onSuccess: async () => {
      clearUser();
      await queryClient.clear();
      localStorage.removeItem('auth-storage');
      router.replace('/');
    },

    onError: (error:ApiError) => {
        const messageError=error?.detail??"خروج از حساب انجام نشد"
        toast.error(messageError)
    },
  });
};