import React from "react";

const Producto = ({ producto, carrito, agregarProducto, productos }) => {
  const { nombre, precio, id } = producto;

  // Agregar producto al carrito
  const seleccionarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    agregarProducto([...carrito, producto]);
  };

  return (
    <div>
      <h2>
        {id} {nombre}
      </h2>
      <h3>{precio}</h3>
      <button type="button" onClick={() => seleccionarProducto}>
        comprar
      </button>
    </div>
  );
};

export default Producto;
