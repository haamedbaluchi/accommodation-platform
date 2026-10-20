export type NotificationCategory = 'trip-mate' | 'reminder' | 'checklist';
export type NotificationFilterKey = NotificationCategory | 'all' | 'unread';
export type NotificationIconKey = 'plane' | 'checklist' | 'building' | 'none';

export interface NotificationActor {
  id: string;
  name: string;
  avatarUrl?: string;
}

export type NotificationIcon = 'plane' | 'checklist' | 'building' | 'none';

export interface NotificationItem {
  id: string;
  category: NotificationCategory;
  badgeLabel: string;
  message: string;
  actor?: NotificationActor;
  icon?: NotificationIcon;
  createdAt: string;
  isRead: boolean;
}

export interface NotificationGroup {
  label: string;
  items: NotificationItem[];
}

export interface NotificationFilter {
  key: NotificationFilterKey;
  label: string;
}




export interface NotificationActor {
  id: string;
  name: string;
  avatarUrl?: string;
}


export interface NotificationItem {
  id: string;
  category: NotificationCategory;
  badgeLabel: string;
  message: string;
  actor?: NotificationActor;
  icon?: NotificationIconKey;
  createdAt: string;
  isRead: boolean;
}

