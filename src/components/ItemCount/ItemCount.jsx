import './ItemCount.css';
import { useState } from 'react';
import CountButtons from '../CountButtons/CountButtons';

const ItemCount = ({ stock, inicial, funcionAgregar }) => {
    const [itemCount, setItemCount] = useState(inicial);

    return (
        <>
            <CountButtons itemCount={itemCount} stock={stock} inicial={inicial} setItemCount={setItemCount} />
            <br /><br />
            <button onClick={() => funcionAgregar(itemCount)}> Agregar al carrito </button>
        </>
    )
}

export default ItemCount;
