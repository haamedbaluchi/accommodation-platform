import { buildFileUrl } from '@shared/lib';

export function buildTripImage(
  image?: string | null,
) {
  return (
    buildFileUrl(image) ??
    '/images/bg_home.jpg'
  );
}