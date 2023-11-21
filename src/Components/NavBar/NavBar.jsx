import estilos from './NavBar.module.css';
import CartWidget from '../CartWiget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={estilos.nav}>
            <Link to='/'>
                <h3 className={estilos.titulo}>-Tienda de Sabores-</h3>
            </Link>
            <div className={estilos.Categories}>
                    <NavLink to={`/category/dulces`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Dulce</NavLink>
                    <NavLink to={`/category/salados`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Salados</NavLink>
                    <NavLink to={`/category/taccoff`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>taccoff</NavLink>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    );
};
export default NavBar;