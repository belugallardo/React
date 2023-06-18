import { CarritoContext } from "../../context/carritoContext"
import { useContext } from "react"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import './Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2 className="tituloCart"> No hay productos en el carrito</h2>
                < Link to='/' className="verProductos buttonAdd"> Ver Productos </ Link>
            </>
        )
    }
    return (
        <>
        <h3 className="tituloCart">Productos</h3>
        <div className="contenedorCart">
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            </div>
            <h4 className="detalleCart">Total: $ {total} </h4>
            <h4 className="detalleCart">Cantidad total de productos: {cantidadTotal}</h4>
            <button className='buttonAdd' onClick={() => vaciarCarrito()}> Vaciar carrito </button>
            <button className='buttonAdd'><Link to='/checkout' className='buttonCompra'> Finalizar compra</ Link></button>
        
        </>
    )
}

export default Cart