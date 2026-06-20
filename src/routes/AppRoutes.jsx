import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Dashboard from '../pages/dashboard/Dashboard'
import Fundamentos from '../pages/fundamentos/Fundamentos'
import Redes from '../pages/redes/Redes'
import Linux from '../pages/linux/Linux'
import Kali from '../pages/kali/Kali'
import Web from '../pages/web/Web'
import Mobile from '../pages/mobile/Mobile'
import Advanced from '../pages/advanced/Advanced'
import Ferramentas from '../pages/ferramentas/Ferramentas'
import Recursos from '../pages/recursos/Recursos'
import Certificacoes from '../pages/certificacoes/Certificacoes'
import Etica from '../pages/etica/Etica'
import Perfil from '../pages/perfil/Perfil'
import ModuloDetalhe from '../pages/modulo/ModuloDetalhe'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="fundamentos" element={<Fundamentos />} />
        <Route path="redes" element={<Redes />} />
        <Route path="linux" element={<Linux />} />
        <Route path="kali" element={<Kali />} />
        <Route path="web" element={<Web />} />
        <Route path="mobile" element={<Mobile />} />
        <Route path="advanced" element={<Advanced />} />
        <Route path="ferramentas" element={<Ferramentas />} />
        <Route path="recursos" element={<Recursos />} />
        <Route path="certificacoes" element={<Certificacoes />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="etica" element={<Etica />} />
        <Route path="modulo/:id" element={<ModuloDetalhe />} />
        <Route path="*" element={<div className="font-mono text-center py-20 text-error">404 // HOST_NOT_FOUND</div>} />
      </Route>
    </Routes>
  )
}
export default AppRoutes
