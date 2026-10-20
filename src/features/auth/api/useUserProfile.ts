import { authApi } from './auth.api';
import { useQuery } from '@tanstack/react-query';

export const useUserProfile = () => {
  return useQuery({
    queryKey: ['user_profile'],
    queryFn: () => authApi.userProfile(),
    staleTime: 30000,
  });
};
