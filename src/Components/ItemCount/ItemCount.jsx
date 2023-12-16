import estilos from "./ItemCount.module.css";
import { useState } from 'react';


const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)
    
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return(
        <div className={estilos.Counter}>
            <div className={estilos.Controls}>
                <button className={estilos.Button1} onClick={decrement}>-</button>
                <h4 className={estilos.Number}>{quantity}</h4>
                <button className={estilos.Button1} onClick={increment}>+</button>
            </div>
            <div>
                <button className={estilos.Button2} onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );  
}
export default ItemCount;