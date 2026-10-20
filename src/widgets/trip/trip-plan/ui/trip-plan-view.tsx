import { TripPlan } from '@entities/trip';
import DayPlanGroup from './day-plan-group';
import { RenderActivity } from '../model/render-activity.type';

interface TripPlanViewProps {
  tripPlan: TripPlan | null;
  renderActivity: RenderActivity;
}

export function TripPlanView({ tripPlan, renderActivity }: TripPlanViewProps) {
  if (!tripPlan) {
    return (
      <div className="mt-6 rounded-2xl border border-dashed border-border p-6 text-center">
        <p className="text-sm text-text-muted">
          هنوز برنامه سفری برای نمایش وجود ندارد.
        </p>
      </div>
    );
  }

  if (!tripPlan.days.length) {
    return (
      <div className="mt-6 rounded-2xl border border-dashed border-border p-6 text-center">
        <p className="text-sm text-text-muted">
          برنامه سفر دریافت شده، اما هنوز فعالیتی برای روزها ثبت نشده است.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 sm:gap-7 lg:gap-9 mt-2 lg:mt-9">
      <h3 className="font-bold text-base sm:text-lg md:text-xl text-text-main">
        برنامه پیشنهادی{' '}
        <span className="text-border-secondary-active">
          {tripPlan.totalDays} روزه
        </span>{' '}
        برای سفر شما
      </h3>

      {tripPlan.days.map((trip, index) => (
        <DayPlanGroup
          key={trip.id ?? index + 213}
          dayPlan={trip}
          renderActivity={renderActivity}
        />
      ))}
    </div>
  );
}
