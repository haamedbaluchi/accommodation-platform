'use client';

import { toast } from 'sonner';
import { Button } from '@shared/ui';

export function TripsHeaderTeamButton() {
  return (
    <Button
      variant="outline"
      rounded="full"
      size="large"
      className="hidden md:flex"
      onClick={() => toast.info('این بخش بعدا اضافه میشود')}
    >
      تشکیل تیم سفر 🚀
    </Button>
  );
}
