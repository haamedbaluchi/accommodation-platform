import dynamic from 'next/dynamic';
import { Button, Dialog ,Loader} from '@shared/ui';
const NewFlightTicketForm = dynamic(() =>
  import('./NewFlightTicketForm').then((mod) => mod.NewFlightTicketForm),
  {
    ssr:false,
    loading:()=>(
        <div className='h-112'>
            <Loader size={8}/>
        </div>
    )
  }
);
export function NewFlightTicketModal({ open, setOpen }) {
  return (
    <Dialog
      size="large"
      title="بلیتت رو به بومرو بسپار!"
      description="اطلاعات بلیتت رو اینجا وارد کن تا روز سفر خیالت راحت باشه."
      isOpen={open}
      onClose={setOpen}
      footer={
        <Button
          rounded="full"
          type="submit"
          size="large"
          id="new-flight-ticket-form"
        >
          ثبت بلیت 🚀
        </Button>
      }
    >
      <NewFlightTicketForm/>
    </Dialog>
  );
}
