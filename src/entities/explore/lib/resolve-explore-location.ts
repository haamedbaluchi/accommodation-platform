import { iranProvincesSearchData } from "@shared/constants";

interface ResolvedLocation {
  provinceId: number;
  provinceName: string;
  cityName?: string;
}

const normalizeText = (value: string) => {
  return value
    .trim()
    .toLowerCase()
    .replace(/ي/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/\u200c/g, ' ')
    .replace(/\s+/g, ' ');
};

export function resolveExploreLocation(
  search: string,
): ResolvedLocation | null {
  const normalizedSearch = normalizeText(search);

  if (!normalizedSearch) {
    return null;
  }

  /*
   * 1. اول خود استان را بررسی می‌کنیم
   *
   * تهران
   * رستوران تهران
   * رستوران فلان تهران
   */
  const provinceMatch = iranProvincesSearchData.find((item) => {
    const province = normalizeText(item.province);

    return normalizedSearch.includes(province);
  });

  if (provinceMatch) {
    return {
      provinceId: provinceMatch.provinceId,
      provinceName: provinceMatch.province,
    };
  }

  /*
   * 2. اگر استان پیدا نشد، شهرها را بررسی می‌کنیم
   *
   * رامسر
   * رستوران رامسر
   * هتل فلان در رامسر
   */
  for (const province of iranProvincesSearchData) {
    const cityMatch = province.cities.find((city) =>
      normalizedSearch.includes(normalizeText(city)),
    );

    if (cityMatch) {
      return {
        provinceId: province.provinceId,
        provinceName: province.province,
        cityName: cityMatch,
      };
    }
  }

  return null;
}