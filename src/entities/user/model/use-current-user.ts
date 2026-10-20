// entities/user/model/use-current-user.ts
'use client';

import { useAuthStore } from "@features/auth";


export function useCurrentUser() {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  return { user, isAuthenticated, hasHydrated };
}