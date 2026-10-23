import { ListaNovedades } from '../componentes/organismos/ListaNovedades'
import { PresentacionTienda } from '../componentes/organismos/PresentacionTienda'
import { ProductosDestacados } from '../componentes/organismos/ProductosDestacados'

type InicioProps = {
  onAdd: (id: number) => void
}

export function Inicio({ onAdd }: InicioProps) {
  return (
    <main className="page">
      <PresentacionTienda />
      <ProductosDestacados onAdd={onAdd} />
      <ListaNovedades />
    </main>
  )
}
