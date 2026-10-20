import { UserNavigation } from '@widgets/user/user-navigation';
import { HeaderLogo } from './header-logo';
import { NavDrawerButton } from '@features/home/navigation-drawer';

export function HeroTopbar() {
  return (
    <header className="flex items-center justify-between ">
      <NavDrawerButton variant="icon" />

      <HeaderLogo />
      <UserNavigation />
    </header>
  );
}
