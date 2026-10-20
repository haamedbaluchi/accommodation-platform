import { ReactNode } from 'react';

import { CardContent } from '@shared/ui';

type TripCardContentProps = {
  children: ReactNode;
};

export function TripCardContent({ children }: TripCardContentProps) {
  return (
    <CardContent className="absolute inset-x-0 bottom-0 flex flex-row items-end justify-between p-5">
      {children}
    </CardContent>
  );
}
