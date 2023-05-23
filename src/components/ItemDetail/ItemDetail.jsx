import  './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, nombre,precio,img,descripcion, stock}) => {
  
  const [agregarCantidad, setAgregarCantidad]= useState(0);
  
  const manejadorCantidad = (cantidad)=> {
    setAgregarCantidad(cantidad);
    console.log("Productos Agregados: " + cantidad);
  } 
    return (
    <div className='contenedorItem'>
        <h2> Obra: {nombre} </h2>
        <h3>Precio: USD {precio} </h3>
        <h3>ID: {id} </h3>
        <p> {descripcion} </p>
        <img src={img}  alt={nombre} />
        <br /> <br />
        {
          agregarCantidad > 0 ? (<Link to= "/cart">Terminar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}  />)
        }
    </div>
  )
}

export default ItemDetail