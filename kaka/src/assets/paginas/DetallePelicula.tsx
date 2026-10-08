import { useParams } from "react-router-dom";
import Boton from "../atomos/boton";
import { peliculas } from "../datos/peliculas";

function DetallePelicula() {
    const { id } = useParams();
    const pelicula = peliculas.find((p) => p.id === Number(id));

    if (!pelicula) {
        return (
            <div className="text-center py-5">
                <h2 className="mb-3">Película no encontrada</h2>
                <Boton to="/peliculas" texto="Volver a Películas" variante="secondary" />
            </div>
        );
    }

    return (
        <div className="row g-4 align-items-start">
            <div className="col-12 col-md-5 col-lg-4">
                <img
                    src={pelicula.imagen}
                    alt={pelicula.titulo}
                    className="img-fluid rounded shadow-sm w-100"
                    style={{ maxHeight: "520px", objectFit: "cover" }}
                />
            </div>
            <div className="col-12 col-md-7 col-lg-8">
                <h2 className="mb-3">{pelicula.titulo}</h2>
                <p>{pelicula.descripcion}</p>
                <ul className="list-unstyled mb-4">
                    <li><strong>Género:</strong> {pelicula.genero}</li>
                    <li><strong>Año de estreno:</strong> {pelicula.anio}</li>
                </ul>
                <Boton to="/peliculas" texto="Volver a Películas" variante="secondary" />
            </div>
        </div>
    );
}

export default DetallePelicula;
