import type { Coordinates } from '@shared/types/geo';
import type { MapPoint } from '@shared/types/map';

export interface MapProps extends Coordinates {
  points?: MapPoint[];

  readonly?: boolean;

  zoom?: number;

  className?: string;

  onChange?: (coords: Coordinates) => void;
}