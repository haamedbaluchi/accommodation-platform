import { cn } from '@shared/lib';
import { UserProfileButton } from '@widgets/user/user-menu/ui/user-profile-button';

interface AuthenticatedActionsProps {
  avatarUrl: string;
  fullName: string;
  variant: 'light' | 'blue';
  logout: VoidFunction;
}

export function AuthenticatedActions({
  avatarUrl,
  fullName,
  variant,
  logout,
}: AuthenticatedActionsProps) {
  return (
    <UserProfileButton
      avatarSrc={avatarUrl}
      fullName={fullName}
      className={cn(
        'mt-0 lg:mt-0',
        variant === 'light'
          ? 'border-white text-white bg-transparent'
          : 'border-blue-tint-8 text-blue-tint-8',
      )}
      onLogoutClick={logout}
    />
  );
}
