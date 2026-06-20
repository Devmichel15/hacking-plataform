import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ROADMAP } from '../data/roadmap'

// Inicializar estado de progresso para todos os módulos
const initModuleState = () => {
  const state = {}
  ROADMAP.forEach((phase, phaseIndex) => {
    phase.modules.forEach((module, moduleIndex) => {
      const isLocked = phaseIndex > 0 || moduleIndex > 0 // apenas o primeiro módulo disponível
      state[module.id] = {
        status: phaseIndex === 0 && moduleIndex === 0 ? 'available' : 'locked',
        topicsRead: [],
        exercisesCompleted: [],
        quizCompleted: false,
        quizScore: 0,
        xpEarned: 0,
        completedAt: null,
      }
    })
  })
  return state
}

export const useProgressStore = create(
  persist(
    (set, get) => ({
      modules: initModuleState(),
      totalXP: 0,
      totalModulesCompleted: 0,
      totalExercisesCompleted: 0,
      totalLabsCompleted: 0,
      totalQuizzesCompleted: 0,

      // Marcar tópico como lido
      markTopicRead: (moduleId, topicId, xp = 10) => {
        const { modules, totalXP } = get()
        const module = modules[moduleId]
        if (!module || module.topicsRead.includes(topicId)) return

        const newTopicsRead = [...module.topicsRead, topicId]
        const xpGained = xp

        set({
          modules: {
            ...modules,
            [moduleId]: {
              ...module,
              topicsRead: newTopicsRead,
              xpEarned: module.xpEarned + xpGained,
              status: module.status === 'available' ? 'in-progress' : module.status,
            }
          },
          totalXP: totalXP + xpGained,
        })
      },

      // Completar exercício
      completeExercise: (moduleId, exerciseId, xp = 25) => {
        const { modules, totalXP, totalExercisesCompleted, totalLabsCompleted } = get()
        const module = modules[moduleId]
        if (!module || module.exercisesCompleted.includes(exerciseId)) return

        set({
          modules: {
            ...modules,
            [moduleId]: {
              ...module,
              exercisesCompleted: [...module.exercisesCompleted, exerciseId],
              xpEarned: module.xpEarned + xp,
              status: 'in-progress',
            }
          },
          totalXP: totalXP + xp,
          totalExercisesCompleted: totalExercisesCompleted + 1,
        })
      },

      // Completar quiz
      completeQuiz: (moduleId, score, totalQuestions) => {
        const { modules, totalXP, totalQuizzesCompleted } = get()
        const module = modules[moduleId]
        if (!module || module.quizCompleted) return

        const xpGained = Math.round((score / totalQuestions) * 50) + 15 // 15 base + até 50 por %

        set({
          modules: {
            ...modules,
            [moduleId]: {
              ...module,
              quizCompleted: true,
              quizScore: score,
              xpEarned: module.xpEarned + xpGained,
              status: 'in-progress',
            }
          },
          totalXP: totalXP + xpGained,
          totalQuizzesCompleted: totalQuizzesCompleted + 1,
        })

        // Verificar se módulo está completo
        get().checkModuleCompletion(moduleId)
      },

      // Verificar e marcar módulo como concluído
      checkModuleCompletion: (moduleId) => {
        const { modules, totalModulesCompleted } = get()
        const module = modules[moduleId]
        if (!module || module.status === 'completed') return

        // Encontrar dados do módulo
        let moduleData = null
        for (const phase of ROADMAP) {
          moduleData = phase.modules.find(m => m.id === moduleId)
          if (moduleData) break
        }
        if (!moduleData) return

        const allTopicsRead = moduleData.topics.every(t => module.topicsRead.includes(t.id))
        const allExercisesDone = (moduleData.exercises || []).every(e => module.exercisesCompleted.includes(e.id))
        const quizDone = !moduleData.quiz || moduleData.quiz.length === 0 || module.quizCompleted

        if (allTopicsRead && allExercisesDone && quizDone) {
          set({
            modules: {
              ...modules,
              [moduleId]: {
                ...module,
                status: 'completed',
                completedAt: new Date().toISOString(),
              }
            },
            totalModulesCompleted: totalModulesCompleted + 1,
          })

          // Desbloquear próximo módulo
          get().unlockNextModule(moduleId)
        }
      },

      // Desbloquear próximo módulo
      unlockNextModule: (completedModuleId) => {
        const { modules } = get()
        let found = false
        let nextModuleId = null

        for (const phase of ROADMAP) {
          for (let i = 0; i < phase.modules.length; i++) {
            if (found) {
              nextModuleId = phase.modules[i].id
              found = false
              break
            }
            if (phase.modules[i].id === completedModuleId) {
              found = true
            }
          }
          if (nextModuleId) break
        }

        if (nextModuleId && modules[nextModuleId]?.status === 'locked') {
          set({
            modules: {
              ...modules,
              [nextModuleId]: {
                ...modules[nextModuleId],
                status: 'available',
              }
            }
          })
        }
      },

      // Calcular % geral
      getOverallProgress: () => {
        const { modules } = get()
        const total = Object.keys(modules).length
        const completed = Object.values(modules).filter(m => m.status === 'completed').length
        return total > 0 ? Math.round((completed / total) * 100) : 0
      },

      // Progress por fase
      getPhaseProgress: (phaseId) => {
        const { modules } = get()
        const phase = ROADMAP.find(p => p.id === phaseId)
        if (!phase) return 0
        const total = phase.modules.length
        const completed = phase.modules.filter(m => modules[m.id]?.status === 'completed').length
        return total > 0 ? Math.round((completed / total) * 100) : 0
      },

      // Reset (para desenvolvimento)
      reset: () => set({ modules: initModuleState(), totalXP: 0, totalModulesCompleted: 0, totalExercisesCompleted: 0, totalLabsCompleted: 0, totalQuizzesCompleted: 0 }),
    }),
    {
      name: 'hackerpath-progress',
      version: 1,
    }
  )
)
