import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import XPToast from '../ui/XPToast'
import { useSettingsStore } from '../../store/settingsStore'
import { useUserStore } from '../../store/userStore'

export const Layout = () => {
  const { scanlineEffect } = useSettingsStore()
  const { updateStreak } = useUserStore()
  const location = useLocation()

  // Atualizar o streak de login no primeiro render
  useEffect(() => {
    updateStreak()
  }, [])

  // Auto scroll para o topo quando muda de página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="flex w-full min-h-screen bg-primary text-text-main relative overflow-hidden grid-bg">
      {/* Scanline Effect Overlay */}
      {scanlineEffect && <div className="absolute inset-0 pointer-events-none scanlines z-50 opacity-[0.25]" />}

      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Header */}
        <Topbar />

        {/* Dynamic Page Router Outlet */}
        <main className="flex-1 p-8 overflow-y-auto max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>

      {/* Floating XP Toasts */}
      <XPToast />
    </div>
  )
}
export default Layout
