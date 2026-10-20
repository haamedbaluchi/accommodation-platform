import { PlusIcon } from '@heroicons/react/24/outline';
import { Loader } from '@shared/components/shared';
import { Button, Drawer } from '@shared/components/ui';
import dynamic from 'next/dynamic';

const DrawerVeiw = dynamic(
  () => import('./DrawerVeiw').then((mod) => mod.DrawerVeiw),
  {
    ssr: true,
    loading: () => (
      <div className="w-3xl h-full flex justify-center">
        <Loader size={8} />
      </div>
    ),
  },
);

export function TasteProfileDrawer() {
  return (
    <Drawer
      title="selectFavoriteLocation"
      trigger={
        <Button
          rounded="full"
          size="large"
          leftIcon={<PlusIcon className="w-4 h-4" />}
        >
          شروع ساختن لیست سفر
        </Button>
      }
      side="bottom"
      className="max-w-5xl h-[85%] max-h-223 overflow-y-auto custom-scrollbar rounded-t-3xl px-5 py-3"
    >
      <DrawerVeiw />
    </Drawer>
  );
}
