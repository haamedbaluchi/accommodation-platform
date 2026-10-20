// entities/explore/local-event/model/types.ts
export type LocalEvent = {
  id: string;
  coverImage: string;
  dateDay: string;   // "۲۵"
  dateWeekday:string
  dateMonth: string; // "مرداد"
  title: string;
  location: string;
  tagLabel: string;
  tagIcon?: string;
  timeLabel: string; // "۱۷ تا ۲۳" یا "۱۹:۰۰"
};