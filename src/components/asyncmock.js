const productos = [
    { nombre: "Obra 1", precio: 200, id: 1, descripcion: "obra1", img: "./img/obra1.jpg" },
    { nombre: "Obra 2", precio: 300, id: 2, descripcion: "obra2", img: "./img/obra2.jpg" },
    { nombre: "Obra 3", precio: 350, id: 3, descripcion: "obra3", img: "./img/obra3.jpg" },
    { nombre: "Obra 4", precio: 400, id: 4, descripcion: "obra4", img: "./img/obra1.jpg" },
    { nombre: "Obra 5", precio: 500, id: 5, descripcion: "obra5", img: "./img/obra2.jpg" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}