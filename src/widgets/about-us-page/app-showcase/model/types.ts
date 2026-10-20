import type { StaticImageData } from "next/image";

export interface ShowcaseFeature {
  readonly id: string;
  readonly label: string;
}

export interface AppShowcaseProps {
  readonly phoneImage?: StaticImageData;
  readonly mapImage?: StaticImageData;
  readonly heading?: string;
  readonly description?: string;
  readonly features?: readonly ShowcaseFeature[];
  readonly className?: string;
}