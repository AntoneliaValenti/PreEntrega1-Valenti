import estilos from './CartWidget.module.css'
import cart from './assets/cart.webp'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContex'
import { Link } from 'react-router-dom'

const CartWidget = () =>{
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className={estilos.CartWidget} style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>  
            <img className={estilos.img} src={cart} alt="cart-widget"/>
            {totalQuantity}
        </Link>
    )
}
export default CartWidget