import { create } from "zustand";
import { MODAL_ITEMS, ModalType } from "./modal.type";


interface ModalState<T = any> {
  isOpen: boolean;
  type: ModalType;
  data: T | null;
  openModal: (type: ModalType, data?: T | null) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  isOpen: false,
  type: MODAL_ITEMS.NULL,
  data: null,
  openModal: (type, data = null) => set({ isOpen: true, type, data }),
  closeModal: () => set({ isOpen: false, type: MODAL_ITEMS.NULL, data: null }),
}));
