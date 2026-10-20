import {
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  YoutubeIcon,
  XIcon,
} from '@shared/assets/icons';
import { FooterLink, SocialLink } from './footer.types';



export const productLinks: FooterLink[] = [
  {
    label: 'دانلود اپلیکیشن',
    href: '#',
  },
  {
    label: 'بومو چطور کار می‌کند؟',
    href: '#',
  },
  {
    label: 'تست سبک سفر',
    href: '#',
  },
  {
    label: 'الهام بگیر / سفرنامه‌ها جیپوب',
    href: '#',
  },
];

export const supportLinks: FooterLink[] = [
  {
    label: 'سوالات متداول FAQ',
    href: '#',
  },
  {
    label: 'تماس با ما',
    href: '#',
  },
  {
    label: 'وبلاگ بومو',
    href: '#',
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'Instagram',
    href: '#',
    icon: InstagramIcon,
  },
  {
    label: 'X',
    href: '#',
    icon: XIcon,
  },
/*   {
    label: 'Youtube',
    href: '#',
    icon: YoutubeIcon,
  }, */
  {
    label: 'Telegram',
    href: '#',
    icon: TelegramIcon,
  },
  {
    label: 'Linkedin',
    href: '#',
    icon: LinkedinIcon,
  },
];