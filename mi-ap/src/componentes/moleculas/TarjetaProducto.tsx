import type { Producto } from '../../data/productos'
import { formatMoney } from '../../data/productos'
import { Boton } from '../atomos/Boton'

type ProductCardProps = {
  product: Producto
  onAdd: (id: number) => void
}

export function TarjetaProducto({ product, onAdd }: ProductCardProps) {
  return (
    <article className="card">
      <img src={product.imagen} alt={product.nombre} />
      <div className="card-body">
        <h3>{product.nombre}</h3>
        <p>{product.descripcion}</p>
        <strong>{formatMoney(product.precio)}</strong>
        <Boton onClick={() => onAdd(product.id)}>Agregar a selección</Boton>
      </div>
    </article>
  )
}
