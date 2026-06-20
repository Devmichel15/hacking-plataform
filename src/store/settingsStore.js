import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useSettingsStore = create(
  persist(
    (set) => ({
      studyMode: 30, // minutos: 15, 30 ou 60
      audioEnabled: true,
      scanlineEffect: true,
      terminalTheme: 'green-neon', // green-neon, amber, cyan

      setStudyMode: (minutes) => set({ studyMode: minutes }),
      toggleAudio: () => set((state) => ({ audioEnabled: !state.audioEnabled })),
      toggleScanlines: () => set((state) => ({ scanlineEffect: !state.scanlineEffect })),
      setTerminalTheme: (theme) => set({ terminalTheme: theme }),
    }),
    {
      name: 'hackerpath-settings',
    }
  )
)
