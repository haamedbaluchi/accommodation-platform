import {
  check,
  forward,
  InferOutput,
  number,
  object,
  optional,
  pipe,
  string,
} from 'valibot';

export const dateTripSchema = pipe(
  object({
    totalDays: optional(number(), 1),
    startDate: optional(string()),
    endDate: optional(string()),
  }),
  forward(
    check((input) => {
      if (!input.startDate || !input.endDate) return true;

      return new Date(input.startDate) <= new Date(input.endDate);
    }, 'تاریخ پایان سفر نمی‌تواند قبل از تاریخ شروع باشد.'),
    ['endDate'],
  ),
);


export type DateTripFormInput=InferOutput<typeof dateTripSchema>
