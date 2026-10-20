import { create } from 'zustand';
import { AttractionPoint } from './types';


interface TripAttractionsState {
  attractions: AttractionPoint[];
  setAttractions: (attractions: AttractionPoint[]) => void;
  clearAttractions: () => void;
}

export const useTripAttractionsStore = create<TripAttractionsState>((set) => ({
  attractions: [],

  setAttractions: (attractions) => {
    set({ attractions });
  },

  clearAttractions: () => {
    set({ attractions: [] });
  },
}));