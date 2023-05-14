import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <ItemListContainer greeting={"Fede Galará - Artista "} />
    <ItemCount inicial = {1}  stock = {10} />
    </>
  )
}

export default App
