import dynamic from 'next/dynamic';
import { Button, Dialog, Loader } from '@shared/ui';
import { PlusIcon } from '@heroicons/react/24/outline';

const SelectLocations = dynamic(
  () => import('./SelectLocations').then((mod) => mod.SelectLocations),
  {
    ssr: true,
    loading: () => (
      <div className="h-63.5">
        <Loader size={8} />
      </div>
    ),
  },
);

export function AddNewDestinationsModal({
  province,
}: {
  province: string | undefined;
}) {
  return (
    <Dialog
      title="برنامه جدید اضافه کنیم؟"
      description="یه مکان دیدنی یا فعالیت جذاب به این روز از سفرت اضافه کن."
      trigger={
        <Button
          variant="secondary"
          rounded="full"
          size="large"
          className="mt-3 w-36.25"
          leftIcon={<PlusIcon className="w-4 h-4" />}
        >
          افزودن برنامه جدید
        </Button>
      }
      footer={
        <Button size="small" rounded="full">
          بزن بریم!
        </Button>
      }
    >
      <SelectLocations province={province} />
    </Dialog>
  );
}
