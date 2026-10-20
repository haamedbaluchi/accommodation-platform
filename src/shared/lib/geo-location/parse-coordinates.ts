export function parseCoordinates(
  lat: unknown,
  lng: unknown,
): { lat: number; lng: number } | undefined {
  const parsedLat = typeof lat === 'number' ? lat : Number(lat);
  const parsedLng = typeof lng === 'number' ? lng : Number(lng);

  if (!Number.isFinite(parsedLat) || !Number.isFinite(parsedLng)) {
    return undefined;
  }

  return { lat: parsedLat, lng: parsedLng };
}