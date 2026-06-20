import React from 'react'
import { CERTIFICATIONS } from '../../data/conquistas'
import { Card } from '../../components/ui/Card'
import { Award, ShieldAlert, Sparkles, BookOpen } from 'lucide-react'

export const Certificacoes = () => {
  return (
    <div className="space-y-8 select-none p-4 md:p-0">
      {/* Banner */}
      <div className="glass-card p-8 border border-white/5 bg-gradient-to-r from-secondary via-card to-black">
        <h1 className="font-mono text-xl md:text-2xl font-extrabold tracking-wide text-text-main flex items-center gap-2">
          🏆 CERTIFICAÇÕES INTERNACIONAIS
        </h1>
        <p className="text-xs text-text-muted mt-2 max-w-xl">
          Prepara-te para as principais qualificações da indústria global de Cybersecurity e valida a tua carreira.
        </p>
      </div>

      {/* Intro info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="flex items-start gap-3 bg-secondary/40 border border-neon/15">
          <Award size={18} className="text-neon mt-0.5 shrink-0" />
          <div className="space-y-1">
            <h4 className="font-mono text-xs font-bold text-text-main">VALORIZADO NO MERCADO</h4>
            <p className="text-[11px] text-text-muted">Empresas angolanas valorizam certificações para comprovar conhecimentos teóricos e práticos em auditorias.</p>
          </div>
        </Card>

        <Card className="flex items-start gap-3 bg-secondary/40 border border-neon/15">
          <BookOpen size={18} className="text-neon mt-0.5 shrink-0" />
          <div className="space-y-1">
            <h4 className="font-mono text-xs font-bold text-text-main">TEORIA E PRÁTICA</h4>
            <p className="text-[11px] text-text-muted">A nossa plataforma cobre a teoria básica necessária para exames como Security+ e laboratórios do eJPT.</p>
          </div>
        </Card>

        <Card className="flex items-start gap-3 bg-secondary/40 border border-neon/15">
          <Sparkles size={18} className="text-neon mt-0.5 shrink-0" />
          <div className="space-y-1">
            <h4 className="font-mono text-xs font-bold text-text-main">PLANO DE CARREIRA</h4>
            <p className="text-[11px] text-text-muted">Começa pelas certificações de nível inicial (eJPT) e progride até ao padrão dourado (OSCP).</p>
          </div>
        </Card>
      </div>

      {/* Certifications cards list */}
      <div className="space-y-6">
        {CERTIFICATIONS.map((cert) => (
          <Card key={cert.id} className="relative overflow-hidden border border-white/5 bg-secondary/60">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-mono text-base font-extrabold text-text-main">{cert.title}</h3>
                  <span className="font-mono text-[9px] text-text-muted px-2 py-0.5 rounded border border-white/10">
                    {cert.org}
                  </span>
                </div>
                <p className="text-xs text-text-muted max-w-2xl">{cert.description}</p>
              </div>

              <div className="shrink-0 flex items-center md:flex-col gap-2 md:items-end">
                <span className="font-mono text-[9px] text-neon uppercase tracking-wider font-semibold">
                  NÍVEL: {cert.level}
                </span>
              </div>
            </div>

            {/* Preparation plan */}
            <div className="pt-4 border-t border-white/5 space-y-2">
              <h4 className="font-mono text-[10px] font-bold text-text-muted tracking-widest uppercase">
                PLANO DE PREPARAÇÃO RECOMENDADO:
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono">
                {cert.prep.map((step, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-text-muted">
                    <span className="text-neon text-[10px]">▶</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
export default Certificacoes
