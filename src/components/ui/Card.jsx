import React from 'react'

export const Card = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  onClick,
  borderColor = 'rgba(0, 255, 136, 0.12)' 
}) => {
  return (
    <div
      onClick={onClick}
      style={{ borderColor }}
      className={`glass-card p-6 ${
        hoverEffect ? 'hover:border-neon/40 hover:scale-[1.01] hover:shadow-[0_0_15px_rgba(0,255,136,0.08)]' : ''
      } transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
export default Card
