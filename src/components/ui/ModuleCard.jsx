import React from 'react'
import { Lock, Unlock, Play, CheckCircle } from 'lucide-react'
import Card from './Card'
import ProgressBar from './ProgressBar'

export const ModuleCard = ({ 
  module, 
  status = 'locked', // locked, available, in-progress, completed
  progress = 0,
  onClick 
}) => {
  const statusConfig = {
    locked: {
      border: 'rgba(255, 255, 255, 0.03)',
      text: 'text-text-dim',
      icon: <Lock className="text-text-dim" size={18} />,
      badge: 'BLOQUEADO',
      badgeClass: 'bg-white/5 text-text-dim'
    },
    available: {
      border: 'rgba(255, 184, 0, 0.2)',
      text: 'text-warning',
      icon: <Unlock className="text-warning" size={18} />,
      badge: 'DISPONÍVEL',
      badgeClass: 'bg-warning/10 text-warning border border-warning/20'
    },
    'in-progress': {
      border: 'rgba(0, 191, 255, 0.3)',
      text: 'text-info',
      icon: <Play className="text-info animate-pulse" size={18} />,
      badge: 'EM CURSO',
      badgeClass: 'bg-info/10 text-info border border-info/20'
    },
    completed: {
      border: 'rgba(0, 255, 136, 0.3)',
      text: 'text-neon',
      icon: <CheckCircle className="text-neon" size={18} />,
      badge: 'CONCLUÍDO',
      badgeClass: 'bg-neon/10 text-neon border border-neon/20'
    }
  }

  const current = statusConfig[status] || statusConfig.locked

  return (
    <Card
      onClick={status !== 'locked' ? onClick : undefined}
      hoverEffect={status !== 'locked'}
      borderColor={current.border}
      className={`relative overflow-hidden group ${status === 'locked' ? 'opacity-50 select-none' : ''}`}
    >
      <div className="flex justify-between items-start mb-3">
        <span className={`text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded ${current.badgeClass}`}>
          {current.badge}
        </span>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-text-muted">
          <span>{module.duration}</span>
          <span>•</span>
          <span className="text-neon">+{module.xp} XP</span>
        </div>
      </div>

      <h4 className="font-mono text-sm font-bold tracking-wide text-text-main mb-2 flex items-center gap-2 group-hover:text-neon transition-colors">
        {current.icon}
        {module.title}
      </h4>

      <p className="text-xs text-text-muted mb-4 line-clamp-2 h-8">
        {module.description}
      </p>

      {status !== 'locked' && (
        <div className="mt-2">
          <ProgressBar percent={progress} size="sm" showLabel={false} color={status === 'completed' ? 'bg-neon' : 'bg-info'} />
          <div className="flex justify-between items-center mt-2 font-mono text-[9px] text-text-dim">
            <span>TÓPICOS CONCLUÍDOS</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      )}
    </Card>
  )
}
export default ModuleCard
