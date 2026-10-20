import { ReactNode } from 'react';

export interface PlaceType {
  imageSrc: string;
  imageAlt: string;
  title: ReactNode;
  subTitle: ReactNode;
  tags?: string[];
}
