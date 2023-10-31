import estilos from "./ItemListContainer.module.css";

const ItemListContainer = ({greeting}) => {
    return (
        <div className={estilos.saludo}>
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer