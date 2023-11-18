import estilos from './ItemListContainer.module.css';
import { useState, useEffect } from 'react';
import { getProducts } from '../AsyncMock.jsx/AsyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
        .catch(error => {
            console.error(error)
        })
    }, []);

    return (
        <div className={estilos.saludo}>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    );
};
export default ItemListContainer;