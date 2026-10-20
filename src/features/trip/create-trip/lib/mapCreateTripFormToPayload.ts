import { TravelTripType } from '@shared/types/trip';
import { NewTripFormInputs } from '../model/createTripSchema';
import { buildTripTitleFromDestinations, CreateTripPayload } from '@entities/trip';
import { formatBudgetRange } from '@shared/lib/format';
import { formatDateOnly } from '@shared/lib/date';
import { visitTypeLabelToApiMap } from '@features/trip/edit-trip-destinations/model/destinationVisitTypeMapper';


const calculateTotalDays = (data: NewTripFormInputs): number => {
  if (data.startDate && data.endDate) {
    const start = new Date(formatDateOnly(data.startDate));
    const end = new Date(formatDateOnly(data.endDate));

    if (!Number.isNaN(start.getTime()) && !Number.isNaN(end.getTime())) {
      const diffInMs = end.getTime() - start.getTime();
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

      return Math.max(diffInDays + 1, 1);
    }
  }

  return data.totalDays || 1;
};

export const getTripTypeByTravelerCount = (
  travelerCount: number,
): TravelTripType => {
  return travelerCount > 1 ? 'in-group' : 'personal';
};
export const mapCreateTripFormToPayload = (
  data: NewTripFormInputs,
): CreateTripPayload => {
  const travelerCount = data.travelerCount || 1;
  const totalDays = calculateTotalDays(data);
  console.log(data);
  return {
    title: buildTripTitleFromDestinations(data.destinations),

    trip_type: getTripTypeByTravelerCount(travelerCount),

    status: 'upcoming',

    budget_range: formatBudgetRange([data.budgetRange[0], data.budgetRange[1]]),

    start_date: formatDateOnly(data.startDate),
    end_date: formatDateOnly(data.endDate),

    pace_type: data.paceType || 'balanced',

    is_road_trip: data.isRoadTrip ?? false,

    total_days: totalDays,

    traveler_count: travelerCount,

    favorite_locations: data.favoriteLocations?.length
      ? data.favoriteLocations
      : ['nature'],

    destinations: (data.destinations || []).map((dest) => ({
      selected_city_id: Number(dest.city_id),
      visit_type: visitTypeLabelToApiMap[dest.visitType],
    })),
  };
};
