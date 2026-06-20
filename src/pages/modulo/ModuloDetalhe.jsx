import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useProgressStore } from '../../store/progressStore'
import { useToastStore } from '../../store/toastStore'
import { ROADMAP } from '../../data/roadmap'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { TerminalText } from '../../components/ui/TerminalText'
import { 
  BookOpen, 
  Terminal, 
  HelpCircle, 
  CheckCircle, 
  Award,
  ChevronRight
} from 'lucide-react'

export const ModuloDetalhe = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { modules, markTopicRead, completeExercise, completeQuiz } = useProgressStore()
  const { addToast } = useToastStore()

  const [activeTab, setActiveTab] = useState('teoria') // teoria, lab, quiz
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [quizScore, setQuizScore] = useState(0)

  // Simulação de terminal interativo no Lab
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'info', text: 'HackerPath OS [Versão 1.0.4]' },
    { type: 'info', text: 'Laboratório virtual inicializado. Digita "help" para ver comandos.' }
  ])

  // Localizar o módulo no roadmap
  let currentModule = null
  let currentPhase = null

  for (const phase of ROADMAP) {
    const found = phase.modules.find(m => m.id === id)
    if (found) {
      currentModule = found
      currentPhase = phase
      break
    }
  }

  const moduleState = modules[id]

  // Se o módulo não existe ou está bloqueado, voltar para home
  useEffect(() => {
    if (!currentModule || (moduleState && moduleState.status === 'locked')) {
      addToast('Módulo bloqueado ou inexistente.', 'error')
      navigate('/')
    }
  }, [id, currentModule, moduleState, navigate])

  if (!currentModule || !moduleState) return null

  // Calcular progresso do módulo atual
  const topicsCompleted = moduleState.topicsRead.length
  const totalTopics = currentModule.topics.length
  const exercisesCompleted = moduleState.exercisesCompleted.length
  const totalExercises = (currentModule.exercises || []).length
  const quizDone = moduleState.quizCompleted

  const totalActions = totalTopics + totalExercises + (currentModule.quiz ? 1 : 0)
  const completedActions = topicsCompleted + exercisesCompleted + (quizDone ? 1 : 0)
  const moduleProgress = Math.round((completedActions / totalActions) * 100)

  // Lógica do Quiz
  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted || quizDone) return
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIdx }))
  }

  const handleSubmitQuiz = () => {
    if (quizSubmitted || quizDone) return
    
    let correctCount = 0
    currentModule.quiz.forEach(q => {
      if (selectedAnswers[q.id] === q.answer) {
        correctCount++
      }
    })

    setQuizScore(correctCount)
    setQuizSubmitted(true)
    
    // Registar no store
    completeQuiz(currentModule.id, correctCount, currentModule.quiz.length)
    addToast(`Quiz concluído! Acertaste ${correctCount} de ${currentModule.quiz.length}`, 'success', 50)
  }

  // Lógica do Simulador de Terminal
  const handleTerminalSubmit = (e) => {
    e.preventDefault()
    const cmd = terminalInput.trim().toLowerCase()
    if (!cmd) return

    const newLogs = [...terminalLogs, { type: 'input', text: `$ ${terminalInput}` }]

    if (cmd === 'help') {
      newLogs.push({ type: 'info', text: 'Comandos disponíveis: help, clear, ipconfig, ifconfig, ping, nslookup, ls, whoami' })
    } else if (cmd === 'clear') {
      setTerminalLogs([])
      setTerminalInput('')
      return
    } else if (cmd === 'whoami') {
      newLogs.push({ type: 'success', text: 'nethunter_ao@hackerpath' })
    } else if (cmd === 'ipconfig' || cmd === 'ifconfig') {
      newLogs.push(
        { type: 'info', text: 'Interface: eth0 (Rede Local)' },
        { type: 'success', text: 'IP Local: 192.168.1.15' },
        { type: 'info', text: 'Netmask: 255.255.255.0' },
        { type: 'info', text: 'Gateway: 192.168.1.1' }
      )
      // Resolver exercício de IP se este for o módulo correto
      const targetEx = (currentModule.exercises || []).find(e => e.id === 'ex-ip-local' || e.id === 'ex-rede-local')
      if (targetEx && !moduleState.exercisesCompleted.includes(targetEx.id)) {
        completeExercise(currentModule.id, targetEx.id, targetEx.xp)
        addToast(`Exercício "${targetEx.title}" concluído!`, 'success', targetEx.xp)
      }
    } else if (cmd.startsWith('nslookup')) {
      const parts = cmd.split(' ')
      if (parts.length > 1) {
        newLogs.push(
          { type: 'info', text: `A consultar DNS para: ${parts[1]}` },
          { type: 'success', text: `Servidor: 8.8.8.8 (Google DNS)` },
          { type: 'success', text: `IP Resolvido: 142.250.185.46` }
        )
        const targetEx = (currentModule.exercises || []).find(e => e.id === 'ex-dns-sites')
        if (targetEx && !moduleState.exercisesCompleted.includes(targetEx.id)) {
          completeExercise(currentModule.id, targetEx.id, targetEx.xp)
          addToast(`Exercício "${targetEx.title}" concluído!`, 'success', targetEx.xp)
        }
      } else {
        newLogs.push({ type: 'error', text: 'Uso: nslookup [dominio.com]' })
      }
    } else if (cmd.startsWith('ping')) {
      newLogs.push(
        { type: 'info', text: `A enviar pacotes ICMP...` },
        { type: 'success', text: `64 bytes from 142.250.185.46: icmp_seq=1 ttl=115 time=22ms` },
        { type: 'success', text: `64 bytes from 142.250.185.46: icmp_seq=2 ttl=115 time=20ms` },
        { type: 'info', text: `--- estatísticas de ping --- 2 pacotes transmitidos, 2 recebidos` }
      )
      const targetEx = (currentModule.exercises || []).find(e => e.id === 'ex-ping')
      if (targetEx && !moduleState.exercisesCompleted.includes(targetEx.id)) {
        completeExercise(currentModule.id, targetEx.id, targetEx.xp)
        addToast(`Exercício "${targetEx.title}" concluído!`, 'success', targetEx.xp)
      }
    } else {
      newLogs.push({ type: 'error', text: `Comando não reconhecido: ${cmd}. Tenta "help".` })
    }

    setTerminalLogs(newLogs)
    setTerminalInput('')
  }

  return (
    <div className="space-y-6 select-none p-4 md:p-0">
      {/* Header breadcrumb navigation */}
      <div className="flex items-center gap-3 font-mono text-[10px] text-text-muted">
        <Link to={`/${currentPhase.id}`} className="hover:text-neon transition-colors uppercase">
          {currentPhase.title}
        </Link>
        <ChevronRight size={10} />
        <span className="text-neon uppercase">{currentModule.title}</span>
      </div>

      {/* Main card panel */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side: Module navigation index & progress */}
        <div className="w-full md:w-80 shrink-0 space-y-6">
          <Card className="border border-neon/20 bg-secondary/40 p-6">
            <h3 className="font-mono text-xs font-bold text-text-main tracking-wider mb-4 uppercase">
              ÍNDICE DO MÓDULO
            </h3>
            
            {/* Action buttons tabs */}
            <div className="flex flex-col gap-2 font-mono text-xs">
              <button
                onClick={() => setActiveTab('teoria')}
                className={`flex items-center justify-between px-3 py-3 rounded transition-all duration-200 cursor-pointer ${
                  activeTab === 'teoria' 
                    ? 'bg-neon/10 border-l-2 border-neon text-neon font-bold' 
                    : 'hover:bg-white/5 text-text-muted'
                }`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen size={14} />
                  <span>1. Teoria & Conceitos</span>
                </div>
                <span className="text-[10px] text-text-dim">{topicsCompleted}/{totalTopics}</span>
              </button>

              <button
                onClick={() => setActiveTab('lab')}
                className={`flex items-center justify-between px-3 py-3 rounded transition-all duration-200 cursor-pointer ${
                  activeTab === 'lab' 
                    ? 'bg-neon/10 border-l-2 border-neon text-neon font-bold' 
                    : 'hover:bg-white/5 text-text-muted'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Terminal size={14} />
                  <span>2. Laboratório Prático</span>
                </div>
                <span className="text-[10px] text-text-dim">{exercisesCompleted}/{totalExercises}</span>
              </button>

              {currentModule.quiz && currentModule.quiz.length > 0 && (
                <button
                  onClick={() => setActiveTab('quiz')}
                  className={`flex items-center justify-between px-3 py-3 rounded transition-all duration-200 cursor-pointer ${
                    activeTab === 'quiz' 
                      ? 'bg-neon/10 border-l-2 border-neon text-neon font-bold' 
                      : 'hover:bg-white/5 text-text-muted'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <HelpCircle size={14} />
                    <span>3. Checkpoint Quiz</span>
                  </div>
                  {quizDone && <CheckCircle size={12} className="text-neon" />}
                </button>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
              <div className="flex justify-between items-center text-[10px] font-mono text-text-muted">
                <span>CONCURSO MÓDULO</span>
                <span>{moduleProgress}%</span>
              </div>
              <ProgressBar percent={moduleProgress} size="sm" />
            </div>
          </Card>
        </div>

        {/* Right side: Active tab display area */}
        <div className="flex-1">
          {activeTab === 'teoria' && (
            <div className="space-y-6">
              {currentModule.topics.map((topic, idx) => {
                const isRead = moduleState.topicsRead.includes(topic.id)
                return (
                  <Card 
                    key={topic.id} 
                    borderColor={isRead ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 255, 255, 0.05)'}
                    className="space-y-4 p-6"
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-[9px] text-neon-dark uppercase tracking-widest font-semibold">
                        TÓPICO {idx + 1}
                      </span>
                      {isRead && (
                        <span className="flex items-center gap-1 font-mono text-[9px] text-neon font-bold">
                          <CheckCircle size={12} />
                          LIDO
                        </span>
                      )}
                    </div>
                    <h3 className="font-mono text-base font-bold text-text-main">{topic.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed whitespace-pre-line">
                      {topic.content}
                    </p>
                    {!isRead && (
                      <div className="pt-2 flex justify-end">
                        <Button 
                          variant="primary" 
                          onClick={() => {
                            markTopicRead(currentModule.id, topic.id, 10)
                            addToast(`Tópico "${topic.title}" lido!`, 'success', 10)
                          }}
                          className="text-[10px] py-1.5"
                        >
                          MARCAR COMO LIDO (+10 XP)
                        </Button>
                      </div>
                    )}
                  </Card>
                )
              })}
            </div>
          )}

          {activeTab === 'lab' && (
            <div className="space-y-6">
              {/* Lab guidelines & list */}
              <div className="space-y-4">
                <h3 className="font-mono text-sm font-bold text-text-main">TAREFAS PRÁTICAS</h3>
                {(currentModule.exercises || []).map((ex) => {
                  const isDone = moduleState.exercisesCompleted.includes(ex.id)
                  return (
                    <Card 
                      key={ex.id} 
                      borderColor={isDone ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 255, 255, 0.05)'}
                      className="flex justify-between items-center p-6"
                    >
                      <div className="space-y-1">
                        <h4 className="font-mono text-xs font-bold text-text-main">{ex.title}</h4>
                        <p className="text-xs text-text-muted">{ex.description}</p>
                      </div>
                      <div className="shrink-0 pl-4">
                        {isDone ? (
                          <span className="flex items-center gap-1 font-mono text-[10px] text-neon font-bold">
                            <CheckCircle size={14} />
                            COMPLETO
                          </span>
                        ) : (
                          <span className="font-mono text-[9px] text-warning font-semibold tracking-wider">
                            RESOLVE NO TERMINAL ABAIXO
                          </span>
                        )}
                      </div>
                    </Card>
                  )
                })}
              </div>

              {/* Simulated Interactive Terminal */}
              <div className="flex flex-col rounded-lg border border-white/10 bg-black overflow-hidden font-mono text-xs shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-secondary select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-error" />
                    <span className="w-2.5 h-2.5 rounded-full bg-warning" />
                    <span className="w-2.5 h-2.5 rounded-full bg-success" />
                  </div>
                  <span className="text-[10px] text-text-muted font-bold">SIMULADOR TERMINAL VIRTUAL</span>
                  <span className="w-4" />
                </div>

                {/* Terminal Content Logs */}
                <div className="h-64 p-4 overflow-y-auto space-y-1.5 bg-black/95">
                  {terminalLogs.map((log, idx) => (
                    <div 
                      key={idx} 
                      className={
                        log.type === 'error' ? 'text-error' : 
                        log.type === 'success' ? 'text-neon' : 
                        log.type === 'input' ? 'text-white' : 
                        'text-text-muted'
                      }
                    >
                      {log.text}
                    </div>
                  ))}
                </div>

                {/* Terminal Form Input */}
                <form onSubmit={handleTerminalSubmit} className="flex border-t border-white/10 bg-secondary">
                  <span className="pl-4 py-3 text-neon font-bold select-none">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-white px-2 py-3 font-mono text-xs"
                    placeholder="Digita comandos aqui..."
                    autoFocus
                  />
                </form>
              </div>
            </div>
          )}

          {activeTab === 'quiz' && currentModule.quiz && (
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Award className="text-neon" size={16} />
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-text-main">
                    QUIZ AVALIAÇÃO DE CONHECIMENTOS
                  </h3>
                </div>

                <div className="space-y-8">
                  {currentModule.quiz.map((q, idx) => (
                    <div key={q.id} className="space-y-3">
                      <h4 className="font-mono text-xs font-bold text-text-main">
                        {idx + 1}. {q.question}
                      </h4>
                      <div className="grid grid-cols-1 gap-2.5">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = selectedAnswers[q.id] === optIdx
                          const isCorrect = q.answer === optIdx
                          const isWrong = isSelected && !isCorrect
                          const showCorrect = (quizSubmitted || quizDone) && isCorrect
                          const showWrong = (quizSubmitted || quizDone) && isWrong

                          return (
                            <button
                              key={optIdx}
                              disabled={quizSubmitted || quizDone}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                              className={`w-full text-left px-4 py-3 rounded border font-mono text-xs transition-all duration-200 cursor-pointer ${
                                showCorrect ? 'border-neon bg-neon/10 text-neon' :
                                showWrong ? 'border-error bg-error/10 text-error' :
                                isSelected ? 'border-info bg-info/10 text-info' :
                                'border-white/5 bg-black/20 hover:border-white/20 text-text-muted'
                              }`}
                            >
                              {opt}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {!quizSubmitted && !quizDone && (
                  <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                    <Button 
                      variant="solid" 
                      onClick={handleSubmitQuiz}
                      disabled={Object.keys(selectedAnswers).length < currentModule.quiz.length}
                    >
                      SUBMETER QUIZ
                    </Button>
                  </div>
                )}

                {(quizSubmitted || quizDone) && (
                  <div className="mt-8 pt-6 border-t border-white/5 text-center space-y-2">
                    <div className="text-neon font-bold font-mono text-sm">QUIZ COMPLETO</div>
                    <p className="text-xs text-text-muted">
                      Completaste com sucesso este quiz de checkpoint.
                    </p>
                  </div>
                )}
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default ModuloDetalhe
