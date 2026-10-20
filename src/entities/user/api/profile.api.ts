import { apiClient } from '@shared/api';
import { UserProfileResponse } from './profile.api.type';

export const profileApi = {
  userProfile: async (): Promise<UserProfileResponse> => {
    const res = await apiClient(`/api/v1/auth/profile`, {
      method: 'GET',
    });

    return res;
  },
};
