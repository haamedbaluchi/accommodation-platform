'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

const trips = [
  'trip_story_1.webp',
  'trip_story_2.webp',
  'trip_story_3.webp',
  'trip_story_4.webp',
];

export function TripStoryGallery() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-100px' }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.7, ease: 'easeOut' },
        },
      }}
      className="w-full py-12 sm:py-24 lg:py-35"
    >
      <div className="mx-auto flex w-full max-w-268 flex-col items-center gap-8 sm:gap-16 lg:gap-24 px-4">
        <h2 className="text-center font-yekta text-xl sm:text-3xl font-black text-text-main md:text-5xl">
          قصه‌ی سفرت رو با بومو بساز و ما رو خبر کن!
        </h2>

        <div className="grid w-full grid-cols-4 gap-1 sm:gap-6">
          {trips.map((trip, index) => (
            <div
              key={trip}
              className="group relative mx-auto w-full max-w-18.5 xs:max-w-30 md:max-w-62.5 overflow-hidden rounded-xl sm:rounded-4xl"
            >
              <div className="relative h-24.5 xs:h-35 sm:h-45 md:h-60 lg:h-87.5 w-full">
                <Image
                  src={`/images/landing_page/optimized/${trip}`}
                  alt={`تصویر قصه سفر شماره ${index + 1}`}
                  fill
                  //   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
