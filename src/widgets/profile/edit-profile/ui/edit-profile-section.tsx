'use client';
import { useProfileUser } from '@entities/user';
import { UserProfileSection } from './user-profile-section';
import { EditProfileWizard } from '@features/profile/edit-profile';

export function EditProfileSection() {
  const { data } = useProfileUser();
  const userProfile = data?.user;
  return (
    <div className="max-w-full sm:max-w-7xl mx-0 sm:mx-auto p-0 sm:p-4 md:p-8 flex-1 my-0 sm:my-auto h-full">
      <div className="border border-gray-200 shadow sm:rounded-4xl p-4 md:p-8 h-full sm:h-auto flex flex-col">
        <UserProfileSection user={userProfile} />
        <div className="mt-12 sm:mt-15 md:mt-20 flex-1 flex">
          <EditProfileWizard user={userProfile} />
        </div>
      </div>
    </div>
  );
}
