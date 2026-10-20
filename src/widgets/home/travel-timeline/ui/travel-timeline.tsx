import { cn } from '@shared/lib';
import { questions } from '../model/travel-timeline.data';

export function TravelTimeline() {
  return (
    <section className="w-full bg-background">
      <div className="relative mx-auto w-full max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="relative pr-8">
          <div
            aria-hidden="true"
            className="absolute right-[1.5px] top-1 h-full border-r border-sky-100"
          />

          <div className="space-y-3">
            {questions.map((item, index) => (
              <article key={item.id} className="relative">
                {/* Timeline dot */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute -right-9.5 top-1.5 flex size-4 items-center justify-center rounded-full',
                    index === 0
                      ? 'bg-primary ring-1 outline-1  outline-offset-3  outline-primary'
                      : 'bg-active-item-background',
                  )}
                ></span>

                <div className="text-right">
                  <h3 className="flex flex-row items-center justify-start gap-1 text-sm sm:text-xl font-bold text-text-main">
                    <span>{item.title}</span>
                    <span className="text-sm sm:text-xl leading-none">{item.icon}</span>
                  </h3>

                  <p className="mt-1 text-xs font-medium text-text-foreground sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
