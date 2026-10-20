"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { createStore, useStore } from "zustand"

type PanelState = {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

type PanelStoreApi = ReturnType<typeof createPanelStore>

function createPanelStore(defaultOpen: boolean) {
  return createStore<PanelState>((set) => ({
    isOpen: defaultOpen,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    toggle: () => set((s) => ({ isOpen: !s.isOpen })),
  }))
}

const PanelStoreContext = createContext<PanelStoreApi | null>(null)

export function PanelStoreProvider({
  children,
  defaultOpen = false,
}: {
  children: ReactNode
  defaultOpen?: boolean
}){
  const [store] = useState(() => createPanelStore(defaultOpen))
  return (
    <PanelStoreContext.Provider value={store}>
      {children}
    </PanelStoreContext.Provider>
  )
}

export function usePanelStore<T>(selector: (state: PanelState) => T): T {
  const store = useContext(PanelStoreContext)
  if (!store) {
    throw new Error("usePanelStore must be used within a PanelStoreProvider")
  }
  return useStore(store, selector)
}