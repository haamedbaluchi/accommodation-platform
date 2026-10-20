import { NavDrawerButton } from '@features/home/navigation-drawer';
import { UserNavigation } from '@widgets/user/user-navigation';

export function ContentToolbar() {
  return (
    <>
      <div className="sticky top-0 z-30 bg-white">
        <div className="max-w-344 mx-auto px-2 py-2 hidden sm:flex items-center justify-between font-yekta">
          <NavDrawerButton variant="text" />
          <UserNavigation variant='blue'/>
        </div>
      </div>
    </>
  );
}
