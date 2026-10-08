import { NavLink } from "react-router-dom";

interface EnlaceNavProps {
    to: string;
    texto: string;
}

function EnlaceNav({ to, texto }: EnlaceNavProps) {
    return (
        <li className="nav-item">
            <NavLink
                to={to}
                end
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
                {texto}
            </NavLink>
        </li>
    );
}

export default EnlaceNav;
