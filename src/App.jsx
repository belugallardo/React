import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <ItemCount inicial = {1}  stock = {10} />
    <Routes >
      <Route path='/' element ={<ItemListContainer greeting={"Fede Galará - Artista "} />} />
      <Route path='/categoria/:idCategoria' element ={< ItemListContainer/> } />
      <Route path='/item/:idItem' element ={<ItemDetailContainer /> } />
    
    </Routes>
    </ BrowserRouter>
    </>
  )
}

export default App
