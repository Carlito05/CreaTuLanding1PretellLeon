import { useState } from "react"

function ItemCount({ stock }) {
  const [cantidad, setCantidad] = useState(1)

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }
  }

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  const agregar = () => {
    alert(`Agregaste ${cantidad} producto(s) al carrito`)
  }

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
  )
}

export default ItemCount
