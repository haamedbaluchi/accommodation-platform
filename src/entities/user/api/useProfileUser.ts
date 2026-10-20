import { profileApi } from './profile.api';
import { useQuery } from '@tanstack/react-query';
import { UserProfileResponse } from './profile.api.type';

export const useProfileUser = () => {
  return useQuery<UserProfileResponse>({
    queryKey: ['profile', 'details'],
    queryFn: () => profileApi.userProfile(),
  });
};
