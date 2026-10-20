import {
  MultiMassageIcon,
  TripsIcon,
  SearchIcon,
  FavoriteLocationIcon,
  NotificationsIcons,
  MoreMessageIcon,
} from '@shared/assets/icons';

export const sidebarNavItems = [
  {
    id: 'chat_bot_page',
    href: '/chat_ai',
    label: 'چت بات',
    icon: MultiMassageIcon,
  },
  {
    id: 'trips_page',
    href: '/trips',
    label: 'سفرها',
    icon: TripsIcon,
  },
  {
    id: 'explore_page',
    href: '/explore',
    label: 'جست و جو',
    icon: SearchIcon,
  },
  {
    id: 'inspiration_page',
    href: '/inspiration',
    label:  'الهام سفر',
    icon: FavoriteLocationIcon,
  },
  // {
  //   id: 'more_message_page',
  //   href: '/messages',
  //   label: 'پیام ها',
  //   icon: MoreMessageIcon,
  // },
];
