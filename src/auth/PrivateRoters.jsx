import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import HeaderpokemonsBalls from "../components/layout/HeaderpokemonsBalls";

// Este componente verifica si un nombre de "trainer" está presente en el estado global.
// Si el nombre está presente, muestra el contenido enrutado a través de <Outlet />.
// De lo contrario, redirige a la página principal ("/").
const PrivateRoters = () => {
    const { name } = useSelector((store) => store.traner);
    if (name)
        return (
            <HeaderpokemonsBalls>
                <Outlet />
            </HeaderpokemonsBalls>
        );

    return <Navigate to="/" />;
};

export default PrivateRoters;
