import EnlaceNav from "../atomos/EnlaceNav";

function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand">Catálogo de Películas</span>
                <ul className="navbar-nav ms-auto">
                    <EnlaceNav to="/" texto="Inicio" />
                    <EnlaceNav to="/peliculas" texto="Películas" />
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
