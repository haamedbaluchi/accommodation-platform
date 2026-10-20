
export interface WeatherCoordinates {
  latitude: number;
  longitude: number;
}

export interface WeatherForecastRequest {
  date: string;
  origin: WeatherCoordinates;
  destination: WeatherCoordinates;
}

export interface WeatherForecast {
  date: string;
  min_temperature: number;
  max_temperature: number;
  precipitation_probability: number;
  humidity: number;
  wind_speed: number;
  weather_code: number;
  weather: string;
}

export interface RouteWeatherResponse {
  origin: WeatherForecast;
  destination: WeatherForecast[];
}


export interface CityGeoResponse {
  success: boolean;
  message: string;
  data: {
    city_id: number;
    city_name: string;
    geo_location: WeatherCoordinates;
  };
}