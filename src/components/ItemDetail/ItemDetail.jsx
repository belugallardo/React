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
    const item = { id, nombre, precio, stock, img };
    agregarProducto(item, cantidad);
  }
  return (
    <div className='contenedorItem'>
      <h2 className='tituloDetail'> {nombre} </h2>
      <img src={img} alt={nombre} className='imagenDetail' />
      <p className='parrafoDetail'> {descripcion} </p>
      <p className='parrafoDetail'>Precio: USD {precio} </p>
      <p className='parrafoDetail'> Medidas: {medidas} </p>


      {

        agregarCantidad > 0 || stock == 0 ? (
          <div>
            <button className='buttonAdd'> <Link to="/cart" className='buttonCompra'>Terminar compra</Link></button>
            <button className='buttonAdd'> <Link to="/" className='buttonCompra'>Seguir comprando</Link> </button>

          </div>
        ) : (
          <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail