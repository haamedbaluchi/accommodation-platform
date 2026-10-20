// entities/explore/accommodation/model/types.ts
export type AccommodationTag = {
  id: string;
  label: string;
  icon?: string;
};

export type Accommodation = {
  id: string;
  coverImage: string;
  badgeLabel: string;
  title: string;
  location: string;
  tags: AccommodationTag[]; // معمولاً ۲ تا
  rating: number;
  experienceCount: number;
};