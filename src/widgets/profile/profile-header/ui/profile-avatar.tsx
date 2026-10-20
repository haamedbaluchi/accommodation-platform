import Image from 'next/image';
import { UserProfile } from '@widgets/profile/profile-page';
import userIconUrl from '@shared/assets/icons/user_profile.svg?url';



type ProfileAvatarProps = {
  profile: UserProfile;
};

export function ProfileAvatar({
  profile,
}: ProfileAvatarProps) {
  const backendBaseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const avatarUrl = profile.avatar_url
    ? `${backendBaseUrl}${profile.avatar_url}`
    : userIconUrl;

  return (
    <div className="absolute -top-10 sm:-top-7 lg:-top-10.5 2xl:-top-15.5 right-4.25 sm:right-11 size-21 sm:size-15 lg:size-20 2xl:size-30 overflow-hidden rounded-full border-6 border-background bg-secondary">
      <Image
        src={avatarUrl}
        alt={profile.name}
        fill
        className="object-cover"
        sizes="120px"
      />
    </div>
  );
}