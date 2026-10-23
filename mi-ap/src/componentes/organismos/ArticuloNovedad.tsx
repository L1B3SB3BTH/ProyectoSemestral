import { Link } from 'react-router-dom'
import type { Novedad } from '../../data/novedades'

export function ArticuloNovedad({ item }: { item: Novedad }) {
  return (
    <article className="content-card detail">
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} />
      {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {item.tips && <ol>{item.tips.map((tip) => <li key={tip}>{tip}</li>)}</ol>}
      <Link className="outline-button" to="/novedades">← Volver a Novedades</Link>
    </article>
  )
}
