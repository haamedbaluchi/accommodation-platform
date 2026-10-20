'use client';

import { UserProfile } from '@entities/user';
import { ProfileHeader } from '@widgets/profile/profile-header';
import { ProfileStat } from '@widgets/profile/profile-page';
import { ProfileTabsSection } from '@widgets/profile/profile-tabs';

interface ProfilePage {
  profile: UserProfile;
  stats: ProfileStat[];
}
export function ProfilePage({ profile, stats }) {
  return (
    <main
      dir="rtl"
      className="flex h-full flex-1 flex-col bg-background font-yekta text-text-main"
    >
      <section className="flex h-full w-full flex-col bg-background shadow-aside">
        <ProfileHeader profile={profile} stats={stats} />

        <ProfileTabsSection />
      </section>
    </main>
  );
}
