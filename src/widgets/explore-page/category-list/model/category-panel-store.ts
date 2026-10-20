import { create } from 'zustand';

interface CategoryPanelState {
  selectedItemId: string | null;
  openDetails: (id: string) => void;
  closeDetails: () => void;
}

export const useCategoryPanelStore = create<CategoryPanelState>((set) => ({
  selectedItemId: null,
  openDetails: (id) => set({ selectedItemId: id }),
  closeDetails: () => set({ selectedItemId: null }),
}));