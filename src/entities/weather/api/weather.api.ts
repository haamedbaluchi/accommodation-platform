import { apiClient } from '@shared/api';

import type {
  RouteWeatherResponse,
  WeatherForecastRequest,
} from '../model/types';

export const weatherApi = {
  getForecast: (body: WeatherForecastRequest) =>
    apiClient<RouteWeatherResponse>(
      '/api/v1/weather/forecast',
      {
        method: 'POST',
        body: JSON.stringify(body),
      },
    ),
};