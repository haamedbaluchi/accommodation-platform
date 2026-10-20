'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { EditIcon } from '@shared/assets/icons';
import { Button, Dialog,Loader } from '@shared/ui';
import { ACTIVE_MODAL, ActiveModalType } from './constants';

const LocationEdit = dynamic(
  () => import('./LocationEdit').then((mod) => mod.LocationEdit),
  {
    ssr: false,
    loading: () => (
      <div className="h-90">
        <Loader size={8} />
      </div>
    ),
  },
);

export function EditModal() {
  const [activeModal, setActiveModal] = useState<ActiveModalType>(
    ACTIVE_MODAL.LOCATION,
  );
  const titleModal = ACTIVE_MODAL.LOCATION
    ? 'این بخش رو تغییر بدیم؟'
    : ACTIVE_MODAL.STARTTRIP
      ? 'زمان شروع'
      : 'زمان پایان';
  const descriptionModal = ACTIVE_MODAL.LOCATION
    ? ' اگه دوست داری، می‌تونی  این قسمت از سفرت رو ویرایش  کنی.'
    : '';
  return (
    <Dialog
      title={titleModal}
      description={descriptionModal}
      size='large'
      trigger={
        <Button
          rounded="full"
          size="icon"
          variant="ghost"
          aria-label="ویرایش مقصد"
        >
          <EditIcon className="w-4 h-4 md:w-5 md:h-5" />
        </Button>
      }
      footer={
        <Button size="small" rounded="full">
          بروزرسانی مشخصات
        </Button>
      }
    >
      <LocationEdit />
    </Dialog>
  );
}
