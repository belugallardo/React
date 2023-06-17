import  './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img, descripcion, stock}) => {
  return (
    <section>
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h2 className='h2'> {nombre} </h2>
        <p className='p'>Precio: USD {precio} / {descripcion} </p>
        <Link to = {`/item/${id}`}className='btnProducto'>Ver Detalles</Link>
    </div>
    </section>
  )
}

export default Item;