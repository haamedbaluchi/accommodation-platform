import { apiClient } from '@shared/api';
import { EditProfilePayload } from './editProfile.type';
import { UserProfileResponse } from '@entities/profile/api/profile.api.type';

export const editProfileApi = {
  editProfile: (payload: EditProfilePayload) =>
    apiClient<UserProfileResponse>(`/api/v1/auth/profile`, {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
};
