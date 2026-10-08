import ListaPeliculas from "../organismos/ListaPeliculas";
import { peliculas } from "../datos/peliculas";

function Peliculas() {
    return (
        <div>
            <h2 className="mb-4">Películas</h2>
            <ListaPeliculas peliculas={peliculas} />
        </div>
    );
}

export default Peliculas;
