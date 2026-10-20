import type { StaticImageData } from "next/image";

export interface StoryStep {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: StaticImageData;
  readonly circleClassName: string;
  readonly order: number;
}

export interface OriginStoryProps {
  readonly steps?: readonly StoryStep[];
  readonly className?: string;
  readonly heading?: string;
  readonly subtitle?: string;
}