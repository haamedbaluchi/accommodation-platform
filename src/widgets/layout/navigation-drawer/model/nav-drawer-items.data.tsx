import {
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  UserGroupIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { TripsIcon } from '@shared/assets/icons';

export type MenuItem = {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  disabled?: boolean;
};

export const menuItems: MenuItem[] = [
  {
    id: 'home',
    label: 'صفحه اصلی',
    href: '/',
    icon: <HomeIcon className="size-5" />,
  },
  {
    id: 'chat_ai',
    label: 'شروع گفتگو',
    href: '/chat_ai',
    icon: <ChatBubbleLeftRightIcon className="size-5" />,
  },
  // {
  //   id: 'inspire',
  //   label: 'الهام بگیر',
  //   href: '/inspire',
  //   icon: <SparklesIcon className="size-5" />,
  // },
  {
    id: 'trips',
    label: 'سفرهای من',
    href: '/trips',
    icon: <TripsIcon className="size-5" />,
  },
  {
    id: 'group_work',
    label: 'برای کسب‌وکارها',
    href: '/business',
    icon: <UserGroupIcon className="size-5" />,
  },
  {
    id: 'about',
    label: 'درباره بومو',
    href: '/about-us',
    disabled: false,
    icon: <InformationCircleIcon className="size-5" />,
  },
  {
    id: 'faq',
    label: 'سوالات متداول',
    href: '/questions',
    disabled: false,
    icon: <QuestionMarkCircleIcon className="size-5" />,
  },
  {
    id: 'contact',
    label: 'تماس با ما',
    href: '/contact',
    disabled: true,
    icon: <PhoneIcon className="size-5" />,
  },
];