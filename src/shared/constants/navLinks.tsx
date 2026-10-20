import {
  MultiMassageIcon,
  TripsIcon,
  SearchIcon,
  FavoriteLocationIcon,
  MoreMessageIcon,
} from '@shared/assets/icons';

export const navLinks = [
  {
    id: 'chat_bot_page',
    href: '/chat_ai',
    label: 'گفتگوها',
    icon: <MultiMassageIcon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />,
  },
  {
    id: 'trips_page',
    href: '/trips',
    label: 'سفرها',
    icon: <TripsIcon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />,
  },

  {
    id: 'inspiration_page',
    href: '/inspiration',
    label: 'الهام سفر',
    icon: (
      <FavoriteLocationIcon
        className="h-4.5 w-4.5 sm:h-5 sm:w-5"
        color={'blue'}
      />
    ),
  },
  {
    id: 'search_page',
    href: '/explore',
    label: 'گشت‌و‌گذار',
    icon: <SearchIcon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />,
  },
  {
    id: 'more_message_page',
    href: '/messages',
    label: 'روایت من',
    icon: <MoreMessageIcon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />,
  },
];
