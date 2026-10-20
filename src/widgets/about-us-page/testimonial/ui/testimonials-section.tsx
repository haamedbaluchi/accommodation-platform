import { ChevronLeft } from '@hugeicons/core-free-icons';
import { testimonialColumns } from '../model/mock-testimonials';
import { TestimonialCard } from './testimonial-card';
import { HugeiconsIcon } from '@hugeicons/react';

interface TestimonialsSectionProps {
  onShowMore?: () => void;
}

export function TestimonialsSection({ onShowMore }: TestimonialsSectionProps) {
  return (
    <section
      dir="rtl"
      className="rounded-[32px] bg-[#F3F4FB] px-4 py-14 sm:px-8 sm:py-16 lg:px-16 max-w-7xl mx-auto"
    >
      <header className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-extrabold leading-[1.7] text-[#151823] sm:text-[28px] lg:text-[32px]">
          کاربرها چطور با بومو سفرشان را شروع کردند؟
        </h2>
        <p className="mt-4 text-[13px] leading-7 text-slate-500 sm:text-[15px]">
          از انتخاب مقصد تا مدیریت بودجه، بومو کمک می‌کند برنامه‌ریزی سفر
          ساده‌تر و شخصی‌تر شود.
        </p>
      </header>

      <div className="relative mt-10 lg:mt-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {testimonialColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-5 sm:gap-6">
              {column.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          ))}
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F3F4FB] via-[#F3F4FB]/85 to-transparent sm:h-36"
        />
      </div>

      <div className="relative z-10 -mt-5 flex justify-center sm:-mt-7">
        <button
          type="button"
          onClick={onShowMore}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-[#151823] shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-colors hover:bg-slate-50"
        >
          مشاهده بیشتر
          <HugeiconsIcon icon={ChevronLeft} className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
