import { Metadata } from 'next';
import { Sidebar } from '@widgets/layout/sidebar';
import { EditProfileSection } from '@widgets/profile/edit-profile';

export const metadata: Metadata = {
  title: 'ویرایش پروفایل',
  description: 'صفحه ویرایش پروفایل ',
};


export default function Page() {
  return (
    <div className="flex min-h-dvh max-h-dvh w-full overflow-hidden">
      <div className="hidden sm:flex">
        <Sidebar />
      </div>
      <div className="max-h-dvh sm:my-auto overflow-y-auto w-full custom-scrollbar">
        <EditProfileSection/>
      </div>
    </div>
  );
}
