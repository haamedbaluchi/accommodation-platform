import { create } from 'zustand';
import type { ExploreItemType } from '@entities/explore/model/detail-fetchers';

export type { ExploreItemType };
type PanelMode = 'closed' | 'map' | 'details';

interface ExplorePanelState {
  mode: PanelMode;
  selectedItem: { id: string; type: ExploreItemType } | null;
  toggleMap: () => void;
  openDetails: (id: string, type: ExploreItemType) => void;
  closeDetails: () => void;
}

export const useExplorePanelStore = create<ExplorePanelState>((set) => ({
  mode: 'closed',
  selectedItem: null,
  toggleMap: () => set((s) => ({ mode: s.mode === 'map' ? 'closed' : 'map', selectedItem: null })),
  openDetails: (id, type) => set({ mode: 'details', selectedItem: { id, type } }),
  closeDetails: () => set({ mode: 'map', selectedItem: null }),
}));