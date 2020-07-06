import React from "react";

const Producto = ({ producto, carrito, agregarProducto, productos }) => {
  const { nombre, precio, id } = producto;

  // Agregar producto al carrito
  const SeleccionarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id);
    console.log(producto);
  };

  return (
    <div>
      <h2>
        {id} {nombre}
      </h2>
      <h3>{precio}</h3>
      <button type="button" onClick={() => SeleccionarProducto}>
        comprar
      </button>
    </div>
  );
};

export default Producto;
