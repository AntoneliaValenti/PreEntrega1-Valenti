import estilos from './Cart.module.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContex'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext)

    // Función para calcular el total
    const calculateTotal = () => {
        return cart.reduce((total, product) => {
            return total + product.precio * product.quantity;
        }, 0);
    }

    const total = calculateTotal();

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className={estilos.Option}>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={() => clearCart()} className={estilos.Button}>Limpiar carrito</button>
            <Link to='/checkout' className={estilos.Option}>Checkout</Link>
        </div>
    )
}

export default Cart
