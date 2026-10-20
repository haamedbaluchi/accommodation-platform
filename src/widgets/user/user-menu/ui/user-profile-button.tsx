'use client';
import { ProfileDropdown } from './profile-dropdown';
import { ProfileDrawer } from './profile-drawer/profile-drawer';
import { UserProfileTrigger } from './internal/user-profile-trigger';
import { useUserProfileButton } from '../model/use-user-profile-button';

interface UserProfileButtonProps {
  avatarSrc?: string;
  fullName?: string;
  subtitle?: string;
  className?: string;
  onProfileClick?: () => void;
  onBoomTypeClick?: () => void;
  onSupportClick?: () => void;
  onPlanClick?: () => void;
  onFeedbackClick?: () => void;
  onNotificationsClick?: () => void;
  onLogoutClick?: () => void;
}

export function UserProfileButton({
  avatarSrc,
  fullName = 'مسافر بومرو',
  subtitle = 'مشاهده پروفایل',
  className,
  onProfileClick,
  onBoomTypeClick,
  onSupportClick,
  onPlanClick,
  onFeedbackClick,
  onNotificationsClick,
  onLogoutClick,
}: UserProfileButtonProps) {
  const { items, isMobile, drawerOpen, setDrawerOpen, handleProfileClick } =
    useUserProfileButton({
      onProfileClick,
      onBoomTypeClick,
      onSupportClick,
      onPlanClick,
      onFeedbackClick,
      onNotificationsClick,
      onLogoutClick,
    });
  console.log("avatarSrc",avatarSrc);
  const trigger = (
    <UserProfileTrigger
      avatarSrc={avatarSrc}
      fullName={fullName}
      className={className}
      onClick={isMobile ? () => setDrawerOpen(true) : undefined}
    />
  );

  if (isMobile) {
    return (
      <>
        {trigger}
        <ProfileDrawer
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
          avatarSrc={avatarSrc}
          fullName={fullName}
          subtitle={subtitle}
          items={items}
          onProfileClick={handleProfileClick}
        />
      </>
    );
  }

  return (
    <ProfileDropdown
      avatarSrc={avatarSrc}
      fullName={fullName}
      subtitle={subtitle}
      items={items}
      trigger={trigger}
      onProfileClick={handleProfileClick}
    />
  );
}
