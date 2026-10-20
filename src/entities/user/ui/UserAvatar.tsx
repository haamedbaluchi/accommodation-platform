'use client';
import Image from 'next/image';
import userIconUrl from '@shared/assets/icons/user_profile.svg?url';

type UserAvatarProps = {
  avatarUrl?: string;
  avatarAlt?: string;
};

export function UserAvatar({ avatarUrl, avatarAlt }: UserAvatarProps) {
  const backendBaseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const avatar_url = avatarUrl ? `${backendBaseUrl}${avatarUrl}` : userIconUrl;
  return (
    <div
      className="
    relative size-16 sm:size-25 lg:size-30 rounded-full outline- outline-background border-0 overflow-hidden"
    >
      {
        <Image
          fill
          src={avatar_url}
          alt={avatarAlt || ''}
          className="object-cover"
        />
      }
    </div>
  );
}
