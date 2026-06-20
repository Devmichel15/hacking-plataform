import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import Button from './Button'

export const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer,
  className = '' 
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className={`relative w-full max-w-lg glass-card border border-neon/30 flex flex-col max-h-[85vh] overflow-hidden fade-in-up z-10 ${className}`}>
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/5 bg-bg-secondary">
          <h3 className="font-mono text-sm tracking-wider font-bold text-neon">{title}</h3>
          <button 
            onClick={onClose} 
            className="text-text-muted hover:text-error transition-colors p-1 cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 p-6 overflow-y-auto font-sans text-sm leading-relaxed text-text-main">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-white/5 bg-bg-secondary flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
export default Modal
