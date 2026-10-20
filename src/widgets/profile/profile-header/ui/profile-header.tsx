import Image from 'next/image';
import { ProfileInfo } from './profile-info';
import { ProfileStats } from './profile-stats';
import { ProfileAvatar } from './profile-avatar';
import { EditProfileButton } from './edit-profile-button';
import { ProfileStat } from '@widgets/profile/profile-page';
import { UserProfile } from '@entities/user';

type ProfileHeaderProps = {
  profile: UserProfile;
  stats: ProfileStat[];
};

export function ProfileHeader({ profile, stats }: ProfileHeaderProps) {
  return (
    <header className="relative">
      <div className="relative h-35 lg:h-40 2xl:h-58 w-full overflow-hidden bg-secondary">
        <Image
          src="/images/profile_bg.jpg"
          alt="تصویر کاور پروفایل"
          fill
          priority
          className="object-cover"
          sizes="430px"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/5 to-black/20" />
      </div>

      <section className="relative -mt-8 rounded-t-4xl bg-background px-5 md:px-9 pt-12 sm:pt-10 2xl:pt-16.5">
        <ProfileAvatar profile={profile} />
        <EditProfileButton />
        <ProfileInfo profile={profile} />
        {/* <ProfileStats stats={stats} /> */}
      </section>
    </header>
  );
}
