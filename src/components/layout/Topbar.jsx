import React, { useState, useEffect } from 'react'
import { useUserStore } from '../../store/userStore'
import { useSettingsStore } from '../../store/settingsStore'
import { useToastStore } from '../../store/toastStore'
import { Flame, Trophy, Play, Pause, RotateCcw, Volume2, VolumeX, ShieldAlert } from 'lucide-react'

export const Topbar = () => {
  const { username, level, xp, streak, addXP, incrementStudyTime } = useUserStore()
  const { studyMode, setStudyMode, audioEnabled, toggleAudio } = useSettingsStore()
  const { addToast } = useToastStore()

  // Estado do Timer de Estudo
  const [timeLeft, setTimeLeft] = useState(studyMode * 60)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [sessionCompleted, setSessionCompleted] = useState(false)

  // XP para o próximo nível
  const nextLevelXP = level * 100
  const xpPercent = Math.min(100, Math.round((xp / nextLevelXP) * 100))

  // Atualizar tempo de contagem quando altera o modo de estudo
  useEffect(() => {
    if (!isTimerRunning) {
      setTimeLeft(studyMode * 60)
      setSessionCompleted(false)
    }
  }, [studyMode, isTimerRunning])

  // Lógica do Timer
  useEffect(() => {
    let interval = null
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false)
      setSessionCompleted(true)
      // Recompensa ao concluir a sessão de estudo
      const rewardXP = studyMode === 15 ? 50 : studyMode === 30 ? 120 : 250
      addXP(rewardXP)
      incrementStudyTime(studyMode)
      addToast(`Sessão de ${studyMode} minutos concluída!`, 'success', rewardXP)
      if (audioEnabled) {
        try {
          // Play a simple retro beep sound if browser allows
          const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
          const osc = audioCtx.createOscillator()
          const gain = audioCtx.createGain()
          osc.type = 'sine'
          osc.frequency.setValueAtTime(880, audioCtx.currentTime) // Lá (A5)
          gain.gain.setValueAtTime(0.1, audioCtx.currentTime)
          osc.connect(gain)
          gain.connect(audioCtx.destination)
          osc.start()
          osc.stop(audioCtx.currentTime + 0.3)
        } catch (e) {
          console.log("Audio play blocked by browser")
        }
      }
    }
    return () => clearInterval(interval)
  }, [isTimerRunning, timeLeft, studyMode, addXP, incrementStudyTime, addToast, audioEnabled])

  // Formatar tempo (MM:SS)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <header className="h-16 bg-secondary border-b border-white/5 flex items-center justify-between px-8 sticky top-0 z-40 select-none">
      {/* XP & Level Progress */}
      <div className="flex items-center gap-4 flex-1 max-w-sm">
        <div className="flex flex-col">
          <span className="font-mono text-[9px] text-text-muted tracking-wider uppercase">NÍVEL HACKER</span>
          <span className="font-mono text-neon font-extrabold text-sm flex items-center gap-1">
            <Trophy size={14} className="text-neon animate-pulse" />
            Lvl {level}
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <div className="flex justify-between items-center text-[9px] font-mono text-text-muted">
            <span>XP {xp} / {nextLevelXP}</span>
            <span>{xpPercent}%</span>
          </div>
          <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
            <div 
              className="h-full bg-neon rounded-full transition-all duration-500 shadow-[0_0_8px_#00FF88]"
              style={{ width: `${xpPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Session Timer & Streak */}
      <div className="flex items-center gap-6">
        {/* Streak */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-orange-950/20 border border-orange-500/20 text-orange-400 font-mono text-xs font-semibold">
          <Flame size={15} className="fill-orange-500 text-orange-500 animate-pulse" />
          <span>{streak} DIAS</span>
        </div>

        {/* Study Mode Selector */}
        <div className="flex items-center gap-1.5">
          {[15, 30, 60].map((mins) => (
            <button
              key={mins}
              disabled={isTimerRunning}
              onClick={() => setStudyMode(mins)}
              className={`px-2 py-1 rounded text-[10px] font-mono font-bold tracking-wide border transition-all duration-300 disabled:opacity-50 cursor-pointer ${
                studyMode === mins 
                  ? 'border-neon bg-neon/10 text-neon shadow-[0_0_8px_rgba(0,255,136,0.15)]' 
                  : 'border-white/5 text-text-muted hover:border-white/20'
              }`}
            >
              {mins}m
            </button>
          ))}
        </div>

        {/* Timer Control */}
        <div className="flex items-center gap-2.5 px-3 py-1 rounded bg-black/40 border border-white/5 font-mono text-xs">
          <span className={`font-semibold tracking-wider ${isTimerRunning ? 'text-neon animate-pulse' : 'text-text-muted'}`}>
            {formatTime(timeLeft)}
          </span>
          <div className="flex items-center gap-1 border-l border-white/10 pl-2">
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="text-text-muted hover:text-neon transition-colors p-0.5 cursor-pointer"
              title={isTimerRunning ? 'Pausar' : 'Iniciar'}
            >
              {isTimerRunning ? <Pause size={13} /> : <Play size={13} />}
            </button>
            <button
              onClick={() => {
                setIsTimerRunning(false)
                setTimeLeft(studyMode * 60)
              }}
              className="text-text-muted hover:text-error transition-colors p-0.5 cursor-pointer"
              title="Reiniciar"
            >
              <RotateCcw size={13} />
            </button>
          </div>
        </div>

        {/* Mute/Unmute Audio Toggle */}
        <button
          onClick={toggleAudio}
          className="text-text-muted hover:text-neon transition-colors cursor-pointer"
          title={audioEnabled ? 'Desativar Sons' : 'Ativar Sons'}
        >
          {audioEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>

        {/* User Info */}
        <div className="flex items-center gap-3 border-l border-white/10 pl-6">
          <div className="flex flex-col text-right">
            <span className="font-mono text-xs font-bold text-text-main hover:text-neon transition-colors cursor-pointer">
              {username}
            </span>
            <span className="font-mono text-[9px] text-neon-dark font-semibold tracking-widest uppercase">
              ETHICAL HACKER
            </span>
          </div>
          <div className="w-8 h-8 rounded-full border border-neon/30 bg-card flex items-center justify-center font-mono text-xs font-bold text-neon shadow-[0_0_8px_rgba(0,255,136,0.2)]">
            💀
          </div>
        </div>
      </div>
    </header>
  )
}
export default Topbar
