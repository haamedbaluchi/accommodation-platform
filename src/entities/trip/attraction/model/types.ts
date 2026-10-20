import { Coordinates } from "@shared/types/geo";

export interface AttractionPoint {
  id: string;
  title: string;
  coordinates: Coordinates;
  category?: string;
  imageUrl?: string | null;
  shortAddress?: string;
  mapLink?: string;
  dayNumber?: number;
}
