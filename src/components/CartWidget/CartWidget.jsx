import './CartWidget.css'
import imgCarrito from '../../assets/img/carrito.png'

const CartWidget = () => {
    return (
        <>
            <div className='contenedor'>
                <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
                <p>2</p>
            </div>
        </>
    )
}

export default CartWidget