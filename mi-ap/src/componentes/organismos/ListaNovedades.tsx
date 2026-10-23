import { novedadesData } from '../../data/novedades'
import { TarjetaNovedad } from '../moleculas/TarjetaNoverdad'

export function ListaNovedades() {
  return (
    <section className="content-section">
      <h2>Novedades</h2>
      <div className="news-grid">
        {novedadesData.map((item) => <TarjetaNovedad key={item.id} item={item} />)}
      </div>
    </section>
  )
}
