import { InspirationRecommendation } from '../../model/types';

interface RecommendedSectionProps {
  recommendations: InspirationRecommendation[];
}

export function RecommendedSection({
  recommendations,
}: RecommendedSectionProps) {
  return (
    <section className="border-b border-gray-200 py-5">
      <h2 className="mb-3 text-base lg:text-xl font-black text-text-main">
        چرا این سفر را پیشنهاد می‌کنم؟
      </h2>

      <div className="grid grid-cols-1 gap-x-1 gap-y-2.5 lg:gap-y-4 md:grid-cols-2">
        {recommendations.map((item) => (
          <article key={item.title}>
            <h3 className="mb-0 lg:mb-1 text-sm lg:text-base font-bold text-text-main">
              {item.icon} {item.title}
            </h3>

            <p className="text-[13px] lg:text-sm font-medium leading-7 text-text-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
