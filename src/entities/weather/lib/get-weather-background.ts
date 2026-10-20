import { WEATHER_BACKGROUNDS } from '../model/weather-backgrounds';

export function getWeatherBackground(
  weatherCode: number,
  windSpeed: number,
): string {
  /*
   * باد شدید اولویت دارد.
   * WMO code برای باد code جداگانه ندارد.
   */

  // آفتابی
  if (weatherCode === 0) {
    return WEATHER_BACKGROUNDS.sunny;
  }

  // عمدتاً آفتابی / نیمه ابری
  if (weatherCode === 1 || weatherCode === 2) {
    return WEATHER_BACKGROUNDS.partlyCloudy;
  }

  // ابری
  if (weatherCode === 3) {
    return WEATHER_BACKGROUNDS.cloudy;
  }

  // مه
  if (weatherCode === 45 || weatherCode === 48) {
    return WEATHER_BACKGROUNDS.fog;
  }

  // نم‌نم باران
  if (weatherCode >= 51 && weatherCode <= 55) {
    return WEATHER_BACKGROUNDS.drizzle;
  }

  // باران
  if (weatherCode >= 61 && weatherCode <= 65) {
    return WEATHER_BACKGROUNDS.rain;
  }

  // برف
  if (weatherCode >= 71 && weatherCode <= 75) {
    return WEATHER_BACKGROUNDS.snow;
  }

  // رعد و برق
  if (weatherCode === 95) {
    return WEATHER_BACKGROUNDS.thunderstorm;
  }

  // تگرگ
  if (weatherCode === 96 || weatherCode === 99) {
    return WEATHER_BACKGROUNDS.hail;
  }
  if (windSpeed >= 30) {
    return WEATHER_BACKGROUNDS.windy;
  }

  return WEATHER_BACKGROUNDS.cloudy;
}
