'use client';

import { useAuthStore } from '@features/auth';
import { GuestContent } from './guest-content';
import { AuthenticatedContent } from './authenticated-content';

interface DrawerUserSectionProps {
  onLogin?: () => void;
  onStartHosting?: () => void;
}

export function DrawerUserSection({
  onLogin,
  onStartHosting,
}: DrawerUserSectionProps) {
  const { isAuthenticated, hasHydrated } = useAuthStore();


  return isAuthenticated ? (
    <AuthenticatedContent />
  ) : (
    <GuestContent
      onLogin={onLogin}
      onStartHosting={onStartHosting}
    />
  );
}