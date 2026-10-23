import type { Producto } from '../../data/productos'
import { formatMoney } from '../../data/productos'
import { Boton } from '../atomos/Boton'

type SelectionItemProps = {
  product: Producto
  onRemove: (id: number) => void
}

export function ItemSeleccion({ product, onRemove }: SelectionItemProps) {
  return (
    <div className="selection-item">
      <img src={product.imagen} alt={product.nombre} />
      <div>
        <h3>{product.nombre}</h3>
        <strong>{formatMoney(product.precio)}</strong>
      </div>
      <Boton variant="danger" onClick={() => onRemove(product.id)}>Quitar</Boton>
    </div>
  )
}
