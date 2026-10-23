import { useParams } from 'react-router-dom'
import { ArticuloNovedad } from '../componentes/organismos/ArticuloNovedad'
import { novedadesData } from '../data/novedades'

export function DetalleNovedad() {
  const { id } = useParams()
  const item = novedadesData.find((novedad) => novedad.id === id)

  if (!item) {
    return (
      <main className="page">
        <p>Novedad no encontrada.</p>
      </main>
    )
  }

  return (
    <main className="page">
      <ArticuloNovedad item={item} />
    </main>
  )
}
