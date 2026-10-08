import { Link } from "react-router-dom";

interface BotonProps {
    to: string;
    texto: string;
    variante?: string; // ej: "primary", "secondary"
}

function Boton({ to, texto, variante = "primary" }: BotonProps) {
    return (
        <Link to={to} className={`btn btn-${variante}`}>
            {texto}
        </Link>
    );
}

export default Boton;
