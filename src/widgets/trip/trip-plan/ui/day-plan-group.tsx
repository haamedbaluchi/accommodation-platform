import { Fragment, useId } from 'react';
import {
  ArrowDown,
  DeleteIcon,
  MoreIcon,
  RemoveIcon,
} from '@shared/assets/icons';
import { Button, DropdownMenu } from '@shared/ui';
import { RenderActivity } from '../model/render-activity.type';
import { DailyItinerary } from '@entities/trip';
import { AddNewDestinationsModal } from '@features/trip/add-destination';

interface DayPlanGroupProps {
  dayPlan: DailyItinerary;
  renderActivity: RenderActivity;
}
export default function DayPlanGroup({
  dayPlan,
  renderActivity,
}: DayPlanGroupProps) {
  const generatedId = useId();
  const itemsTripGroup = [
    {
      id: `${generatedId}-1`,
      label: 'انتقال به روز قبل',
      icon: <ArrowDown className="rotate-180 w-4 h-4" />,
      onClick: () => {},
    },
    {
      id: `${generatedId}-2`,
      label: 'انتقال به روز بعد',
      icon: <ArrowDown className="w-4 h-4" />,
      onClick: () => {},
    },
    {
      id: `${generatedId}-3`,
      label: 'خالی کردن روز',
      icon: <RemoveIcon className="w-4 h-4" />,
      onClick: () => {},
    },
    {
      id: `${generatedId}-4`,
      label: 'حذف روز',
      icon: <DeleteIcon className="w-4 h-4" />,
      onClick: () => {},
      destructive: true,
    },
  ];
  const activities = (dayPlan.activities ?? []).filter(
    (activity) => activity.isAttraction === true,
  );
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-text-main font-yekta">
          <ArrowDown className="w-4 h-4 md:w-5 md:h-5" />
          <h5 className="font-bold text-xs sm:text-sm md:text-base xl:text-xl">
            {dayPlan.title} روز{' '}
            <span className="ml-2 font-bold text-xs sm:text-sm md:text-base ">
              {dayPlan.dayNumber}
            </span>
          </h5>
        </div>
        {/* <DropdownMenu
          items={itemsTripGroup}
          side="right"
          trigger={
            <Button
              rounded="full"
              variant="ghost"
              size="icon"
              aria-label="منو روز سفر"
            >
              <MoreIcon className="W-6 h-6" />
            </Button>
          }
        /> */}
      </div>

      <div className="mt-3 sm:mt-4 md:mt-5">
        {activities.length ? (
          activities.map((activity, index) => (
            <Fragment key={activity.id ?? `activity-${index}`}>
              {renderActivity(activity)}
            </Fragment>
          ))
        ) : (
          <p className="text-sm text-text-muted">
            برای این روز هنوز فعالیتی ثبت نشده است.
          </p>
        )}
      </div>
      {/* <AddNewDestinationsModal province={dayPlan.title} /> */}
    </div>
  );
}
