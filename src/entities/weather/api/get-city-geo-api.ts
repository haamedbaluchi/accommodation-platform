// entities/weather/api/get-city-geo-api.ts
import { apiClient } from '@shared/api';
import type { CityGeoResponse } from '../model/types';

export const getCityGeoApi = (cityName: string) =>
  apiClient<CityGeoResponse, { city_name: string }>(
    '/api/v1/weather/city-geo',
    {
      method: 'GET',
      params: { city_name: cityName },
    },
  );