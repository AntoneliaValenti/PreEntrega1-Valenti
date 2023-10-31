import estilos from "./CartWiget.module.css";
import cart from './assets/cart.webp'
const CartWiget = () =>{
    return (
        <div className={estilos.carrito}>  
            <img className={estilos.img} src={cart} alt="cart-wiget"/>
            0
        </div>
)}
export default CartWiget