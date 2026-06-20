import React, { useState } from 'react'
import { useUserStore } from '../../store/userStore'
import { useProgressStore } from '../../store/progressStore'
import { useToastStore } from '../../store/toastStore'
import { CONQUISTAS } from '../../data/conquistas'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { 
  Trophy, 
  Flame, 
  Hourglass, 
  Trash2, 
  User, 
  Edit3, 
  Award,
  Sparkles
} from 'lucide-react'

export const Perfil = () => {
  const { username, level, xp, streak, studyTime, joinedAt, updateProfile, resetUser } = useUserStore()
  const { totalXP, reset: resetProgress, totalModulesCompleted, totalExercisesCompleted } = useProgressStore()
  const { addToast } = useToastStore()

  const [editMode, setEditMode] = useState(false)
  const [newNick, setNewNick] = useState(username)

  const handleSaveNick = () => {
    if (!newNick.trim()) return
    updateProfile({ username: newNick.trim() })
    setEditMode(false)
    addToast('Nome de utilizador atualizado!', 'success')
  }

  const handleResetAll = () => {
    if (window.confirm('Aviso: Isto vai limpar todo o teu progresso, nível, XP e conquistas. Desejas continuar?')) {
      resetUser()
      resetProgress()
      addToast('Progresso e perfil limpos com sucesso!', 'success')
      window.location.reload()
    }
  }

  // Verificar quais conquistas foram concluídas
  const checkAchievement = (ach) => {
    if (ach.criteria.type === 'total_xp') {
      return totalXP >= ach.criteria.value
    }
    if (ach.criteria.type === 'modules_completed') {
      return totalModulesCompleted >= ach.criteria.value
    }
    if (ach.criteria.type === 'exercises_completed') {
      return totalExercisesCompleted >= ach.criteria.value
    }
    if (ach.criteria.type === 'streak') {
      return streak >= ach.criteria.value
    }
    // Para simplificar o CTF/Exercise específico:
    return false
  }

  const unlockedCount = CONQUISTAS.filter(checkAchievement).length

  return (
    <div className="space-y-8 select-none p-4 md:p-0">
      {/* Profile Info Header */}
      <Card className="bg-secondary/60 flex flex-col md:flex-row items-center justify-between gap-6 p-6">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="w-16 h-16 rounded-full border-2 border-neon bg-black flex items-center justify-center font-mono text-3xl shadow-[0_0_15px_rgba(0,255,136,0.3)]">
            💀
          </div>
          <div className="text-center md:text-left space-y-1.5">
            {editMode ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newNick}
                  onChange={(e) => setNewNick(e.target.value)}
                  className="bg-black/60 border border-neon/30 text-white rounded px-3 py-1.5 font-mono text-xs outline-none"
                  autoFocus
                />
                <Button variant="solid" onClick={handleSaveNick} className="text-[10px] py-1.5">GUARDAR</Button>
                <Button variant="ghost" onClick={() => setEditMode(false)} className="text-[10px] py-1.5">CANCELAR</Button>
              </div>
            ) : (
              <div className="flex items-center gap-2.5 justify-center md:justify-start">
                <h2 className="font-mono text-lg font-bold text-text-main">{username}</h2>
                <button 
                  onClick={() => setEditMode(true)}
                  className="text-text-muted hover:text-neon transition-colors cursor-pointer"
                >
                  <Edit3 size={13} />
                </button>
              </div>
            )}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 items-center">
              <Badge level={level >= 20 ? 'elite' : level >= 10 ? 'ouro' : level >= 5 ? 'prata' : 'bronze'} size="sm">
                NÍVEL {level}
              </Badge>
              <span className="text-[10px] font-mono text-text-dim">
                Membro desde: {new Date(joinedAt).toLocaleDateString('pt-AO')}
              </span>
            </div>
          </div>
        </div>

        {/* Action button */}
        <Button 
          variant="danger" 
          onClick={handleResetAll}
          className="text-[10px] py-2 flex items-center gap-1.5"
        >
          <Trash2 size={13} />
          <span>RESET DE PERFIL</span>
        </Button>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card className="flex items-center gap-4 bg-secondary/40 text-center flex-col p-6">
          <Trophy className="text-neon" size={24} />
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono text-text-muted tracking-wider uppercase">CONQUISTAS</span>
            <span className="font-mono text-lg font-bold text-text-main">{unlockedCount} / {CONQUISTAS.length}</span>
          </div>
        </Card>

        <Card className="flex items-center gap-4 bg-secondary/40 text-center flex-col p-6">
          <Flame className="text-orange-500" size={24} />
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono text-text-muted tracking-wider uppercase">STREAK ATUAL</span>
            <span className="font-mono text-lg font-bold text-text-main">{streak} DIAS</span>
          </div>
        </Card>

        <Card className="flex items-center gap-4 bg-secondary/40 text-center flex-col p-6">
          <Hourglass className="text-info" size={24} />
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono text-text-muted tracking-wider uppercase">TEMPO TOTAL</span>
            <span className="font-mono text-lg font-bold text-text-main">{studyTime} MINUTOS</span>
          </div>
        </Card>
      </div>

      {/* Achievements List */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Award className="text-neon" size={16} />
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-text-main">
            QUADRO DE CONQUISTAS HACKER
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CONQUISTAS.map((ach) => {
            const isUnlocked = checkAchievement(ach)
            return (
              <Card 
                key={ach.id} 
                borderColor={isUnlocked ? 'rgba(0, 255, 136, 0.25)' : 'rgba(255, 255, 255, 0.03)'}
                className={`flex gap-4 items-center ${!isUnlocked ? 'opacity-40 select-none' : ''}`}
              >
                <div className="text-2xl shrink-0">{ach.icon}</div>
                <div className="space-y-1 flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-mono text-xs font-bold text-text-main">{ach.title}</h4>
                    <Badge level={ach.badge} size="sm">{ach.badge}</Badge>
                  </div>
                  <p className="text-[11px] text-text-muted leading-tight">{ach.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Perfil
