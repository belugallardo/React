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
            <button onClick={disminuirCount}> - </button>
            <strong> {itemCount} </strong>
            <button onClick={aumentarCount}> + </button>
        </div>
    );
}

export default CountButtons;
