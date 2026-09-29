import Buscador from "../moleculas/Buscador";

function Header() {
    return (
    <header>
        <div>
            <h1>Mi tienda</h1>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Contacto</a>
            </nav>

            <br />

            <Buscador />


        </div>
    </header>
    );
}



export default Header;