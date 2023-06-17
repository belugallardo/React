import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/carritoContext'

const ItemDetail = ({ id, nombre, precio, img, descripcion, stock, medidas }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    // console.log("Productos Agregados: " + cantidad);
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }
  return (
    <div className='contenedorItem'>
      <h2> Obra: {nombre} </h2>
      <h3>Precio: USD {precio} </h3>
      <h3>ID: {id} </h3>
      <p> {descripcion} </p>
      <p> {medidas} </p>
      <img src={img} alt={nombre} />
      <br /> <br />
      {

        agregarCantidad > 0 ? (
        <div>
        <Link to="/cart">Terminar compra</Link>
        <br />
        <Link to="/">Seguir comprando</Link>
        
        </div>
        ) : (
        <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail