import estilos from './CartWidget.module.css';
import cart from './assets/cart.webp';

const CartWidget = () =>{
    return (
        <div className={estilos.carrito}>  
            <img className={estilos.img} src={cart} alt="cart-widget"/>
            <p>0</p>
        </div>
    );
};
export default CartWidget;