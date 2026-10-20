import { Dialog } from '@shared/ui';
import GuideSection from './guide-section';

export default function GuideModal({ open, setOpen }) {
  return (
    <Dialog
      title="از بومرو سوال بپرسم؟"
      description="هر چیزی درباره سفر تو ذهنت هست، مثل حرف زدن با یه دوست از بومرو بپرس."
      isOpen={open}
      onClose={setOpen}
    >
      <div className="w-full h-full px-2">
        <GuideSection />
      </div>
    </Dialog>
  );
}
