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
        <div className='Counter'>
            <div className={estilos.Controls}>
                <button className='Button' onClick={Decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className='Button' onClick={Increment}>+</button>
            </div>
            <div>
                <button className='Button' onClick={() => onAdd(quantity)} disable={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );  
}
export default ItemCount;