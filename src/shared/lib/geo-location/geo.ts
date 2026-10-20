interface LatLng {
  lat: number;
  lng: number;
}

export function haversineDistance(a: LatLng, b: LatLng): number {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;

  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;

  return 2 * R * Math.asin(Math.sqrt(h));
}

export function findNearestProvince<T extends LatLng & { id: number }>(
  point: LatLng,
  provinces: T[],
): T | null {
  if (!provinces.length) return null;

  return provinces.reduce((closest, province) =>
    haversineDistance(point, province) < haversineDistance(point, closest)
      ? province
      : closest,
  provinces[0]);
}