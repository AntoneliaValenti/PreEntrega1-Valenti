import estilos from './Item.module.css';

const Item = ({id, name, img, price, stock}) => {

return(
        <article className={estilos.CardItem}>
            <header className={estilos.Header}>
                <h2 className={estilos.ItemHeader}>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className={estilos.ItemImg} />
            </picture>
            <section>
                <p className={estilos.Info}>
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className={estilos.ItemFooter}>
                <button className={estilos.Option}>Ver detalle</button>
            </footer>
        </article>
    );
};

export default Item