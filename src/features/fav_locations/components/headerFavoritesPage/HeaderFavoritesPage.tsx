import { PlusIcon } from '@heroicons/react/24/solid';
import { HeaderPage } from '@shared/layout';
import { Button } from '@shared/ui';

export default function HeaderFavoritesPage() {
  return (
    <HeaderPage
      leading={
        <h2 className="font-bold font-yekta text-xl text-text-main">
          هوش مصنوعی بومرو
        </h2>
      }
      trailing={
        <>
          {/* <Button variant="outline" rounded="full" size="large">
            تشکیل تیم سفر 🚀
          </Button> */}
          <Button
            rounded="full"
            size="large"
            rightIcon={<PlusIcon className="w-4 h-4" />}
          >
            ایجاد سفر جدید
          </Button>
        </>
      }
    />
  );
}
