import  './Item.css'

const Item = ({id, nombre, precio, img, descripcion}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>Precio: USD {precio} </p>
        <p>ID: {id} </p>
        <p>Descripcion: {descripcion} </p>
        <button className='btnProducto'> Ver detalle </button>
    </div>
  )
}

export default Item