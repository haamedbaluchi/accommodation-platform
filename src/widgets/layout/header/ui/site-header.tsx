import { cn } from '@shared/lib';
import { BoomerMenuButton } from '@shared/ui';
import { BrandLogo } from '@shared/ui/brand-logo';
import { UserNavigation } from '@widgets/user/user-navigation';
export type HeaderVariant = 'light' | 'blue';

const variantStyles: Record<HeaderVariant, string> = {
  light: 'text-blue-shade-9 bg-white',
  blue: 'text-white bg-black',
};

export function SiteHeader({ variant = 'light' }: { variant?: HeaderVariant }) {
  return (
    <header
      className={cn('flex items-center justify-between w-full px-4')}
    >
      <BoomerMenuButton variant="icon" />

      <BrandLogo />

      <UserNavigation variant={variant} />
    </header>
  );
}
