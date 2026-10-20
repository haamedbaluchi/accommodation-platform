export const ACTIVE_MODAL = {
  LOCATION: 'location',
  STARTTRIP: 'startTrip',
  ENDTRIP: 'endTrip',
} as const;

export type ActiveModalType = (typeof ACTIVE_MODAL)[keyof typeof ACTIVE_MODAL];
