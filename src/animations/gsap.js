import gsap from 'gsap'

// ── Animar contador numérico ──
export function animateCounter(element, target, duration = 1.5) {
  if (!element) return
  const obj = { value: 0 }
  gsap.to(obj, {
    value: target,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.round(obj.value).toLocaleString()
    }
  })
}

// ── Animar barra de progresso ──
export function animateProgressBar(element, targetPercent, duration = 1.2) {
  if (!element) return
  gsap.fromTo(element,
    { width: '0%' },
    { width: `${targetPercent}%`, duration, ease: 'power2.out' }
  )
}

// ── Animar entrada de lista (stagger) ──
export function animateStaggerList(elements, stagger = 0.08) {
  if (!elements || elements.length === 0) return
  gsap.fromTo(elements,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, stagger, ease: 'power2.out' }
  )
}

// ── Efeito glitch em texto ──
export function glitchEffect(element, repeat = 3) {
  if (!element) return
  const tl = gsap.timeline({ repeat: repeat - 1 })
  tl.to(element, { skewX: 2, duration: 0.05 })
    .to(element, { skewX: -2, duration: 0.05 })
    .to(element, { skewX: 0, duration: 0.05 })
    .to(element, { opacity: 0.8, duration: 0.02 })
    .to(element, { opacity: 1, duration: 0.02 })
}

// ── Scroll reveal ──
export function scrollReveal(elements) {
  if (!elements) return
  gsap.fromTo(elements,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 80%'
      }
    }
  )
}

// ── Neon flicker entry ──
export function neonFlicker(element) {
  if (!element) return
  gsap.fromTo(element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.1,
      repeat: 5,
      yoyo: true,
      ease: 'none',
      onComplete: () => gsap.set(element, { opacity: 1 })
    }
  )
}
