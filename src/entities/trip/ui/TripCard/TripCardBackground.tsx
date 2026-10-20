import { CardImage, CardOverlay } from '@shared/ui';

type TripCardBackgroundProps = {
  src: string;
  alt: string;
};

export function TripCardBackground({ src, alt }: TripCardBackgroundProps) {
  return (
    <>
      <CardImage
        src={src}
        alt={alt}
        className="transition-transform duration-500 group-hover:scale-105"
      />

      <CardOverlay className="bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
    </>
  );
}
