import  './ItemDetail.css'

const ItemDetail = ({id, nombre,precio,img,descripcion}) => {
  
    return (
    <div className='contenedorItem'>
        <h2> Obra: {nombre} </h2>
        <h3>Precio: USD {precio} </h3>
        <h3>ID: {id} </h3>
        <p> {descripcion} </p>
        <img src={img}  alt={nombre} />

    </div>
  )
}

export default ItemDetail