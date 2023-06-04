// Voy a importar el Hook useState y createContext

import { useState, createContext } from "react";

//Creo el contexto

export const CarritoContext = createContext({ carrito: [] });

// Creo el componente "CarritoProvider"

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    console.log(carrito);

    // Agrego metodos:

    const agregarProducto = (item, cantidad) => {
        // Verifico si el producto existe
        const productoExiste = carrito.find(prod => prod.item.id === item.id);

        if (!productoExiste) {
            // Si el producto no existe lo agrego

            setCarrito(prev => [...prev, { item, cantidad }]);

        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
        }

    }

    // Funcion para eliminar productos del carrito

    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(prod => prod.id != id);
        setCarrito(carritoActualizado);
    }

    // Funcion vaciar carrito:

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    // Retorno el CarritoContext.Provider
    return (
        < CarritoContext.Provider value={{ carrito, agregarProducto, eliminarProducto, vaciarCarrito }}>
            {children}
        </ CarritoContext.Provider>

    );
} 