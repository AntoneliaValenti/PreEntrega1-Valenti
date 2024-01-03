import estilos from './Item.module.css'
import { Link } from 'react-router-dom'
import React from 'react'


const Item = ({id, nombre, img, precio, stock}) => {

return(
        <article className={estilos.CardItem}>
            <header className={estilos.Header}>
                <h2 className={estilos.ItemHeader}>
                </h2>
                    {nombre}
            </header>
            <picture>
                <img src={img} alt={nombre} className={estilos.ItemImg} />
            </picture>
            <section>
                <p className={estilos.Info}>
                    Precio: ${precio}
                </p>
                <p className={estilos.Info}>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className={estilos.ItemFooter}>
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    );
};

export default Item