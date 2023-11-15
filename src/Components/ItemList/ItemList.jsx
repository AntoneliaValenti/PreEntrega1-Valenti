import estilos from './ItemList.module.css';
import Item from '../Item/Item';

const ItemList = ({products }) => {
    return(
        <div className={estilos.ListGroup}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    );
};

export default ItemList