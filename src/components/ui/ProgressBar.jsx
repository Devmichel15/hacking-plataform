import React from 'react'

export const ProgressBar = ({ 
  percent = 0, 
  size = 'md', 
  showLabel = false, 
  className = '',
  color = 'bg-neon'
}) => {
  const heights = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3.5'
  }

  const clampedPercent = Math.min(100, Math.max(0, percent))

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1.5 font-mono text-[10px] text-text-muted">
          <span>PROGRESSO</span>
          <span className="text-neon font-bold">{clampedPercent}%</span>
        </div>
      )}
      <div className={`w-full bg-bg-secondary rounded-full overflow-hidden border border-white/5 ${heights[size]}`}>
        <div
          className={`${color} h-full rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${clampedPercent}%` }}
        />
      </div>
    </div>
  )
}
export default ProgressBar
