import { create } from 'zustand';
import { NewTripFormInputs } from '@features/trip/create-trip';
import { createJSONStorage, persist } from 'zustand/middleware';

type PendingTripSubmitState = {
  setPendingTripSubmit: (data: NewTripFormInputs) => void;
  pendingTripSubmit: NewTripFormInputs | null;
  clearPendingTripSubmit: () => void;
};

export const PENDING_TRIP_SUBMIT_STORAGE_KEY = 'pending-trip-submit-storage';

export const usePendingTripSubmitStore = create<PendingTripSubmitState>()(
  persist(
    (set) => ({
      pendingTripSubmit: null,

      setPendingTripSubmit: (data) => {
        set({ pendingTripSubmit: data });
      },

      clearPendingTripSubmit: () => {
        set({ pendingTripSubmit: null });

        if (typeof window !== 'undefined') {
          window.sessionStorage.removeItem(PENDING_TRIP_SUBMIT_STORAGE_KEY);
        }
      },
    }),
    {
      name: PENDING_TRIP_SUBMIT_STORAGE_KEY,
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
