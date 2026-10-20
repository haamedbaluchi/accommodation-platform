export type CityImageDto = {
  image_url: string;
  image_alt: string;
};

export type CityDto = {
  city_id: number;
  city_name: string;
  province: string;
  country: string;
  image: CityImageDto;
};
