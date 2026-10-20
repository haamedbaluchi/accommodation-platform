import { create } from 'zustand';

export type Trip = {
  id: string;
  title: string;
  location: string;
  imageSrc: string;
  tags: { label: string; icon: string }[];
  visitorsCount: number;
  isVisited: boolean;
};

interface FavoritesStore {
  trips: Trip[];
  toggleFavorite: (trip: Trip) => void; 
  toggleVisited: (id: string) => void;
}

export const useFavoritesStore = create<FavoritesStore>((set) => ({
  trips: [], 

  toggleFavorite: (trip) =>
    set((state) => {
      const isAlreadyAdded = state.trips.some((t) => t.id === trip.id);

      if (isAlreadyAdded) {
        return { trips: state.trips.filter((t) => t.id !== trip.id) };
      }

      return { trips: [...state.trips, trip] };
    }),
  toggleVisited: (id) =>
    set((state) => ({
      trips: state.trips.map((trip) =>
        trip.id === id ? { ...trip, isVisited: !trip.isVisited } : trip,
      ),
    })),
}));
