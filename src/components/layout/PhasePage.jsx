import React from 'react'
import { Link } from 'react-router-dom'
import { useProgressStore } from '../../store/progressStore'
import { ROADMAP } from '../../data/roadmap'
import ModuleCard from '../ui/ModuleCard'
import ProgressBar from '../ui/ProgressBar'

export const PhasePage = ({ phaseId }) => {
  const { modules } = useProgressStore()

  // Encontrar dados da fase
  const phaseData = ROADMAP.find(p => p.id === phaseId)

  if (!phaseData) {
    return <div className="font-mono text-center text-error py-20">Fase não encontrada.</div>
  }

  // Calcular progresso da fase
  const totalModules = phaseData.modules.length
  const completedModules = phaseData.modules.filter(m => modules[m.id]?.status === 'completed').length
  const progressPercent = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0

  return (
    <div className="space-y-8 select-none">
      {/* Phase Banner */}
      <div 
        className="glass-card p-8 border border-white/5 bg-gradient-to-r from-secondary via-card to-black relative overflow-hidden"
        style={{ borderLeft: `4px solid ${phaseData.color}` }}
      >
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-wider" style={{ color: phaseData.color }}>
            <span>FASE {phaseData.phase}</span>
            <span>•</span>
            <span>ROADMAP HACKER</span>
          </div>
          <h1 className="font-mono text-xl md:text-2xl font-extrabold tracking-wide text-text-main flex items-center gap-2.5">
            <span className="text-xl">{phaseData.icon}</span>
            {phaseData.title}
          </h1>
          <p className="text-xs text-text-muted max-w-xl">
            {phaseData.description}
          </p>

          <div className="pt-4 max-w-sm space-y-2">
            <div className="flex justify-between items-center text-[9px] font-mono text-text-muted">
              <span>PROGRESSO DA FASE</span>
              <span style={{ color: phaseData.color }}>{progressPercent}%</span>
            </div>
            <ProgressBar percent={progressPercent} size="sm" showLabel={false} color={`bg-[${phaseData.color}]`} />
          </div>
        </div>
      </div>

      {/* Modules List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {phaseData.modules.map((mod) => {
          const modState = modules[mod.id] || { status: 'locked', topicsRead: [], exercisesCompleted: [], quizCompleted: false }
          
          // Calcular % concluída deste módulo específico
          const topicsReadCount = modState.topicsRead.length
          const totalTopics = mod.topics.length
          const exercisesDoneCount = modState.exercisesCompleted.length
          const totalExercises = (mod.exercises || []).length
          const quizDone = modState.quizCompleted ? 1 : 0
          
          const totalActions = totalTopics + totalExercises + (mod.quiz ? 1 : 0)
          const completedActions = topicsReadCount + exercisesDoneCount + quizDone
          const modProgress = totalActions > 0 ? Math.round((completedActions / totalActions) * 100) : 0

          return (
            <Link 
              key={mod.id} 
              to={modState.status !== 'locked' ? `/modulo/${mod.id}` : '#'}
              className={modState.status === 'locked' ? 'pointer-events-none cursor-not-allowed' : ''}
            >
              <ModuleCard
                module={mod}
                status={modState.status}
                progress={modProgress}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default PhasePage
