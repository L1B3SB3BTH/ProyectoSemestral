import Boton from "../atomos/boton";

function Inicio() {
    return (
        <div className="text-center py-5">
            <h1 className="display-5 mb-3">Bienvenido al Catálogo de Películas</h1>
            <p className="lead mb-4">
                Una plataforma para explorar nuestras películas disponibles, conocer su
                género, año de estreno y revisar la información de cada una.
            </p>
            <Boton to="/peliculas" texto="Ver películas" />
        </div>
    );
}

export default Inicio;
