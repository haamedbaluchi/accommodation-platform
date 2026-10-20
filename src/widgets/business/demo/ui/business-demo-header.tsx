import { Chip } from '@shared/ui';

const demoBenefits = [
  'بررسی اختصاصی کسب‌وکار شما',
  'پاسخ‌گویی سریع',
  'دموی متناسب با سناریوی واقعی شما',
];

export function BusinessDemoHeader() {
  return (
    <div className="text-center lg:text-right">
      <h2 className="text-3xl font-black leading-[140%] tracking-[0] text-neutral-9 sm:text-4xl lg:text-[48px]">
        دموی اختصاصی؛
        <br />
        برای کسب‌وکار شما
      </h2>

      <p className="mt-5 max-w-sm text-sm leading-8 text-neutral-6 sm:text-base">
        اطلاعات کسب‌وکار خود را وارد کنید تا تیم بومو، متناسب با نیازها و
        سناریوی کاری شما، یک دموی اختصاصی و شخصی‌سازی‌شده آماده کند.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
        {demoBenefits.map((item) => (
          <Chip key={item} variant="success" text={item} />
        ))}
      </div>
    </div>
  );
}