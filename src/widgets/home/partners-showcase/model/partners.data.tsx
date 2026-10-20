export type PartnerType = {
  id: number;
  text: string;
  isMain: boolean;
  subText?: string;
  logoUrl?: string;
  url?: string;
};
export const PARTNERS_DATA: PartnerType[] = [
  { id: 1, text: 'Join Boomro', isMain: false },
  {
    id: 2,
    text: 'نشان',
    isMain: true,
    subText: 'نشان، بخشی از تجربه هوشمند سفر در بومو',
    logoUrl:"/images/partners/neshan.svg",
    url:"http://platform.neshan.org"
  },

  {
    id: 3,
    text: 'شب',
    subText: 'شب، حالا بخشی از تجربه هوشمند سفر در بومو',
    isMain: true,
    logoUrl: '/images/logo-shab.svg',
    url: 'https://shab.ir',
  },

  {
    id: 4,
    text: 'جنوب باما',
    subText: 'جنوب باما هم بخشی از سفر در بومو',
    isMain: true,
    logoUrl: '/images/jonob_ba_ma.jpg',
    url: 'https://www.instagram.com/jonoubbama_com?igsh=MW4xeHM2M2Z2dnB6eQ==',
  },

  { id: 5, text: 'YOUR BRAND', isMain: false },
];
