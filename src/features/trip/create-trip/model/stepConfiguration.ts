import {
  CompanionsAndBudgetStep,
  DestinationAndDateStep,
  TripPreferencesStep,
} from '../ui/steps';

export const TRIP_STEPS = [
  {
    id: 'step_1',
    title: 'کجا و کی بریم سفر؟ ✈️',
    description: 'سلیقت رو بگو تا سفر رو کاملاً شخصی‌سازی کنیم.',
    component: DestinationAndDateStep,
    fields: ['destinations', 'isRoadTrip', 'totalDays', 'startDate', 'endDate'],
  },
  {
    id: 'step_2',
    title: 'کیا همراهمونن و چقدر خرج می‌کنیم؟ 💸',
    description: 'تا پیشنهادها دقیقاً هم‌قد جیب و ترکیب همسفرات باشه.',
    component: CompanionsAndBudgetStep,
    fields: ['travelerCount', 'friends', 'budget'],
  },
  {
    id: 'step_3',
    title: 'تو این سفر دنبال چی هستی؟ ✨',
    description: 'قدم نهایی برای شروع یک برنامه‌ریزی دقیق.',
    component: TripPreferencesStep,
    fields: ['paceType', 'favoriteLocations'],
  },
];
