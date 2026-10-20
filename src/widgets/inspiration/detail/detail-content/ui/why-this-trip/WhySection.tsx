import { InspirationWhySectionData } from '../../model/types';

interface WhySectionProps {
  data: InspirationWhySectionData;
}

export function WhySection({ data }: WhySectionProps) {
  return (
    <section className="border-b border-gray-200 py-5">
      <h2 className="mb-1 lg:mb-2 text-base lg:text-xl font-black text-text-main">
        {data.title ?? 'چرا این سفر را انتخاب کردم؟'}
      </h2>

      <p className="text-[13px] lg:text-sm font-medium leading-6 lg:leading-8 text-text-foreground">
        {data.description}
      </p>

      {data.tags?.length ? (
        <div className='flex items-start lg:items-center flex-col lg:flex-row mt-1.5'>
          <span className='text-text-main font-bold text-sm mb-1 lg:ml-1'>در این سفر تجربه کردم:</span>
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-emerald-50 px-2 lg:px-4 py-1 text-[0.625rem] lg:text-xs font-medium text-emerald-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
