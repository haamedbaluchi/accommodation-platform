import { ProfileMenuItem } from '@entities/user';
import {
  BrainIcon,
  CommentIcon,
  LogoutIcon,
  NotificationsIcons,
  ScrollIcon,
  SearchIcon,
  TripsIcon,
} from '@shared/assets/icons';

interface Props {
  onBoomTypeClick?: () => void;
  onSupportClick?: () => void;
  onPlanClick?: () => void;
  onFeedbackClick?: () => void;
  onNotificationsClick?: () => void;
  onLogoutClick?: () => void;

  onExploreClick?: () => void;
  onInspirationClick?: () => void;

}

export const createProfileMenuItems = ({
  onBoomTypeClick,
  onSupportClick,
  onPlanClick,
  onFeedbackClick,
  onNotificationsClick,
  onLogoutClick,

   onExploreClick,
  onInspirationClick,

}: Props): ProfileMenuItem[] => [
  
  // {
  //   id: 'boom-type',
  //   label: 'Boom Type',
  //   icon: <BrainIcon className="w-5 h-5" />,
  //   onClick: onBoomTypeClick,
  // },
  // {
  //   id: 'support',
  //   label: 'کارهای پیش رو',
  //   icon: <ScrollIcon className="w-5 h-5" />,
  //   onClick: onSupportClick,
  // },
  // {
  //   id: 'plan',
  //   label: 'پلن و اشتراک من',
  //   icon: <BrainIcon className="w-5 h-5" />,
  //   onClick: onPlanClick,
  // },
  // {
  //   id: 'feedback',
  //   label: 'بازخورد شما',
  //   icon: <CommentIcon className="w-5 h-5" />,
  //   onClick: onFeedbackClick,
  // },
  // {
  //   id: 'notifications',
  //   label: 'اعلانات',
  //   icon: <NotificationsIcons className="w-5 h-5" />,
  //   onClick: onNotificationsClick,
  // },
  {
    id: 'inspiration',
    label: 'الهام سفر',
    icon: <TripsIcon className="w-5 h-5" />,
    onClick: onInspirationClick,
  },
  {
    id: 'explore',
    label: 'اکسپلور',
    icon: <SearchIcon className="w-5 h-5" />,
    onClick: onExploreClick,
  },
  {
    id: 'logout',
    label: 'خروج از حساب کاربری',
    destructive: true,
    icon: <LogoutIcon className="w-5 h-5" />,
    onClick: onLogoutClick,
    className:
      'mt-2 rounded-full bg-transparent py-2.5 text-sm font-medium text-red-500 hover:bg-error/3 focus:bg-error/10',
  },
];
