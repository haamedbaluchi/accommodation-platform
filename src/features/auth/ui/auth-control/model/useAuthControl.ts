import { useModalStore } from '@_app/modal';
import { useAuthStore } from '@features/auth/model';
import { buildFileUrl } from '@shared/lib';

export function useAuthControl() {
  const openModal = useModalStore((state) => state.openModal);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const user = useAuthStore((state) => state.user);

  // const backendBaseUrl =
  //   process.env.NEXT_PUBLIC_BACKEND_URL;

  // const avatarUrl =
  //   user?.avatar_url && backendBaseUrl
  //     ? `${backendBaseUrl}${user.avatar_url}`
  //     : undefined;

  const avatarUrl = buildFileUrl(user?.avatar_url);
  
  return {
    isAuthenticated,
    openAuthModal: () => openModal('auth'),

    fullName: user?.name ?? 'مسافر بومرو',
    avatarUrl,
  };
}
