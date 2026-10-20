// import {
//   isToday,
//   isYesterday,
//   format,
//   isValid,
//   differenceInMinutes,
//   differenceInHours,
// } from "date-fns";

// type DateFormatterOptions = {
//   showTimeWithDate?: boolean;
// };

// export function dateFormatter(
//   dateString: string,
//   options: DateFormatterOptions = {},
// ) {
//   const { showTimeWithDate = false } = options;

//   if (!dateString) return "--";

//   const date = new Date(dateString);
//   if (!isValid(date)) return "--";

//   const now = new Date();

//   if (date > now) {
//     if (isToday(date)) {
//       return "امروز";
//     }

//     const datePart = format(date, "d MMM yyyy");
//     const timePart = format(date, "HH:mm");

//     return showTimeWithDate ? `${datePart} - ${timePart}` : datePart;
//   }

//   const minutesDiff = differenceInMinutes(now, date);
//   const hoursDiff = differenceInHours(now, date);

//   if (isToday(date)) {
//     if (minutesDiff < 1) {
//       return "همین الان";
//     }

//     if (minutesDiff < 60) {
//       return `${minutesDiff} دقیقه پیش`;
//     }

//     if (hoursDiff < 5) {
//       return `${hoursDiff} ساعت پیش`;
//     }

//     return "امروز";
//   }

//   if (isYesterday(date)) {
//     const timePart = format(date, "HH:mm");
//     return showTimeWithDate ? `دیروز ${timePart}` : "دیروز";
//   }

//   const datePart = format(date, "d MMM yyyy");
//   const timePart = format(date, "HH:mm");

//   return showTimeWithDate ? `${datePart} - ${timePart}` : datePart;
// }
import {
  isToday,
  isYesterday,
  isValid,
  differenceInMinutes,
  differenceInHours,
} from 'date-fns';

type DateFormatterOptions = {
  showTimeWithDate?: boolean;
};

const persianDateFormatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const persianTimeFormatter = new Intl.DateTimeFormat('fa-IR', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

function formatPersianDate(date: Date) {
  return persianDateFormatter.format(date);
}

function formatPersianTime(date: Date) {
  return persianTimeFormatter.format(date);
}

function toPersianDigits(value: number) {
  return value.toLocaleString('fa-IR');
}

export function dateFormatter(
  dateString: string,
  options: DateFormatterOptions = {},
) {
  const { showTimeWithDate = false } = options;

  if (!dateString) return '--';

  const date = new Date(dateString);

  if (!isValid(date)) return '--';

  const now = new Date();

  // تاریخ آینده
  if (date > now) {
    if (isToday(date)) {
      return 'امروز';
    }

    const datePart = formatPersianDate(date);
    const timePart = formatPersianTime(date);

    return showTimeWithDate
      ? `${datePart} - ${timePart}`
      : datePart;
  }

  const minutesDiff = differenceInMinutes(now, date);
  const hoursDiff = differenceInHours(now, date);

  // امروز
  if (isToday(date)) {
    if (minutesDiff < 1) {
      return 'همین الان';
    }

    if (minutesDiff < 60) {
      return `${toPersianDigits(minutesDiff)} دقیقه پیش`;
    }

    if (hoursDiff < 5) {
      return `${toPersianDigits(hoursDiff)} ساعت پیش`;
    }

    return 'امروز';
  }

  // دیروز
  if (isYesterday(date)) {
    const timePart = formatPersianTime(date);

    return showTimeWithDate
      ? `دیروز ${timePart}`
      : 'دیروز';
  }

  // تاریخ‌های قدیمی‌تر
  const datePart = formatPersianDate(date);
  const timePart = formatPersianTime(date);

  return showTimeWithDate
    ? `${datePart} - ${timePart}`
    : datePart;
}