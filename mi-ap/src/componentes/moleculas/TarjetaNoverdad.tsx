import { Link } from 'react-router-dom'
import type { Novedad } from '../../data/novedades'

export function TarjetaNovedad({ item }: { item: Novedad }) {
  return (
    <article className="news-card">
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <Link className="outline-button" to={`/novedades/${item.id}`}>Leer más</Link>
      </div>
    </article>
  )
}
