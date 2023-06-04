import './CartWidget.css'
import imgCarrito from '../../assets/img/carrito.png'
import { useContext } from 'react'
import { CarritoContext } from '../../context/carritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);

    return (
        <>
            <Link to= '/cart'>
                <div className='contenedor'>
                    <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
                    {
                        cantidadTotal > 0 && <span> {cantidadTotal} </span>
                    }
                </div>
            </Link>
        </>
    )
}

export default CartWidget