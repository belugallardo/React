// Voy a importar el Hook useState y createContext

import { useState, createContext } from "react";

//Creo el contexto

export const CarritoContext = createContext({ 
    carrito: [],
    total: 0,
    cantidadTotal:0
});


// Creo el componente "CarritoProvider"

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);


    // Agrego metodos:

    const agregarProducto = (item, cantidad) => {
        // Verifico si el producto existe
        const productoExiste = carrito.find(prod => prod.item.id === item.id);

        if (!productoExiste) {
            // Si el producto no existe lo agrego

            setCarrito(prev => [...prev, { item, cantidad }]);
            setTotal(prev => prev + (item.precio * cantidad));
            setCantidadTotal (prev => prev + cantidad);

        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setTotal(prev => prev + (item.precio * cantidad));
            setCantidadTotal (prev => prev + cantidad);
        }

    }

    // Funcion para eliminar productos del carrito

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id != id);
        setCarrito(carritoActualizado);
        setCantidadTotal ( prev => prev - productoEliminado.cantidad);
        setTotal( prev => prev - productoEliminado.item.precio * productoEliminado.cantidad);
    }   

    // Funcion vaciar carrito:

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    // Retorno el CarritoContext.Provider
    return (
        < CarritoContext.Provider value={{ carrito, agregarProducto, eliminarProducto, vaciarCarrito, total, cantidadTotal }}>
            {children}
        </ CarritoContext.Provider>

    );
} 