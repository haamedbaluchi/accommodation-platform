import { ItineraryDayType } from "../../model/types";
import { ItineraryDay } from "./itinerary-day";

type ItinerarySectionProps = {
  days: ItineraryDayType[];
  onViewStopDetails?: (stopId: string) => void;
};

export function ItinerarySection({ days, onViewStopDetails }: ItinerarySectionProps) {
  return (
    <section className="border-b border-gray-200 flex flex-col gap-4 md:gap-6 lg:gap-8 py-5">
    {/* <div className="border-b border-gray-200 flex flex-col gap-4 md:gap-6 lg:gap-8 px-4 lg:px-7 py-5"> */}
      {days.map((day) => (
        <ItineraryDay
          key={day.id}
          dayLabel={day.dayLabel}
          title={day.title}
          titleIcon={day.titleIcon}
          description={day.description}
          stops={day.stops}
          transitions={day.transitions}
          onViewStopDetails={onViewStopDetails}
        />
      ))}
    </section>
  );
}