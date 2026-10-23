import { SeleccionProductos } from '../componentes/organismos/SeleccionProductos'

type SeleccionProps = {
  selection: number[]
  onRemove: (id: number) => void
}

export function Seleccion({ selection, onRemove }: SeleccionProps) {
  return (
    <main className="page">
      <SeleccionProductos selection={selection} onRemove={onRemove} />
    </main>
  )
}
