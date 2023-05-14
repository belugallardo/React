import { useState, useEffect } from 'react'

const ItemCount = ({ stock, inicial }) => {
    const [itemCount, setItemCount] = useState(inicial)

    const agregarAlCarrito = () => {
        console.log(`Agregado ${itemCount} item `)
    } 

    const aumentarCount = () => {
        if (itemCount < stock) {
            setItemCount(itemCount + 1);
        }
    }

    const disminuirCount = () => {
        if (itemCount > inicial) {
            setItemCount(itemCount - 1);
        }
    }

    return (
        <>
            <button onClick={disminuirCount}> - </button>
            <strong> {itemCount} </strong>
            <button onClick={aumentarCount}> + </button>
            <br /><br />
            <button onClick={agregarAlCarrito}> Agregar al carrito 2 </button>
        </>
    )
}

export default ItemCount