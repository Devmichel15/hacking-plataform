import React from 'react'

export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false, 
  className = '', 
  type = 'button' 
}) => {
  const baseStyle = 'relative font-mono font-bold uppercase tracking-wider text-xs px-5 py-2.5 rounded transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer'
  
  const variants = {
    primary: 'bg-transparent text-neon border border-neon hover:bg-neon/10 hover:shadow-[0_0_15px_rgba(0,255,136,0.3)]',
    solid: 'bg-neon text-bg-primary hover:bg-neon-dark shadow-[0_0_10px_rgba(0,255,136,0.2)]',
    ghost: 'text-text-muted hover:text-neon bg-transparent hover:bg-white/5 border border-transparent',
    danger: 'bg-transparent text-error border border-error hover:bg-error/10 hover:shadow-[0_0_15px_rgba(255,77,77,0.3)]',
    info: 'bg-transparent text-info border border-info hover:bg-info/10 hover:shadow-[0_0_15px_rgba(0,191,255,0.3)]',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
export default Button
