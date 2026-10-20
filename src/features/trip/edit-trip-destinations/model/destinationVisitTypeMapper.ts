import { DestinationVisitTypeLabel } from './destinationSchema';

export const visitTypeLabelToApiMap: Record<
  DestinationVisitTypeLabel,
  'visit' | 'trip_start' | 'stay' | 'stopover' | 'return'
> = {
  'شروع سفر': 'trip_start',
  'اقامت': 'stay',
  'بازدید': 'visit',
  'توقف بین راه': 'stopover',
  'بازگشت': 'return',
};

export const visitTypeApiToLabelMap = {
  trip_start: 'شروع سفر',
  stay: 'اقامت',
  visit: 'بازدید',
  stopover: 'توقف بین راه',
  return: 'بازگشت',
} as const;

export function toVisitTypeLabel(value?: string): DestinationVisitTypeLabel {
  if (!value) return 'بازدید';

  if (value in visitTypeApiToLabelMap) {
    return visitTypeApiToLabelMap[
      value as keyof typeof visitTypeApiToLabelMap
    ];
  }

  return value as DestinationVisitTypeLabel;
}
