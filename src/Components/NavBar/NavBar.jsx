import estilos from "./NavBar.module.css";
import CartWiget from "../CartWiget/CartWiget"

const NavBar = () => {
    return(
        <nav className={estilos.nav}>
            <div>
                <h2 className={estilos.titulo}>-Tienda de Sabores-</h2>
            </div>
            <div>    
                <ul className={estilos.lista}>
                    <li className={estilos.lista1}><a href="/Dulces">Dulces</a></li>
                    <li className={estilos.lista1}><a href="/Salados">Salados</a></li>
                    <li className={estilos.lista1}><a href="/Sin Tacc">Sin Tacc</a></li>
                </ul>  
            </div> 
            <div>    
                <CartWiget />
            </div>
        </nav>
    )
}
export default NavBar;