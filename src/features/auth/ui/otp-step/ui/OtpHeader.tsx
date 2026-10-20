import Image from 'next/image';
import { Button } from '@shared/ui';
import { PencilIcon } from '@heroicons/react/24/outline';

interface OtpHeaderProps {
  phoneNumber: string;
  onEditPhone: VoidFunction;
}
export function OtpHeader({ phoneNumber, onEditPhone }: OtpHeaderProps) {
  return (
    <div className="mb-7 flex max-w-93 flex-col justify-center">
      <Image
        src="/images/lock.svg"
        alt="کد تایید"
        width={64}
        height={64}
        className="mx-auto"
      />

      <div className="mt-5 mb-3 text-center font-yekta">
        <h2 className="mb-3 text-2xl font-bold text-text-main md:text-3xl">
          کد رو برات فرستادیم!
        </h2>

        <p className="text-base font-bold text-text-foreground md:text-xl">
          کد تایید به شماره <span className="text-primary">{phoneNumber}</span>
          ارسال شد.
        </p>
      </div>

      <Button
        type="button"
        rounded="full"
        size="medium"
        variant="ghost"
        className="text-tertiary hover:text-tertiary-hover active:text-tertiary-active"
        rightIcon={<PencilIcon className="h-4 w-4" />}
        onClick={onEditPhone}
      >
        ویرایش شماره موبایل
      </Button>
    </div>
  );
}
