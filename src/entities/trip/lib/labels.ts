import { SelectedDestination } from "../../destination";
import { differenceInCalendarDays, format } from 'date-fns-jalali';

export const getDestinationsLabel = (
  destinations: SelectedDestination[],
): string => {
  if (!destinations.length) return 'مقصد';

  const firstDestination = destinations[0];
  const firstCityName = firstDestination.city_name || 'مقصد';

  if (destinations.length === 1) {
    return firstCityName;
  }

  return `${firstCityName} +${destinations.length - 1}`;
};


export const getDaysLabel = ({
  totalDays,
  startDate,
  endDate,
}: {
  totalDays: number;
  startDate: string;
  endDate: string;
}): string => {
  let rangeDays = 0;

  if (startDate && endDate) {
    rangeDays =
      differenceInCalendarDays(
        new Date(endDate),
        new Date(startDate),
      ) + 1;
  }

  if (rangeDays >= totalDays && rangeDays > 0) {
    return `${format(new Date(startDate), 'dd MMM')} تا ${format(
      new Date(endDate),
      'dd MMM',
    )}`;
  }

  if (totalDays > 0) {
    return `${totalDays} روز`;
  }

  return 'روزهای اقامت';
};

export const getTravelersLabel = (travelerCount: number): string => {
  if (!travelerCount || travelerCount <= 0) return 'تعداد مسافران';

  return `${travelerCount} مسافر`;
};

export const getBudgetLabel = (
  budgetRange: [number, number] | null,
): string => {
  if (!budgetRange) return 'بودجه سفر';

  const [min, max] = budgetRange;

  if (min === 0 && max === 50) return 'بودجه ';

  if (min === 0) return `${max} میلیون`;

  return `${min} تا ${max} میلیون`;
};


export const buildTripTitleFromDestinations = (
  destinations: SelectedDestination[],
): string => {
  if (!destinations.length) return 'سفر جدید';

  const firstCityName = destinations[0].city_name || 'مقصد';

  if (destinations.length === 1) {
    return `سفر به ${firstCityName}`;
  }

  return `سفر به ${firstCityName} و ${destinations.length - 1} مقصد دیگر`;
};

// export const getChatTitle = (payload: {
//   title: string;
//   destinations: SelectedDestination[];
// }): string => {
//   const title = payload.title?.trim();

//   const isDefaultTitle = !title || title === 'سفر جدید';

//   if (!isDefaultTitle) return title;

//   if (payload.destinations.length === 1) {
//     return `سفر به ${payload.destinations[0].city_name}`;
//   }

//   if (payload.destinations.length > 1) {
//     return 'سفر چندمقصده';
//   }

//   return 'گفت‌وگوی جدید';
// };