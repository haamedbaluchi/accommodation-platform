interface JourneyExperienceSectionProps {
  title?: string;
  description?: string;
}

export function JourneyExperienceSection({
  title,
  description,
}: JourneyExperienceSectionProps) {
  return (
    <section className="border-b border-gray-200 flex flex-col py-5">
      <h2 className="mb-1 lg:mb-2 text-base lg:text-xl font-black text-text-main">
        {title ?? '🚗 تجربه مسیر'}
      </h2>

      <p className="text-[13px] lg:text-sm font-medium leading-7 text-text-foreground">
        {description ??
          `برای سفر به قشم تصمیم گرفتیم مسیر زمینی را انتخاب کنیم تا علاوه بر رسیدن به مقصد، خود مسیر هم بخشی از تجربه سفر باشد.
از تهران حرکت کردیم و بعد از رسیدن به بندرعباس، مسیر دریایی تا جزیره قشم را ادامه دادیم. این روش زمان بیشتری نسبت به پرواز نیاز دارد، اما آزادی بیشتری برای جابه‌جایی در جزیره به ما می‌دهد.
یکی از بهترین بخش‌های این مسیر، توقف‌های کوتاه در شهرهای بین راه و دیدن تغییر تدریجی منظره‌ها از مناطق مرکزی ایران تا سواحل جنوب بود.
اگر قصد دارید در قشم از مکان‌های مختلفی مثل دره ستارگان، تنگه چاهکوه، جنگل حرا و سواحل اطراف دیدن کنید، داشتن خودرو شخصی می‌تواند تجربه سفر را بسیار راحت‌تر کند.`}
      </p>
    </section>
  );
}
