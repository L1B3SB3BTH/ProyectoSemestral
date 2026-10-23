import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './componentes/organismos/Navbar'
import { PiePagina } from './componentes/organismos/PiePagina'
import { Nosotros } from './paginas/Nosotros'
import { Contacto } from './paginas/Contacto'
import { Inicio } from './paginas/inicio'
import { Login } from './paginas/Login'
import { DetalleNovedad } from './paginas/detalleNovedad'
import { Novedades } from './paginas/Novedades'
import { Registro } from './paginas/Registro'
import { Seleccion } from './paginas/Seleccion'

const selectionKey = 'seleccionSonidoVivo'

function AppContent() {
  const [selection, setSelection] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(selectionKey) || '[]') as number[]
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(selectionKey, JSON.stringify(selection))
  }, [selection])

  const add = (id: number) => setSelection((current) => current.includes(id) ? current : [...current, id])
  const remove = (id: number) => setSelection((current) => current.filter((item) => item !== id))

  return (
    <>
      <Navbar selectionCount={selection.length} />
      <Routes>
        <Route path="/" element={<Inicio onAdd={add} />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/novedades/:id" element={<DetalleNovedad />} />
        <Route path="/seleccion" element={<Seleccion selection={selection} onRemove={remove} />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<Inicio onAdd={add} />} />
      </Routes>
      <PiePagina />
    </>
  )
}

export default function App() {
  return <BrowserRouter><AppContent /></BrowserRouter>
}
