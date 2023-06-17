import './CountButtons.css';

const CountButtons = ({ itemCount, stock, inicial, setItemCount }) => {
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
        <div>
            <button className='button' onClick={disminuirCount}> - </button>
            <strong className='contadorBoton'>  {itemCount} </strong>
            <button className='button' onClick={aumentarCount}> + </button>
        </div>
    );
}

export default CountButtons;
