import { Button, Dialog } from '@shared/ui';
import { DeleteIcon } from '@shared/assets/icons';

export default function DeletePlaceModal() {
  return (
    <Dialog
      type="delete"
      title="حذف مکان"
      description="آیا مطمئن هستید میخواهید این مکان را حذف کنید ؟"
      trigger={
        <Button
          rounded="full"
          size="icon"
          variant="ghost"
          aria-label="حذف مقصد"
        >
          <DeleteIcon className="w-4 h-4 md:w-5 md:h-5" />
        </Button>
      }
      footer={
        <>
          <Button variant="outlineError" rounded="md" size="small">
            انصراف
          </Button>
          <Button variant="error" rounded="md" size="small">
            آره حذفش کن
          </Button>
        </>
      }
    ></Dialog>
  );
}
