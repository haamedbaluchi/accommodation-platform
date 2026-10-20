'use client';

import { ProfileMenuHeader } from './profile-menu-header';
import { DropdownItemType, DropdownMenu } from '@shared/ui';

interface ProfileDropdownProps {
  avatarSrc?: string;
  fullName: string;
  subtitle: string;
  items: DropdownItemType[];
  trigger: React.ReactNode;
  onProfileClick: () => void;
}

export function ProfileDropdown({
  avatarSrc,
  fullName,
  subtitle,
  items,
  trigger,
  onProfileClick,
}: ProfileDropdownProps) {
  console.log('user profile menu');
  return (
    <DropdownMenu
      trigger={trigger}
      items={items}
      side="bottom"
      align="start"
      sideOffset={10}
      iconClassName="justify-center text-text-secondary"
      className="w-70 gap-1 rounded-2xl px-4 py-4 md:w-80 xl:w-85"
      itemClassName="min-h-10 justify-start gap-3 rounded-lg px-2 py-2 text-sm text-text-primary focus:bg-accent md:text-lg"
      header={
        <ProfileMenuHeader
          avatarSrc={avatarSrc}
          fullName={fullName}
          subtitle={subtitle}
          onClick={onProfileClick}
        />
      }
    />
  );
}
