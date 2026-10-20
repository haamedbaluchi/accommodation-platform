import { SelectedDestination } from '@entities/destination';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
export type TripDraftBudget = [number, number];

export type TripDraftValues = {
  title: string;
  destinations: SelectedDestination[];
  startDate: string;
  endDate: string;
  totalDays: number;
  travelerCount: number;
  budgetRange: TripDraftBudget;
};
export interface TripDraftState extends TripDraftValues {
  setTitle: (title: string) => void;
  setDestinations: (destinations: SelectedDestination[]) => void;
  setDateRange: (payload: {
    startDate: string;
    endDate: string;
    totalDays: number;
  }) => void;
  setTravelerCount: (travelerCount: number) => void;
  setBudgetRange: (budgetRange: TripDraftBudget) => void;
  setDraft: (payload: Partial<TripDraftValues>) => void;
  resetDraft: () => void;
}
export const initialTripDraftState: TripDraftValues = {
  title: '',
  destinations: [],
  startDate: '',
  endDate: '',
  totalDays: 0,
  travelerCount: 0,
  budgetRange: [0, 50],
};

export const useTripDraftStore = create<TripDraftState>()(
  persist(
    (set) => ({
      ...initialTripDraftState,

      setTitle: (title) => set({ title }),
      setDestinations: (destinations) => set({ destinations }),
      setDateRange: ({ startDate, endDate, totalDays }) =>
        set({ startDate, endDate, totalDays }),
      setTravelerCount: (travelerCount) => set({ travelerCount }),
      setBudgetRange: (budgetRange) => set({ budgetRange }),
      setDraft: (payload) => set((state) => ({ ...state, ...payload })),
      resetDraft: () => set(initialTripDraftState),
    }),
    {
      name: 'trip-draft-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
