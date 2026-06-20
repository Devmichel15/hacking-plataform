import React, { useState } from 'react'
import { RECURSOS } from '../../data/recursos'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Book, Globe, Video, ExternalLink } from 'lucide-react'

export const Recursos = () => {
  const [activeTab, setActiveTab] = useState('livros') // livros, plataformas, videos

  const categories = [
    { id: 'livros', label: 'LIVROS RECOMENDADOS', icon: <Book size={14} /> },
    { id: 'plataformas', label: 'PLATAFORMAS PRÁTICAS', icon: <Globe size={14} /> },
    { id: 'videos', label: 'CANAIS DE VÍDEO', icon: <Video size={14} /> }
  ]

  const items = RECURSOS[activeTab] || []

  return (
    <div className="space-y-8 select-none p-4 md:p-0">
      {/* Banner */}
      <div className="glass-card p-8 border border-white/5 bg-gradient-to-r from-secondary via-card to-black">
        <h1 className="font-mono text-xl md:text-2xl font-extrabold tracking-wide text-text-main flex items-center gap-2">
          📚 RECURSOS EXTERNOS
        </h1>
        <p className="text-xs text-text-muted mt-2 max-w-xl">
          Amplia os teus conhecimentos com as melhores fontes de estudo da comunidade global de Cybersecurity.
        </p>
      </div>

      {/* Tabs Filter Bar */}
      <div className="flex gap-2 border-b border-white/5 pb-4 font-mono text-xs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded transition-all duration-200 cursor-pointer ${
              activeTab === cat.id 
                ? 'bg-neon/10 border border-neon/30 text-neon' 
                : 'hover:bg-white/5 text-text-muted'
            }`}
          >
            {cat.icon}
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <Card key={item.id} className="flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{item.icon}</span>
                  <div className="flex flex-col">
                    <h3 className="font-mono text-sm font-bold text-text-main leading-tight">{item.title}</h3>
                    {item.authors && <span className="text-[10px] text-text-dim">Por: {item.authors}</span>}
                  </div>
                </div>
                {item.level && (
                  <span className="font-mono text-[9px] text-text-muted border border-white/10 px-2 py-0.5 rounded">
                    {item.level}
                  </span>
                )}
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                {item.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map(tag => (
                  <span key={tag} className="font-mono text-[8px] text-neon-dark bg-neon/5 px-2 py-0.5 rounded border border-neon/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex justify-between items-center">
              {item.free && (
                <span className="font-mono text-[9px] text-neon uppercase font-semibold">
                  GRATUITO / MODELO FREEMIUM
                </span>
              )}
              {!item.free && <div />}
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1 font-mono text-[10px] text-neon hover:underline"
              >
                <span>ACEDER RECURSO</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
export default Recursos
