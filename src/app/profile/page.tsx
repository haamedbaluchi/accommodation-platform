import type { Metadata } from 'next';

import { Sidebar } from '@widgets/layout/sidebar';
import { ProfilePageContainer } from '@views/profile-page';


export const metadata: Metadata = {
  title: 'پروفایل کاربری',
  description: 'صفحه پروفایل کاربر',
};

export default function Page() {
  return (
    <div className="flex w-full h-dvh overflow-hidden">
      <Sidebar />
      <ProfilePageContainer />
    </div>
  );
}
