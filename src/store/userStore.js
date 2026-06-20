import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useUserStore = create(
  persist(
    (set, get) => ({
      username: 'NetHunter_AO',
      level: 1,
      xp: 0,
      streak: 1,
      lastActive: new Date().toISOString().split('T')[0],
      studyTime: 0, // em minutos
      joinedAt: new Date().toISOString(),
      avatar: 'cyber-ninja',

      addXP: (amount) => {
        const { xp, level } = get()
        const newXP = xp + amount
        const nextLevelXP = level * 100
        
        if (newXP >= nextLevelXP) {
          set({
            xp: newXP - nextLevelXP,
            level: level + 1,
          })
          // Aqui poderíamos disparar uma notificação/efeito de level up
        } else {
          set({ xp: newXP })
        }
      },

      incrementStudyTime: (minutes) => {
        set((state) => ({ studyTime: state.studyTime + minutes }))
      },

      updateStreak: () => {
        const { lastActive, streak } = get()
        const today = new Date().toISOString().split('T')[0]
        const yesterdayDate = new Date()
        yesterdayDate.setDate(yesterdayDate.getDate() - 1)
        const yesterday = yesterdayDate.toISOString().split('T')[0]

        if (lastActive === today) {
          return // Já ativo hoje
        }

        if (lastActive === yesterday) {
          set({
            streak: streak + 1,
            lastActive: today,
          })
        } else {
          // Perdeu o streak
          set({
            streak: 1,
            lastActive: today,
          })
        }
      },

      updateProfile: (data) => {
        set((state) => ({ ...state, ...data }))
      },

      resetUser: () => set({
        username: 'NetHunter_AO',
        level: 1,
        xp: 0,
        streak: 1,
        lastActive: new Date().toISOString().split('T')[0],
        studyTime: 0,
        avatar: 'cyber-ninja',
      })
    }),
    {
      name: 'hackerpath-user',
    }
  )
)
