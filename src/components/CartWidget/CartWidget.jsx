import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/carritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);

    return (
        <>
        <div>
            <Link to= '/cart' className='numCarrito'>
                <div className='contenedor '>
                    <img className='imgCarrito' src='../../img/carrito.png' alt="Carrito de compras" />
                    {
                        cantidadTotal > 0 && <span> {cantidadTotal} </span>
                    }
                </div>
            </Link>
            </div>
        </>
    )
}

export default CartWidget