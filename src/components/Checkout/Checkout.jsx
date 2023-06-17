import { useState, useContext } from "react";
import { CarritoContext } from "../../context/carritoContext";
import { db } from '../../services/config';
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import './Checkout.css'

const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    //Funcion OnSubmit
    const manejadorFormulario = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden")
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        };

        // Modifica el stock en Base de Datos
        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                });
            })
        )

            // Orden de Compra en Base de Datos
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch((error) => {
                        console.error("Error al crear la orden", error);
                        setError("Se produjo un error al crear la orden");
                    })
            })
            .catch((error) => {
                console.error("Error al actualizar el stock", error);
                setError("Se produjo un error al actualizar el stock de los productos")
            })

    }

    return (
        <div>
            <h3 className="tituloCheckout">CHECKOUT</h3>
            <form onSubmit={manejadorFormulario} >
                {carrito.map(producto => (
                    <div key={producto.item.id} >
                        <p>
                            {producto.item.nombre} x {producto.cantidad}
                        </p>
                        <p> Precio $: {producto.item.precio} </p>
                        <hr />
                    </div>
                ))}
                <p>Total compra: {total} </p>
                <hr />
                <div className="contenedorForm">
                <div className="itemForm">
                    <label htmlFor="" className="textForm"> Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="inputForm"/>
                </div>

                <div className="itemForm">
                    <label htmlFor="" className="textForm"> Apellido </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} className="inputForm"/>
                </div>

                <div className="itemForm">
                    <label htmlFor="" className="textForm"> Telefono </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="inputForm"/>
                </div>

                <div className="itemForm">
                    <label htmlFor="" className="textForm"> Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="inputForm"/>
                </div>

                <div className="itemForm">
                    <label htmlFor="" className="textForm"> Email Confirmación</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} className="inputForm" />
                </div>

                {error && <p className="error">{error}</p>}
                <button type="submit" className='buttonAdd'> Finalizar Compra</button>
                </div>
            </form>
            {
                ordenId && (
                    <strong> ¡Gracias por tu compra! Tu numero de Orden es {ordenId} </strong>
                )
            }
        </div>
    )
}

export default Checkout