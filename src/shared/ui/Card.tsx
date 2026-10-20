import * as React from 'react';
import { cn } from '@shared/lib';
import { Slot } from '@radix-ui/react-slot';
import Image, { ImageProps } from 'next/image';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
};


const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        ref={ref}
        className={cn(
          'flex flex-col overflow-hidden rounded-3xl bg-white shadow-md group',
          className,
        )}
        {...props}
      />
    );
  },
);

Card.displayName = 'Card';


// shared/ui/card/ui/CardMedia.tsx
type CardMediaProps = React.HTMLAttributes<HTMLDivElement>;

function CardMedia({ className, ...props }: CardMediaProps) {
  return (
    <div
      className={cn('relative h-56 w-full text-white', className)}
      {...props}
    />
  );
}

type CardImageProps = ImageProps;

// function CardImage({ className, alt, ...props }: CardImageProps) {
//   return (
//     <Image
//       fill
//       alt={alt}
//       className={cn(
//         'object-cover transition-transform duration-300 group-hover:scale-105',
//         className,
//       )}
//       {...props}
//     />
//   );
// }
function CardImage({ className, alt, ...props }: CardImageProps) {
  return (
    <Image
      fill
      alt={alt}
      className={cn(
        'object-cover transition-transform duration-300 group-hover:scale-105',
        className,
      )}
      {...props}
    />
  );
}

type CardOverlayProps = React.HTMLAttributes<HTMLDivElement>;

function CardOverlay({ className, ...props }: CardOverlayProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex',
        className,
      )}
      {...props}
    />
  );
}

type PropCardHeaders = React.HTMLAttributes<HTMLDivElement>;

function CardHeader({ className, ...props }: PropCardHeaders) {
  return (
    <div
      className={cn(
        'relative z-10 flex items-center justify-between p-4',
        className,
      )}
      {...props}
    />
  );
}

type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      className={cn(
        'relative z-10 flex flex-1 flex-col justify-end p-4',
        className,
      )}
      {...props}
    />
  );
}

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn(
        'text-2xl font-bold leading-none tracking-tight',
        className,
      )}
      {...props}
    />
  );
}

type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p className={cn('mt-2 text-sm text-gray-200', className)} {...props} />
  );
}
type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

// function CardFooter({ className, ...props }: CardFooterProps) {
//   return (
//     <div
//       className={cn('relative z-10 flex items-center p-4 pt-0', className)}
//       {...props}
//     />
//   );
// }
function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      className={cn('flex flex-1 flex-col justify-end gap-2 bg-white p-4 text-slate-900', className)}
      {...props}
    />
  );
}

const CardTags = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-wrap gap-2', className)} {...props} />
));
CardTags.displayName = 'CardTags';

const CardTag = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'inline-flex items-center rounded-full bg-white text-black px-3 py-1 text-xs font-medium',
      className,
    )}
    {...props}
  />
));
CardTag.displayName = 'CardTag';

const CardBadgeList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm',
      className,
    )}
    {...props}
  />
));
CardBadgeList.displayName = 'CardBadgeList';

export {
  Card,
  CardMedia,
  CardImage,
  CardOverlay,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardTags,
  CardTag,
  CardBadgeList,
};
