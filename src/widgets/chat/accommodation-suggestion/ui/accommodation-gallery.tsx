// // components/accommodation/AccommodationGallery.tsx
// 'use client';

// import Image from 'next/image';
// import { useMemo, useState } from 'react';
// import Lightbox from 'yet-another-react-lightbox';
// import 'yet-another-react-lightbox/styles.css';
// import type { AccommodationImage } from '../model/types';

// type AccommodationGalleryProps = {
//   images: AccommodationImage[];
//   title: string;
// };

// export function AccommodationGallery({
//   images,
//   title,
// }: AccommodationGalleryProps) {
//   const [open, setOpen] = useState(false);
//   const [index, setIndex] = useState(0);

//   const slides = useMemo(
//     () =>
//       images.map((image) => ({
//         src: image.src,
//         alt: image.alt ?? title,
//       })),
//     [images, title]
//   );

//   if (!images.length) return null;

//   const mainImage = images[0];
//   const thumbnails = images.slice(1, 4);

//   const openLightbox = (slideIndex: number) => {
//     setIndex(slideIndex);
//     setOpen(true);
//   };

//   return (
//     <>
//       <div className="lg:sticky lg:top-6">
//         <div className="flex flex-col gap-2.5">
//           <button
//             type="button"
//             onClick={() => openLightbox(0)}
//             className="group block w-full"
//             aria-label={`نمایش تصویر اصلی ${title}`}
//           >
//             <div className="relative aspect-16/11 w-full overflow-hidden rounded-2xl bg-neutral-100">
//               <Image
//                 src={mainImage.src}
//                 alt={mainImage.alt ?? title}
//                 fill
//                 priority
//                 className="object-cover transition duration-300 group-hover:scale-[1.03]"
//                 sizes="(max-width: 1024px) 100vw, 380px"
//               />
//             </div>
//           </button>

//           {thumbnails.length > 0 && (
//             <div className="grid grid-cols-3 gap-2.5">
//               {thumbnails.map((image, thumbIndex) => {
//                 const actualIndex = thumbIndex + 1;

//                 return (
//                   <button
//                     key={`${image.src}-${actualIndex}`}
//                     type="button"
//                     onClick={() => openLightbox(actualIndex)}
//                     className="group block w-full"
//                     aria-label={`نمایش تصویر ${actualIndex + 1} ${title}`}
//                   >
//                     <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-100">
//                       <Image
//                         src={image.src}
//                         alt={image.alt ?? `${title} ${actualIndex + 1}`}
//                         fill
//                         className="object-cover transition duration-300 group-hover:scale-[1.03]"
//                         sizes="(max-width: 1024px) 30vw, 120px"
//                       />
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>

//       <Lightbox
//         open={open}
//         close={() => setOpen(false)}
//         index={index}
//         slides={slides}
//       />
//     </>
//   );
// }
'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';

import 'yet-another-react-lightbox/styles.css';

import type { AccommodationImage } from '../model/types';

type AccommodationGalleryProps = {
  images: AccommodationImage[];
  title: string;
};

export function AccommodationGallery({
  images,
  title,
}: AccommodationGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = useMemo(
    () =>
      images.map((image) => ({
        src: image.src,
        alt: image.alt ?? title,
      })),
    [images, title],
  );

  if (!images.length) return null;

  const mainImage = images[0];
  const thumbnails = images.slice(1, 4);

  const openLightbox = (slideIndex: number) => {
    setIndex(slideIndex);
    setOpen(true);
  };

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="group block w-full"
            aria-label={`نمایش تصویر اصلی ${title}`}
          >
            <div className="relative aspect-16/11 w-full overflow-hidden rounded-2xl bg-neutral-100">
              <Image
                src={mainImage.src}
                alt={mainImage.alt ?? title}
                fill
                priority
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 680px) 100vw, 240px"
              />
            </div>
          </button>

          {thumbnails.length > 0 && (
            <div className="grid grid-cols-3 gap-2.5">
              {thumbnails.map((image, thumbIndex) => {
                const actualIndex = thumbIndex + 1;

                return (
                  <button
                    key={`${image.src}-${actualIndex}`}
                    type="button"
                    onClick={() => openLightbox(actualIndex)}
                    className="group block w-full"
                    aria-label={`نمایش تصویر ${actualIndex + 1} ${title}`}
                  >
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-100">
                      <Image
                        src={image.src}
                        alt={
                          image.alt ??
                          `${title} ${actualIndex + 1}`
                        }
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                        sizes="(max-width: 680px) 33vw, 75px"
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </>
  );
}
