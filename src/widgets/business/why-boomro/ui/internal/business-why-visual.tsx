import Image from 'next/image';
import { Button } from '@shared/ui';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export function BusinessWhyVisual() {
  return (
    <div className="h-full rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm lg:p-7">
      <div className="mb-8 text-right">
        <h3 className="text-lg font-extrabold text-neutral-9">
          از دیده‌شدن تا انتخاب‌شدن
        </h3>

        <p className="mt-1 text-sm leading-7 text-neutral-6">
          کاربر در بومو فقط محتوا نمی‌بیند؛ مسیر سفرش را می‌سازد. این یعنی برند
          شما می‌تواند قبل از تصمیم نهایی، وارد ذهن و انتخاب او شود.
        </p>
      </div>

      <div className="mx-auto w-full max-w-107.05">
        <Image
          src="/images/why-boom.png"
          alt="مسیر تصمیم‌گیری سفر در بومرو"
          width={430}
          height={300}
          quality={100}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="mt-5 flex justify-start">
        <Button
          variant="primary"
          size="xx_large"
          rounded="full"
        >
          مشاهده مدل‌های همکاری
          <ArrowLeftIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}