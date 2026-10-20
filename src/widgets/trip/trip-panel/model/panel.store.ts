import { create } from 'zustand';

type PanelType = 'guide' | 'trip';

interface ChatAIStoreProps {
  isAsideOpen: boolean;
  activePanelView: PanelType;

  setAsideStatus: (status: boolean) => void;
  changeActivePanelView: (panel: PanelType) => void;
}

export const usePanelStore = create<ChatAIStoreProps>((set) => ({
  isAsideOpen: false,

  activePanelView: 'trip',

  setAsideStatus: (status) => {
    set({
      isAsideOpen: status,
    });
  },

  changeActivePanelView: (panel) => {
    set({
      activePanelView: panel,
    });
  },
}));