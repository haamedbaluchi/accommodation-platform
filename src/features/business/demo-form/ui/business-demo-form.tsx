import {
  Button,
  Divider,
  TextArea,
  TextField,
} from '@shared/ui';
import { SelectField } from '@shared/ui/SelectField';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export function BusinessDemoForm() {
  return (
    <div className="rounded-[28px] border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 lg:p-7">
      <form className="space-y-5">
        <div className="space-y-4">
          <Divider text="اطلاعات پایه" />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <TextField
              label="نام"
              placeholder="فاطمه"
              sizeInput="sm"
            />

            <TextField
              label="نام خانوادگی"
              placeholder="ندافی"
              sizeInput="sm"
            />

            <TextField
              label="ایمیل کاری"
              placeholder="fateme.nadafi@gmail.com"
              sizeInput="sm"
              type="email"
            />

            <TextField
              label="تلفن"
              placeholder="۰۹۱۲۳۴۵۶۷۸۹"
              sizeInput="sm"
              type="tel"
            />

            <TextField
              label="نام شرکت"
              placeholder="تولید راه"
              sizeInput="sm"
            />

            <SelectField
              label="حوزه کاری"
              placeholder="انتخاب کنید"
              options={[
                { label: 'حمل و نقل', value: 'transport' },
                { label: 'اقامتگاه', value: 'accommodation' },
                { label: 'رستوران و کافه', value: 'restaurant-cafe' },
                { label: 'تور و تجربه محلی', value: 'local-tour' },
              ]}
            />
          </div>
        </div>

        <div className="space-y-4">
          <Divider text="نیاز همکاری" />

          <TextArea
            label="هدف شما از همکاری با بومرو چیست؟"
            size="small"
            placeholder="مثل: افزایش نرخ تبدیل، رزرو، معرفی برند..."
            className="mt-1 w-full resize-none rounded-2xl border border-border px-4 py-3 text-sm text-text-main outline-none transition-colors placeholder:text-text-foreground hover:border-border-primary focus:border-border-primary-active"
          />

          <SelectField
            label="چطور با ما آشنا شدید؟"
            placeholder="انتخاب کنید"
            options={[
              { label: 'اینستاگرام', value: 'instagram' },
              { label: 'لینکدین', value: 'linkedin' },
              { label: 'معرفی دوستان', value: 'friends' },
              { label: 'جست‌وجو در گوگل', value: 'google' },
            ]}
          />
        </div>

        <div className="space-y-4">
          <Divider text="توضیحات تکمیلی" />

          <TextArea
            label="سؤال یا موضوع مورد نظر شما"
            size="small"
            placeholder="مثلاً: برای وب‌سایتِ آژانسِ مسافرتی‌مان به دمو نیاز دارم..."
            className="mt-1 w-full resize-none rounded-2xl border border-border px-4 py-3 text-sm text-text-main outline-none transition-colors placeholder:text-text-foreground hover:border-border-primary focus:border-border-primary-active"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Button
            type="submit"
            variant="primary"
            size="medium"
            rounded="full"
            className="w-full lg:h-13.75 lg:px-5 lg:py-1 lg:gap-2.5 lg:font-normal lg:text-lg"
          >
            درخواست دمو اختصاصی
          </Button>

          <p className="flex items-start justify-start gap-1 text-right text-sm text-secondary-tint-8">
            <InformationCircleIcon className="h-4 w-4" />
            توجه: تیم بومرو پس از بررسی اطلاعات، برای هماهنگی با شما تماس
            می‌گیرد.
          </p>
        </div>
      </form>
    </div>
  );
}