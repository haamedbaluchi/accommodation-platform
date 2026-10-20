import { Button, Dialog ,Loader} from '@shared/ui';
import dynamic from 'next/dynamic';
const BookingHotelForm = dynamic(() =>
  import('./BookingHotelForm').then((mod) => mod.BookingHotelForm),
{
  ssr:false,
  loading:()=>(
    <div className='h-62'>
      <Loader size={8}/>
    </div>
  )
}
);
export function BookingHotelModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: () => void;
}) {
  return (
    <Dialog
     size='large'
      title="کجا قراره بمونی؟"
      description="اسم اقامتگاه و زمان موندنت رو بگو؛ پیدا کردن آدرس و شماره‌تماسش با بومرو!😎"
      isOpen={open}
      onClose={setOpen}
      footer={
        <Button
          rounded="full"
          size="large"
          form="booking-hotel-form"
          type="submit"
        >
          ثبت اقامتگاه 🚀
        </Button>
      }
    >
      <BookingHotelForm />
    </Dialog>
  );
}
