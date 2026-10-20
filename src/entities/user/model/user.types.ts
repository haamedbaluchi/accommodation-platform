export type ProfileTabId = 'trips' | 'favorites' | 'reviews';

export type UserProfile = {
  id: string | number;
  name: string;
  family_name: string;
  username: string;
  city?: string;
  gender?: string;
  social_media_link?: string;
  about?: string;
  email?: string;
  avatar_url?: string;
  avatar_alt?: string;
};

import { ReactNode } from 'react';

export interface ProfileMenuItem {
  id: string;
  label: string;
  icon?: ReactNode;
  destructive?: boolean;
  className?: string;
  onClick?: () => void;
}