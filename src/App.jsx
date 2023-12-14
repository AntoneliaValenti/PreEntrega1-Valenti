import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './Context/CartContex'
import Cart from './Components/Cart/Cart'
import CheckOut from './Components/CheckOut/CheckOut'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={"Todos nuestros productos"}/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} greeting={"Productos por categoria"} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkOut' element={<CheckOut />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
    </div>
   
  )
}

export default App;