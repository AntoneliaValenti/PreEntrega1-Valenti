
import './App.css';
import CartWiget from './Components/CartWiget/CartWiget';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CartWiget />
      <ItemListContainer greeting ={"Bienvenidos!"}/>
    </div>
  );
}

export default App;
