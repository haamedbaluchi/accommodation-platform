import { EditProfileHeader } from '@features/profile/edit-profile';

import { UserAvatar, UserCover, UserInfo, UserProfile } from '@entities/user';

export function UserProfileSection({ user }: { user?: UserProfile }) {
  return (
    <div className="h-fit relative">
      <EditProfileHeader />
      <UserCover />
      <div className="absolute right-5 sm:right-8 top-42 xs:top-50 sm:top-49 lg:top-47 2xl:top-58 flex items-end gap-3 sm:gap-5">
        <UserAvatar
          avatarUrl={user?.avatar_url}
          avatarAlt={user?.avatar_alt ?? user?.name}
        />
        <UserInfo profile={user} />
      </div>
    </div>
  );
}
