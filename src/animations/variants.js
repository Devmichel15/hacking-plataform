// ── Framer Motion variants reutilizáveis ──

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
}

export const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  }
}

export const cardHover = {
  rest: { scale: 1, borderColor: 'rgba(0, 255, 136, 0.12)' },
  hover: {
    scale: 1.02,
    borderColor: 'rgba(0, 255, 136, 0.4)',
    transition: { duration: 0.2 }
  }
}

export const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 10px rgba(0, 255, 136, 0.2)',
      '0 0 25px rgba(0, 255, 136, 0.5)',
      '0 0 10px rgba(0, 255, 136, 0.2)'
    ],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
  }
}

export const pageTransition = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, x: 10, transition: { duration: 0.2 } }
}
