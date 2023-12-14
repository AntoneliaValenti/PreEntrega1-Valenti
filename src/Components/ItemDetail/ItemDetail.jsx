import estilos from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContex'

const ItemDetail = ({ id, name, price, img, category, description, stock}) => {
   const [quantityAdded, setQuantityAdded] = useState(0)

   const { addItem } = useContext(CartContext)
   
   const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        
        const item = {
            id, name, price
        }
        
        addItem(item, quantity)
   }
   
    return (
        <article className={estilos.CardItem}>
            <header className={estilos.Header}>
                <h2 className={estilos.ItemHeader}>
                    {name}
                </h2>
            </header>
            <picture>
                <img src= {img} alt={name} className={estilos.ItemImg} />
            </picture>
            <section>
                <p className={estilos.Info}>
                    Categoria: {category}
                </p>
                <p className={estilos.Info}>
                    Descripción: {description}
                </p>
                <p className={estilos.Info}>
                    Precio: ${price}
                </p>
            </section>
            <footer className={estilos.ItemFooter}>
                {
                    quantityAdded > 0 ? (
                        <Link to ='/cart' className={estilos.Option}>Terminar</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail