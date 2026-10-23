import { productosData } from '../../data/productos'
import { TarjetaProducto } from '../moleculas/TarjetaProducto'

type FeaturedProductsProps = { onAdd: (id: number) => void }

export function ProductosDestacados({ onAdd }: FeaturedProductsProps) {
  return (
    <section className="productos">
      <h2>Productos destacados</h2>
      <div className="product-grid">
        {productosData.map((product) => <TarjetaProducto key={product.id} product={product} onAdd={onAdd} />)}
      </div>
    </section>
  )
}
