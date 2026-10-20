const FALLBACK_IMAGES = [
  '/images/trips/tehran.jpg',
  '/images/trips/esfahan.jpg',
  '/images/trips/shiraz.png',
  '/images/trips/rasht.jpg',
];

export function getTripFallbackImage(tripId: number | string) {
  const numericId =
    typeof tripId === 'number'
      ? tripId
      : String(tripId)
          .split('')
          .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return FALLBACK_IMAGES[numericId % FALLBACK_IMAGES.length];
}
