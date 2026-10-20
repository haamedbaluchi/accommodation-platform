import { type ReactNode } from 'react';
import { type StaticImageData } from 'next/image';
import { ContentHighlightAnimationsType } from './content-highlight.animations';

export type ContentHighlightProps = {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;

  children?: ReactNode;
  className?: string;

  reverse?: boolean;
  animationType?: ContentHighlightAnimationsType;

  imageWidth?: number;
  imageHeight?: number;
};

export type ContentHighlightContentProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export type ContentHighlightMediaProps = {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
};
