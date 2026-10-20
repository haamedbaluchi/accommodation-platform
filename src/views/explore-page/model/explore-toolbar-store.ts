import { create } from 'zustand';
import { ExploreFilter, FILTER_VALUES } from '@features/explore-page/filter-explore';

interface ExploreToolbarState {
  search: string;
  selectedProvinceId: number | null;
  activeFilter: ExploreFilter;
  setSearch: (value: string) => void;
  setSelectedProvinceId: (id: number | null) => void;
  setActiveFilter: (filter: ExploreFilter) => void;
}

export const useExploreToolbarStore = create<ExploreToolbarState>((set) => ({
  search: '',
  selectedProvinceId: null,
  activeFilter: FILTER_VALUES.ALL,
  setSearch: (search) => set({ search }),
  setSelectedProvinceId: (selectedProvinceId) => set({ selectedProvinceId }),
  setActiveFilter: (activeFilter) => set({ activeFilter }),
}));