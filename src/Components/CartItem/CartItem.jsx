import estilos from './CartItem.module.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContex'



const CartItem = ({ id, nombre, precio, quantity, img}) => {
  const {removeItem} = useContext(CartContext);


    return (
      <div className={estilos.tarjeta}>
        <img className={estilos.img} src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <h2>Cantidad: {quantity}</h2>
        <h2>precio unitario<span>$ </span>{precio}</h2>
        <h2>precio total<span>$ </span>{precio * quantity}</h2>
        <button onClick={() => removeItem(id, quantity)}>X</button>
      </div>
    )
}

export default CartItem