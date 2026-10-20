import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button, Tooltip } from "@shared/components/ui";

export function Header() {
  return (
    <div className="font-yekta space-y-1.5 mb-5">
      <Tooltip content="بستن">
        <Button
          variant="ghost"
          rounded="full"
          size="icon"
          aria-label="بستن مدال"
        >
          <XMarkIcon className="w-5 h-5 text-text-foreground text-end" />
        </Button>
      </Tooltip>
      <h2 className="text-text-main font-bold text-2xl text-center">
        ۳ تا جا رو انتخاب کن! 🎯{' '}
      </h2>
      <p className="text-text-foreground font-normal text-base text-center">
        برای شروع، حداقل ۳ تا از این جاهای پرطرفدار رو به لیستت اضافه کن تا
        بومرو سلیقه‌ت رو بشناسه و جاهای بهتری بهت پیشنهاد بده.
      </p>
    </div>
  );
}
