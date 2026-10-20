export const ALL_IRAN_VALUE = '__all_iran__';

export interface IranProvince {
  id: number;
  value: string;
  lat: number;
  lng: number;
}

export const iranProvincesWithGeo: IranProvince[] = [
  { id: 1, value: 'آذربایجان شرقی', lat: 38.0692, lng: 46.2998 },
  { id: 2, value: 'آذربایجان غربی', lat: 37.5527, lng: 45.0761 },
  { id: 3, value: 'اردبیل', lat: 38.2498, lng: 48.2933 },
  { id: 4, value: 'اصفهان', lat: 32.6546, lng: 51.668 },
  { id: 5, value: 'البرز', lat: 35.84, lng: 50.9391 },
  { id: 6, value: 'ایلام', lat: 33.6374, lng: 46.4227 },
  { id: 7, value: 'بوشهر', lat: 28.9234, lng: 50.8203 },
  { id: 8, value: 'تهران', lat: 35.6892, lng: 51.389 },
  { id: 9, value: 'چهارمحال و بختیاری', lat: 32.3256, lng: 50.8644 },
  { id: 10, value: 'خراسان جنوبی', lat: 32.8649, lng: 59.2262 },
  { id: 11, value: 'خراسان رضوی', lat: 36.2605, lng: 59.6168 },
  { id: 12, value: 'خراسان شمالی', lat: 37.4747, lng: 57.329 },
  { id: 13, value: 'خوزستان', lat: 31.3183, lng: 48.6706 },
  { id: 14, value: 'زنجان', lat: 36.6736, lng: 48.4787 },
  { id: 15, value: 'سمنان', lat: 35.5769, lng: 53.3959 },
  { id: 16, value: 'سیستان و بلوچستان', lat: 29.4963, lng: 60.8629 },
  { id: 17, value: 'فارس', lat: 29.5918, lng: 52.5837 },
  { id: 18, value: 'قزوین', lat: 36.2688, lng: 50.0041 },
  { id: 19, value: 'قم', lat: 34.6416, lng: 50.8746 },
  { id: 20, value: 'کردستان', lat: 35.3219, lng: 46.9862 },
  { id: 21, value: 'کرمان', lat: 30.2839, lng: 57.0834 },
  { id: 22, value: 'کرمانشاه', lat: 34.3142, lng: 47.065 },
  { id: 23, value: 'کهگیلویه و بویراحمد', lat: 30.6682, lng: 51.588 },
  { id: 24, value: 'گلستان', lat: 36.8388, lng: 54.4348 },
  { id: 25, value: 'گیلان', lat: 37.2809, lng: 49.5832 },
  { id: 26, value: 'لرستان', lat: 33.4878, lng: 48.3558 },
  { id: 27, value: 'مازندران', lat: 36.5633, lng: 53.0601 },
  { id: 28, value: 'مرکزی', lat: 34.0917, lng: 49.6892 },
  { id: 29, value: 'هرمزگان', lat: 27.1832, lng: 56.2666 },
  { id: 30, value: 'همدان', lat: 34.7992, lng: 48.5146 },
  { id: 31, value: 'یزد', lat: 31.8974, lng: 54.3569 },
];
