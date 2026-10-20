import { create } from 'zustand';

type FavoriteItemState = {
  favoriteIds: Set<string>;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

export const useFavoriteItemStore = create<FavoriteItemState>((set, get) => ({
  favoriteIds: new Set(),
  toggleFavorite: (id) =>
    set((state) => {
      const next = new Set(state.favoriteIds);
      next.has(id) ? next.delete(id) : next.add(id);
      return { favoriteIds: next };
    }),
  isFavorite: (id) => get().favoriteIds.has(id),
}));
