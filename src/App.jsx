import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
// import ItemCount from './Components/ItemCount/ItemCount';
import ItemDetailContainer from './Components/ItemDatailContainer/ItemDetailContainer';
// import ItemDetail from './Components/ItemDetail/ItemDetail';
// import Item from './Components/Item/Item';

function App() {
    return (
        <div className="App">
            <header className="header">
                <NavBar />
            </header>
            <ItemListContainer greeting="¡Bienvenidxs a nuestra tienda en línea!" />
            <ItemDetailContainer />
        </div>
    );
};
export default App;