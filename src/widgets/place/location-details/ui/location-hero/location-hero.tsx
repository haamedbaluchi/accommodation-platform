import React from 'react';
import { LocationBasicInfo } from './location-basic-info';
import { LocationImageGallery } from './location-image-gallery';
import { LocationKeyInfo } from './location-key-info';

interface LocationHeroProps {
  category: string;
  commentsCount: string;
  rating: string;
  shortAddress: string;
  title: string;
  images: string[];
  admissionFee: string;
  openStatus: boolean;
  suggestedVisitTime: string;
}

export function LocationHero({
  category,
  commentsCount,
  rating,
  shortAddress,
  title,
  images,
  admissionFee,
  openStatus,
  suggestedVisitTime,
}: LocationHeroProps) {
  return (
    <section className="pb-5 border-b border-dashed border-text-muted-foreground">
      <div className="flex flex-col gap-5">
        <LocationBasicInfo
          category={category}
          commentsCount={commentsCount}
          rating={rating}
          shortAddress={shortAddress}
          title={title}
        />
        <LocationImageGallery images={images} />
        <LocationKeyInfo
          admissionFee={admissionFee}
          openStatus={openStatus}
          suggestedVisitTime={suggestedVisitTime}
        />
      </div>
    </section>
  );
}
