import { ApiError } from '@shared/api';
import { useRouter } from 'next/navigation';
import { editProfileApi } from '../editProfil.api';
import { UserProfileResponse } from '@entities/profile';
import { EditProfilePayload } from '../editProfile.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useEditProfile = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation<UserProfileResponse, ApiError, EditProfilePayload>({
    mutationKey: ['user', 'profile', 'details'],
    mutationFn: editProfileApi.editProfile,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', 'details'] });
      router.push('/profile');
    },
  });
};
