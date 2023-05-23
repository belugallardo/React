import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ stock, inicial, funcionAgregar }) => {
    const [itemCount, setItemCount] = useState(inicial)



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
            <button onClick={() => funcionAgregar(itemCount)}> Agregar al carrito  </button>
        </>
    )
}

export default ItemCount