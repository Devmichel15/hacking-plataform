import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useToastStore } from '../../store/toastStore'
import { Award, CheckCircle, AlertTriangle } from 'lucide-react'

export const XPToast = () => {
  const toasts = useToastStore((state) => state.toasts)
  const removeToast = useToastStore((state) => state.removeToast)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 30, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 50, transition: { duration: 0.2 } }}
            onClick={() => removeToast(toast.id)}
            className="pointer-events-auto flex items-center gap-3.5 px-4 py-3 rounded-lg border bg-card/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-neon/30 text-xs font-mono select-none cursor-pointer"
          >
            {toast.xp > 0 ? (
              <div className="flex items-center justify-center w-8 h-8 rounded bg-neon/10 border border-neon/30 text-neon font-bold text-xs animate-bounce">
                +{toast.xp}
              </div>
            ) : toast.type === 'error' ? (
              <AlertTriangle className="text-error" size={20} />
            ) : (
              <CheckCircle className="text-neon" size={20} />
            )}
            
            <div className="flex flex-col gap-0.5">
              <span className="text-text-main font-semibold">{toast.message}</span>
              {toast.xp > 0 && <span className="text-[10px] text-neon uppercase tracking-wider">XP RECOMPENSA</span>}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
export default XPToast
