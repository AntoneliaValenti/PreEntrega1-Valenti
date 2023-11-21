import estilos from "./ItemCount.module.css";
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity,setQuantity] = useState(initial)
    
    const Increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const Decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return(
        <div className={estilos.Counter}>
            <div className={estilos.Controls}>
                <button className={estilos.Button} onClick={Decrement}>-</button>
                <h4 className={estilos.Number}>{quantity}</h4>
                <button className={estilos.Button} onClick={Increment}>+</button>
            </div>
            <div>
                <button className={estilos.Button} onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );  
}
export default ItemCount;