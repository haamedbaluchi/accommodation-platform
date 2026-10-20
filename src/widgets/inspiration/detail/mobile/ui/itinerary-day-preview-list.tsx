import type { ItineraryDayType } from '@entities/travel-inspiration';

export function ItineraryDayPreviewList({ days }: { days: ItineraryDayType[] }) {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold text-text-main font-yekta">برنامه روزبه‌روز</h3>

      <div className="flex flex-col divide-y divide-text-muted-foreground">
        {days.map((day) => (
          <div key={day.id} className="flex items-center justify-between py-4">
            <span className="text-sm sm:text-base text-text-main font-yekta">
              <strong className="font-bold">{day.dayLabel} |</strong> {day.title}
            </span>
            <span className="text-lg">☀️</span>
          </div>
        ))}
      </div>
    </div>
  );
}