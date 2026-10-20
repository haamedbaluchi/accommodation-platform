'use client';

import { useProfileUser } from '@entities/user';
import { ProfilePage } from './profile-page';
import {
  ProfileError,
  ProfileLoading,
  profileStats,
} from '@widgets/profile/profile-page';

export function ProfilePageContainer() {
  const { data, isLoading, isError, refetch } = useProfileUser();

  if (isLoading) {
    return <ProfileLoading />;
  }

  if (isError) {
    return <ProfileError onRetry={refetch} />;
  }

  return <ProfilePage profile={data?.user} stats={profileStats} />;
}
