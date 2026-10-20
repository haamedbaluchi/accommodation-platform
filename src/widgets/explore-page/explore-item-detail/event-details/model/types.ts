export type EventArtist = {
  id: string;
  name: string;
  role: string;
  avatar?: string;
};

export type EventDetailsData = {
  title?: string;
  categoryLabel?: string;

  dateDay?: string;
  dateMonth?: string;
  dateWeekday?:string
  timeLabel?: string;

  address?: string;
  fullAddress?: string;
  mapLink?: string;

  organizers?: string[];
  artists?: EventArtist[];

  ticketPrice?: string;

  images?: string[];
  coverImage?: string;

  description?: string;

  coordinates?: {
    lat: number;
    lng: number;
  };
};