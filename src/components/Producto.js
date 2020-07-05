import React from "react";

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  // Agregar producto al carrito

  const SeleccionarProducto = () => {
    console.log("Comprando...");
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
