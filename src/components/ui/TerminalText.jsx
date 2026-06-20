import React, { useState, useEffect } from 'react'

export const TerminalText = ({ 
  text, 
  speed = 30, 
  delay = 0,
  className = '',
  showCursor = true 
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!started) return

    let i = 0
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i))
      i++
      if (i >= text.length) {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [started, text, speed])

  return (
    <span className={`font-mono ${className}`}>
      {displayedText}
      {showCursor && (displayedText.length < text.length || text.length === 0) && (
        <span className="terminal-cursor" />
      )}
    </span>
  )
}
export default TerminalText
