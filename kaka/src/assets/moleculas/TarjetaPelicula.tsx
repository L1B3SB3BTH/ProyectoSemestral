import Boton from "../atomos/boton";
import type { Pelicula } from "../tipos/pelicula";

interface TarjetaPeliculaProps {
    pelicula: Pelicula;
}

function TarjetaPelicula({ pelicula }: TarjetaPeliculaProps) {
    return (
        <div className="card h-100 shadow-sm">
            <img
                src={pelicula.imagen}
                alt={pelicula.titulo}
                className="card-img-top"
                style={{ height: "320px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{pelicula.titulo}</h5>
                <p className="card-text text-muted mb-3">
                    {pelicula.genero} · {pelicula.anio}
                </p>
                <div className="mt-auto">
                    <Boton to={`/peliculas/${pelicula.id}`} texto="Ver detalle" />
                </div>
            </div>
        </div>
    );
}

export default TarjetaPelicula;