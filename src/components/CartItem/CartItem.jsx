import { useContext, useState } from "react";
import { CarritoContext } from "../../context/carritoContext";
import CountButtons from "../CountButtons/CountButtons";
import './CartItem.css'


const CartItem = ({ item, cantidad}) => {
  const { eliminarProducto } = useContext(CarritoContext);
  const [cantidadItem, setCantidadItem] = useState(cantidad);
  const actualizarCantidad = (nuevaCantidad) => {
    setCantidadItem(nuevaCantidad);
  };

  return (
    <div >
      <h3 className="tituloDetalle"> {item.nombre} </h3>
      <CountButtons itemCount={cantidadItem} stock={item.stock} inicial={1} setItemCount={actualizarCantidad} />
      <p className="parrafoDetalle"> Precio unitario: {item.precio} </p>
      <p className="parrafoDetalle"> Precio final: {item.precio * cantidadItem} </p>
      <button className='buttonAdd' onClick={() => eliminarProducto(item.id)}> Eliminar </button>
    </div>
  );
}

export default CartItem;
