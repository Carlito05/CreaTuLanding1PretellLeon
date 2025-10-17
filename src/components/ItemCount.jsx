import { useState } from "react";

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);

  if (stock <= 0) return <p>Producto sin stock</p>;

  const restar = () => setCantidad(q => Math.max(1, q - 1));
  const sumar  = () => setCantidad(q => Math.min(stock, q + 1));
  const agregar = () => {
    if (typeof onAdd === "function") onAdd(cantidad); // <- CLAVE
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={restar}>-</button>
      <span style={{ margin: "0 1rem" }}>{cantidad}</span>
      <button onClick={sumar}>+</button>
      <br />
      <button onClick={agregar} style={{ marginTop: "0.5rem" }}>
        Agregar al carrito
      </button>
    </div>
  );
}

