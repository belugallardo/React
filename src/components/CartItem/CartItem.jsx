import { useContext, useState } from "react";
import { CarritoContext } from "../../context/carritoContext";
import CountButtons from "../CountButtons/CountButtons";


const CartItem = ({ item, cantidad}) => {
  const { eliminarProducto } = useContext(CarritoContext);
  const [cantidadItem, setCantidadItem] = useState(cantidad);
  const actualizarCantidad = (nuevaCantidad) => {
    setCantidadItem(nuevaCantidad);
    // Aquí puedes realizar cualquier cálculo o acción adicional
  };

  return (
    <div>

      <h4> {item.nombre} </h4>
      <CountButtons itemCount={cantidadItem} stock={item.stock} inicial={1} setItemCount={actualizarCantidad} />
      <p> Cantidad : {cantidadItem} </p>
      <p> Precio unitario: {item.precio} </p>
      <p> Precio final: {item.precio * cantidadItem} </p>
      <p> Stock: {item.stock}  </p>
      <button onClick={() => eliminarProducto(item.id)}> Eliminar </button>
    </div>
  );
}

export default CartItem;



// import { useContext } from "react"
// import { CarritoContext } from "../../context/carritoContext"


// const CartItem = ({ item, cantidad }) => {
//   const { eliminarProducto } = useContext(CarritoContext);
//   return (
//     <div>
//       <h4> {item.nombre} </h4>
//       <p> Cantidad : {cantidad} </p>
//       <p> Precio:  {item.precio} </p>
//       <button onClick={() => eliminarProducto(item.id)}> Eliminar
//       </button>
//     </div>
//   )
// }

// export default CartItem