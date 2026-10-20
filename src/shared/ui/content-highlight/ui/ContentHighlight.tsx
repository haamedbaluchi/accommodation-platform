'use client';

import { cn } from '@shared/lib';
import { motion } from 'framer-motion';
import { ContentHighlightMedia } from './ContentHighlightMedia';
import { ContentHighlightContent } from './ContentHighlightContent';
import { contentHighlightAnimations, ContentHighlightProps } from '../model';
export function ContentHighlight({
  title,
  description,
  imageSrc,
  imageAlt,
  className,
  reverse = false,
  animationType = 'fadeUp',
  children,
  imageWidth = 1200,
  imageHeight = 1536,
}: ContentHighlightProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-100px' }}
      variants={contentHighlightAnimations[animationType]}
      className={cn(
        'mx-auto flex max-w-7xl flex-col items-center gap-4 sm:gap-8 px-8 sm:px-4 py-8 sm:py-16 md:px-8',
        reverse ? 'md:flex-row' : 'md:flex-row-reverse',
        className,
      )}
    >
      <ContentHighlightMedia
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
      <ContentHighlightContent title={title} description={description}>
        {children}
      </ContentHighlightContent>
    </motion.section>
  );
}
