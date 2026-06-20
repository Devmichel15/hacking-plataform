import React, { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { useToastStore } from '../../store/toastStore'
import { AlertTriangle, ShieldCheck, HeartCrack, Scale } from 'lucide-react'

export const Etica = () => {
  const { addToast } = useToastStore()
  const [pledged, setPledged] = useState(false)

  const handlePledge = () => {
    setPledged(true)
    addToast('Pacto de Ética Hacker assinado com sucesso!', 'success')
  }

  return (
    <div className="space-y-8 select-none p-4 md:p-0">
      {/* Banner */}
      <div className="glass-card p-8 border border-error/30 bg-gradient-to-r from-error/5 to-black relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-error/20 font-mono text-7xl select-none pointer-events-none">
          ⚠️
        </div>
        <div className="relative z-10 space-y-3">
          <span className="font-mono text-[9px] text-error font-bold tracking-widest uppercase flex items-center gap-1.5">
            <AlertTriangle size={12} className="animate-pulse" />
            TERMO OBRIGATÓRIO DE COMPROMISSO
          </span>
          <h1 className="font-mono text-xl md:text-2xl font-extrabold tracking-wide text-error">
            SEGURANÇA, ÉTICA & LEGISLAÇÃO
          </h1>
          <p className="text-xs text-text-muted max-w-2xl leading-relaxed">
            HackerPath AO é uma plataforma exclusivamente educacional. Não incentivamos nem ensinamos atividades ilegais. Toda atividade hacker deve ser realizada em laboratórios autorizados.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core Rules */}
        <Card className="border border-error/20 bg-black/40 space-y-4">
          <div className="flex items-center gap-2 text-error">
            <Scale size={16} />
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider">A REGRA DE OURO DO HACKING</h3>
          </div>
          <p className="text-xs text-text-muted leading-relaxed">
            A única diferença entre um Ethical Hacker (White Hat) e um Cibercriminoso (Black Hat) é a <strong className="text-neon">AUTORIZAÇÃO</strong>. 
          </p>
          <div className="p-4 bg-error/5 rounded border border-error/15 text-xs text-text-muted leading-relaxed space-y-2">
            <p className="font-bold text-error">NUNCA ATANQUES UM SISTEMA SEM AUTORIZAÇÃO EXPLICITA E ESCRITA.</p>
            <p>Em Angola, invasão de sistemas informáticos sem autorização é punível por lei sob o Código Penal Angolano e legislação de crimes cibernéticos em vigor.</p>
          </div>
        </Card>

        {/* Responsible Disclosure */}
        <Card className="border border-neon/20 bg-black/40 space-y-4">
          <div className="flex items-center gap-2 text-neon">
            <ShieldCheck size={16} />
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider">DIVULGAÇÃO RESPONSÁVEL</h3>
          </div>
          <p className="text-xs text-text-muted leading-relaxed">
            Se encontrares uma vulnerabilidade real num sistema de uma empresa angolana (como bancos, operadoras ou portais do governo):
          </p>
          <ul className="space-y-2.5 text-xs font-mono text-text-muted">
            <li className="flex gap-2 items-start">
              <span className="text-neon font-bold">1.</span>
              <span>Não explores para além do necessário para provar o conceito.</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-neon font-bold">2.</span>
              <span>Reporta o problema de forma privada aos administradores de TI.</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-neon font-bold">3.</span>
              <span>Dá tempo suficiente à equipa para corrigir antes de qualquer divulgação.</span>
            </li>
          </ul>
        </Card>
      </div>

      {/* The Hacker Pledge Box */}
      <Card className="border border-neon/40 bg-secondary/80 text-center max-w-xl mx-auto p-8 space-y-6">
        <div className="space-y-2">
          <h3 className="font-mono text-sm font-bold text-text-main">O PACTO DO HACKER ÉTICO</h3>
          <p className="text-xs text-text-muted leading-relaxed">
            Ao assinares este compromisso, declaras que utilizarás o conhecimento adquirido nesta plataforma apenas para fins defensivos, auditorias autorizadas e aprendizagem em ambientes controlados.
          </p>
        </div>

        {pledged ? (
          <div className="p-4 bg-neon/10 rounded border border-neon/30 text-neon font-mono text-xs font-bold flex items-center justify-center gap-2">
            <ShieldCheck size={16} />
            CONTRATO DE ÉTICA HACKER ASSINADO
          </div>
        ) : (
          <Button 
            variant="solid" 
            onClick={handlePledge}
            className="w-full max-w-xs mx-auto py-3 text-xs"
          >
            ACEITO E ASSINO O PACTO
          </Button>
        )}
      </Card>
    </div>
  )
}
export default Etica
