import estilos from "./NavBar.module.css";

const NavBar = () => {
    return(
        <nav className={estilos.nav}>
            <h2 className={estilos.titulo}>-Tienda de Sabores-</h2>
            <div>
            <ul className={estilos.lista}>
                <li className={estilos.lista1}><a href="/">Inicio</a></li>
                <li className={estilos.lista1}><a href="/productos">Productos</a></li>
                <li className={estilos.lista1}><a href="/nosotos">Nosotros</a></li>
                <li className={estilos.lista1}><a href="/contacto">Contacto</a></li>
            </ul>
            </div>
        </nav>
    )
}
export default NavBar