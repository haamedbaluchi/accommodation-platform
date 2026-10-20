import { useIsMobile } from '@shared/hooks/useIsMobile';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { createProfileMenuItems } from '../lib/create-profile-menu-items';

interface UseUserProfileButtonProps {
  onProfileClick?: () => void;
  onBoomTypeClick?: () => void;
  onSupportClick?: () => void;
  onPlanClick?: () => void;
  onFeedbackClick?: () => void;
  onNotificationsClick?: () => void;
  onLogoutClick?: () => void;
}

export const useUserProfileButton = ({
  onProfileClick,
  onBoomTypeClick,
  onSupportClick,
  onPlanClick,
  onFeedbackClick,
  onNotificationsClick,
  onLogoutClick,
}: UseUserProfileButtonProps) => {
  const router = useRouter();

  const isMobile = useIsMobile();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleProfileClick = useCallback(() => {
    if (onProfileClick) {
      onProfileClick();
      return;
    }

    router.push('/profile');
  }, [onProfileClick, router]);

  const handleExploreClick = useCallback(() => {
    router.push('/explore');
  }, [router]);

  const handleInspirationClick = useCallback(() => {
    router.push('/inspiration');
  }, [router]);

  const items = useMemo(
    () =>
      createProfileMenuItems({
        onBoomTypeClick,
        onSupportClick,
        onPlanClick,
        onFeedbackClick,
        onNotificationsClick,
        onLogoutClick,

        onExploreClick: handleExploreClick,
        onInspirationClick: handleInspirationClick,
    
      }),
    [
      onBoomTypeClick,
      onSupportClick,
      onPlanClick,
      onFeedbackClick,
      onNotificationsClick,
      onLogoutClick,
        handleExploreClick,
      handleInspirationClick,
    ],
  );
  return {
    items,
    isMobile,
    drawerOpen,
    setDrawerOpen,
    handleProfileClick,
  };
};
