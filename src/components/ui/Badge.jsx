import React from 'react'

export const Badge = ({ 
  level = 'bronze', 
  children, 
  className = '',
  size = 'md'
}) => {
  const styles = {
    bronze: 'badge-bronze border-amber-800 text-amber-100',
    prata: 'badge-prata border-slate-400 text-slate-100',
    ouro: 'badge-ouro border-yellow-500 text-yellow-100',
    elite: 'badge-elite border-neon-dark text-bg-primary font-extrabold',
  }

  const sizes = {
    sm: 'text-[9px] px-1.5 py-0.5 border',
    md: 'text-[11px] px-2.5 py-1 border',
    lg: 'text-xs px-3.5 py-1.5 border-2',
  }

  return (
    <span className={`inline-flex items-center justify-center font-mono uppercase tracking-wider rounded-full border border-black/10 ${styles[level]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
}
export default Badge
