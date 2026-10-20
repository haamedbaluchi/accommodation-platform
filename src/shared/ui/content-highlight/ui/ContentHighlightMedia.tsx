import Image from 'next/image';
import { ContentHighlightMediaProps } from '../model';

export function ContentHighlightMedia({
  src,
  alt,
  width = 1200,
  height = 1536,
}: ContentHighlightMediaProps) {
  return (
    <div className="flex w-full justify-center md:w-1/2">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, 600px"
        className="h-auto w-full max-w-3xl rounded-xl object-contain"
      />
    </div>
  );
}
