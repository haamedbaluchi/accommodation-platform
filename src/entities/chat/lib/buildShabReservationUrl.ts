type ShabTrackingParams = {
  houseId: string | number;
  checkin?: string;
  checkout?: string;
  guestsCount?: string | number;
  name?: string;
  family?: string;
  mobile?: string;
  utmContent?: string;
};

export function buildShabReservationUrl(params: ShabTrackingParams) {

  const url = new URL(`/houses/show/${params.houseId}`, 'https://www.shab.ir');

  url.searchParams.set('utm_source', 'boomro');
  url.searchParams.set('utm_medium', 'referral');
  url.searchParams.set('utm_campaign', 'referral_from_boomro');
  url.searchParams.set(
    'utm_content',
    params.utmContent ?? 'chat_ai_accommodation_card',
  );

  url.searchParams.set('house_id', String(params.houseId));

  if (params.checkin) {
    url.searchParams.set('checkin', params.checkin);
  }

  if (params.checkout) {
    url.searchParams.set('checkout', params.checkout);
  }

  if (params.guestsCount) {
    url.searchParams.set('guests_count', String(params.guestsCount));
  }
  if (params.name) url.searchParams.set('name', params.name);
  if (params.family) url.searchParams.set('family', params.family);
  if (params.mobile) url.searchParams.set('mobile', params.mobile);

  return url.toString();
}
