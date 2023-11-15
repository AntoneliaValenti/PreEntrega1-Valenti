import estilos from './ItemDetail.module.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id,name, price, img, category, description, stock}) => {
    return (
        <article className={estilos.cardItem}>
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}></ItemCount>
            </footer>
        </article>
    );
;}

export default ItemDetail