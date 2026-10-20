'use client';

import { ProfileDrawerItem } from './profile-drawer-item';
import { ProfileMenuHeader } from '../profile-menu-header';
import { Drawer, DropdownItemType, CloseButton } from '@shared/ui';

interface ProfileDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  avatarSrc?: string;
  fullName: string;
  subtitle: string;

  items: DropdownItemType[];

  onProfileClick: () => void;
}

export function ProfileDrawer({
  open,
  onOpenChange,
  avatarSrc,
  fullName,
  subtitle,
  items,
  onProfileClick,
}: ProfileDrawerProps) {
  const handleItemClick = (item: DropdownItemType) => {
    item.onClick?.();
    onOpenChange(false);
  };
  return (
    <Drawer
      side="right"
      description="پروفایل کاربر"
      open={open}
      onOpenChange={onOpenChange}
      title="پروفایل"
      className="w-full max-w-full sm:w-100"
    >
      <div className="flex h-full flex-col bg-white">
        <div className="flex justify-end p-4">
          <CloseButton onClick={() => onOpenChange(false)} />
        </div>

        <div className="flex flex-col flex-1 gap-1 px-4 pb-6">
          {items.map((item) => (
            <ProfileDrawerItem
              key={item.id}
              item={item}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>

        <div className="px-4">
          <ProfileMenuHeader
            avatarSrc={avatarSrc}
            fullName={fullName}
            subtitle={subtitle}
            onClick={onProfileClick}
          />
        </div>
      </div>
    </Drawer>
  );
}
