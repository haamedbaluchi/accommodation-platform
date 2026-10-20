'use client';

import Image from 'next/image';
import { useState } from 'react';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';

interface LocationImageGalleryProps {
  images: string[];
}

export const LocationImageGallery: React.FC<LocationImageGalleryProps> = ({
  images,
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);
  const count = images.length;

  if (count === 0) return null;

  const lightboxSlides = images.map((src) => ({ src }));

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(-1);

  if (count === 1) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div
          className="relative w-full h-40 xs:h-60.5 cursor-pointer overflow-hidden rounded-2xl group"
          onClick={() => openLightbox(0)}
        >
          <Image
            src={images[0]}
            alt="gallery-main"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
        <Lightbox
          open={lightboxIndex >= 0}
          index={lightboxIndex}
          close={closeLightbox}
          slides={lightboxSlides}
        />
      </div>
    );
  }

  if (count >= 2 && count <= 4) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div
          className={`grid grid-cols-${count} gap-2  h-40 xs:h-60.5 rounded-2xl overflow-hidden`}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative w-full h-full cursor-pointer group"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={src}
                alt={`gallery-${idx}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
        <Lightbox
          open={lightboxIndex >= 0}
          index={lightboxIndex}
          close={closeLightbox}
          slides={lightboxSlides}
        />
      </div>
    );
  }

  const displayImages = images.slice(0, 5);
  const remainingCount = count - 5;

  return (
    <div className="w-full">
      <div className="grid grid-cols-4 grid-rows-2 gap-1 md:gap-2 h-40 xs:h-60.5 rounded-2xl overflow-hidden">
        <div
          className="relative col-span-2 row-span-2 cursor-pointer group"
          onClick={() => openLightbox(0)}
        >
          <Image
            src={displayImages[0]}
            alt="gallery-main"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-103"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {displayImages.slice(1, 5).map((src, index) => {
          const imageIndex = index + 1;
          const isLastVisibleImage = index === 3 && remainingCount > 0;

          return (
            <div
              key={imageIndex}
              className="relative cursor-pointer group"
              onClick={() => openLightbox(imageIndex)}
            >
              <Image
                src={src}
                alt={`gallery-thumbnail-${imageIndex}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {isLastVisibleImage && (
                <div
                  className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-2xl font-bold"
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(imageIndex);
                  }}
                >
                  +{remainingCount}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex >= 0 ? lightboxIndex : 0}
        close={closeLightbox}
        slides={lightboxSlides}
        // plugins={[Zoom]} // اگر پلاگین زوم را نصب کرده‌اید
      />
    </div>
  );
};
