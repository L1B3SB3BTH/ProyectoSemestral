import  TarjetaPelicula from "../moleculas/TarjetaPelicula";
import type { Pelicula } from "../tipos/pelicula";

interface ListaPeliculasProps {
    peliculas: Pelicula[];
}

function ListaPeliculas({ peliculas }: ListaPeliculasProps) {
    return (
        <div className="row g-4">
            {peliculas.map((pelicula) => (
                <div key={pelicula.id} className="col-12 col-sm-6 col-lg-3">
                    <TarjetaPelicula pelicula={pelicula} />
                </div>
            ))}
        </div>
    );
}

export default ListaPeliculas;
