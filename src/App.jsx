import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
    <header className="header">
      <NavBar />
    </header>
      <ItemListContainer greeting ={"¡Bienvenidxs a nuestra tienda en línea!"}/>
    </div>
  );
}
export default App;
