import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as THREE from 'three'
import { useProgressStore } from '../../store/progressStore'
import { useUserStore } from '../../store/userStore'
import { ROADMAP } from '../../data/roadmap'
import { Card } from '../../components/ui/Card'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { Button } from '../../components/ui/Button'
import { TerminalText } from '../../components/ui/TerminalText'
import { 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts'
import { 
  Percent, 
  BookOpen, 
  ShieldCheck, 
  Binary, 
  Activity, 
  Compass, 
  Trophy 
} from 'lucide-react'

// Canvas animado de rede de partículas com Three.js
const ParticleNetwork = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    const width = mountRef.current.clientWidth
    const height = mountRef.current.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100)
    camera.position.z = 12

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    mountRef.current.appendChild(renderer.domElement)

    // Partículas
    const geometry = new THREE.BufferGeometry()
    const count = 120
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    // Material das partículas (cor verde neon)
    const material = new THREE.PointsMaterial({
      color: 0x00ff88,
      size: 0.08,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    const animate = () => {
      requestAnimationFrame(animate)
      points.rotation.y += 0.001
      points.rotation.x += 0.0005
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      if (!mountRef.current) return
      const w = mountRef.current.clientWidth
      const h = mountRef.current.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none opacity-40" />
}

export const Dashboard = () => {
  const { 
    modules, 
    totalXP, 
    totalModulesCompleted, 
    totalExercisesCompleted, 
    getOverallProgress 
  } = useProgressStore()
  
  const { studyTime } = useUserStore()

  const overallProgress = getOverallProgress()

  // Dados semanais simulados para o gráfico
  const chartData = [
    { name: 'Seg', XP: 40, Horas: 0.5 },
    { name: 'Ter', XP: 80, Horas: 1.2 },
    { name: 'Qua', XP: 30, Horas: 0.6 },
    { name: 'Qui', XP: 110, Horas: 1.5 },
    { name: 'Sex', XP: 60, Horas: 0.8 },
    { name: 'Sáb', XP: 180, Horas: 2.1 },
    { name: 'Dom', XP: 50, Horas: 0.9 },
  ]

  // Encontrar o próximo módulo disponível
  const getNextGoal = () => {
    for (const phase of ROADMAP) {
      for (const mod of phase.modules) {
        if (modules[mod.id]?.status === 'available' || modules[mod.id]?.status === 'in-progress') {
          return { ...mod, phaseTitle: phase.title, phaseId: phase.id }
        }
      }
    }
    return null
  }

  const nextGoal = getNextGoal()

  return (
    <div className="space-y-8 select-none p-4 md:p-0">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden glass-card p-8 border border-neon/30 bg-gradient-to-r from-secondary via-card to-black">
        <ParticleNetwork />
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2 text-neon font-mono text-xs tracking-wider">
            <span className="h-2 w-2 rounded-full bg-neon animate-pulse" />
            SISTEMA OPERACIONAL ACTIVO
          </div>
          <h1 className="font-mono text-2xl md:text-3xl font-extrabold tracking-wide text-text-main">
            <TerminalText text="Bem-vindo ao HackerPath AO." speed={40} showCursor={true} />
          </h1>
          <p className="text-sm text-text-muted max-w-xl">
            Prepara-te para dominar Redes, Linux, Kali Linux e Segurança Web através de laboratórios controlados e simulações profissionais.
          </p>
          <div className="pt-2">
            <Link to="/etica">
              <Button variant="danger" className="text-[10px] py-2">
                REGRAS DE CONDUTA & ÉTICA
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Widgets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="flex items-center gap-4 bg-secondary/40 p-6">
          <div className="p-3.5 rounded bg-neon/10 border border-neon/30 text-neon">
            <Percent size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-text-muted tracking-wider uppercase">CONCLUÍDO</span>
            <span className="font-mono text-xl font-bold text-text-main">{overallProgress}%</span>
          </div>
        </Card>

        <Card className="flex items-center gap-4 bg-secondary/40 p-6">
          <div className="p-3.5 rounded bg-info/10 border border-info/30 text-info">
            <BookOpen size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-text-muted tracking-wider uppercase">MÓDULOS</span>
            <span className="font-mono text-xl font-bold text-text-main">{totalModulesCompleted} / 17</span>
          </div>
        </Card>

        <Card className="flex items-center gap-4 bg-secondary/40 p-6">
          <div className="p-3.5 rounded bg-warning/10 border border-warning/30 text-warning">
            <ShieldCheck size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-text-muted tracking-wider uppercase">DESAFIOS</span>
            <span className="font-mono text-xl font-bold text-text-main">{totalExercisesCompleted} RESOLVIDOS</span>
          </div>
        </Card>

        <Card className="flex items-center gap-4 bg-secondary/40 p-6">
          <div className="p-3.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-400">
            <Binary size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-text-muted tracking-wider uppercase">TEMPO ESTUDO</span>
            <span className="font-mono text-xl font-bold text-text-main">{studyTime} MINUTOS</span>
          </div>
        </Card>
      </div>

      {/* Main Grid: Charts & Next Objectives */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Progress charts */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-secondary/50 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="text-neon" size={16} />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-text-main">
                ACTIVIDADE DE ESTUDO (XP / DIA)
              </h3>
            </div>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis 
                    dataKey="name" 
                    stroke="#555555" 
                    tick={{ fill: '#888888', fontSize: 10, fontFamily: 'monospace' }} 
                  />
                  <YAxis 
                    stroke="#555555" 
                    tick={{ fill: '#888888', fontSize: 10, fontFamily: 'monospace' }} 
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0B0B0B',
                      border: '1px solid rgba(0, 255, 136, 0.3)',
                      color: '#EAEAEA',
                      fontFamily: 'monospace',
                      fontSize: '11px',
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="XP" 
                    stroke="#00FF88" 
                    strokeWidth={2}
                    dot={{ fill: '#050505', stroke: '#00FF88', strokeWidth: 2 }}
                    activeDot={{ r: 6, fill: '#00FF88' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Right Column: Goal & Roadmap status */}
        <div className="space-y-6">
          {/* Next Goal */}
          {nextGoal ? (
            <Card className="border border-neon/30 bg-secondary/80 flex flex-col justify-between h-full p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-neon uppercase tracking-wider font-semibold">
                    PRÓXIMO OBJECTIVO
                  </span>
                  <Compass size={14} className="text-neon" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-text-muted uppercase">
                    {nextGoal.phaseTitle}
                  </span>
                  <h4 className="font-mono text-sm font-bold text-text-main group-hover:text-neon">
                    {nextGoal.title}
                  </h4>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {nextGoal.description}
                </p>
              </div>

              <div className="pt-6 space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono text-text-muted">
                  <span>DURAÇÃO ESTIMADA</span>
                  <span>{nextGoal.duration}</span>
                </div>
                <Link to={`/modulo/${nextGoal.id}`}>
                  <Button variant="solid" className="w-full text-center py-2.5">
                    INICIAR MÓDULO
                  </Button>
                </Link>
              </div>
            </Card>
          ) : (
            <Card className="border border-neon/30 bg-secondary/80 flex flex-col justify-center items-center text-center p-8 h-full">
              <Trophy className="text-neon animate-bounce mb-3" size={32} />
              <h4 className="font-mono text-sm font-bold text-text-main mb-2">ROADMAP COMPLETO!</h4>
              <p className="text-xs text-text-muted">
                Parabéns! Completaste todos os módulos do roadmap. Estás preparado para as certificações.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
export default Dashboard
