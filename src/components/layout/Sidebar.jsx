import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Brain, 
  Globe, 
  Terminal, 
  ShieldAlert, 
  Code, 
  Smartphone, 
  Wrench, 
  BookOpen, 
  FileBadge, 
  User, 
  AlertTriangle 
} from 'lucide-react'

export const Sidebar = () => {
  const location = useLocation()

  const menuItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={18} /> },
    { name: 'Fundamentos', path: '/fundamentos', icon: <Brain size={18} /> },
    { name: 'Redes', path: '/redes', icon: <Globe size={18} /> },
    { name: 'Linux', path: '/linux', icon: <Terminal size={18} /> },
    { name: 'Kali Linux', path: '/kali', icon: <ShieldAlert size={18} /> },
    { name: 'Web Security', path: '/web', icon: <Code size={18} /> },
    { name: 'Mobile Security', path: '/mobile', icon: <Smartphone size={18} /> },
    { name: 'Ferramentas', path: '/ferramentas', icon: <Wrench size={18} /> },
    { name: 'Recursos', path: '/recursos', icon: <BookOpen size={18} /> },
    { name: 'Certificações', path: '/certificacoes', icon: <FileBadge size={18} /> },
    { name: 'Perfil', path: '/perfil', icon: <User size={18} /> },
  ]

  return (
    <aside className="w-64 bg-secondary border-r border-white/5 flex flex-col h-screen sticky top-0 shrink-0 select-none">
      {/* Brand Logo */}
      <div className="p-6 border-b border-white/5 flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-neon/10 border border-neon flex items-center justify-center font-mono text-neon font-extrabold text-sm shadow-[0_0_10px_rgba(0,255,136,0.3)]">
          HP
        </div>
        <div className="flex flex-col">
          <span className="font-mono font-bold text-xs tracking-widest text-text-main glitch">HACKERPATH</span>
          <span className="font-mono text-[9px] text-neon tracking-widest font-semibold uppercase">AO // ANGOLA</span>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 scrollbar-thin">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3.5 px-4 py-3 rounded text-xs font-mono tracking-wide transition-all duration-300 hover:bg-white/5 hover:text-neon ${
                isActive ? 'sidebar-item-active font-bold' : 'text-text-muted'
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Ethics & Safety Sticky Section */}
      <div className="p-4 border-t border-white/5 bg-black/40">
        <Link
          to="/etica"
          className={`flex items-center gap-3.5 px-4 py-3 rounded text-[10px] font-mono font-bold tracking-widest border border-error/20 hover:border-error bg-error/5 hover:bg-error/15 text-error transition-all duration-300 ${
            location.pathname === '/etica' ? 'border-error bg-error/20 text-error shadow-[0_0_15px_rgba(255,77,77,0.2)]' : ''
          }`}
        >
          <AlertTriangle size={14} className="animate-pulse" />
          <span>SEGURANÇA & ÉTICA</span>
        </Link>
      </div>
    </aside>
  )
}
export default Sidebar
