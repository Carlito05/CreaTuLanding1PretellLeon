import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, removeItem, clear, total } = useCart();

  if (!items.length) return <p>Carrito vacio.</p>;

  return (
    <section style={{ padding: "1rem" }}>
      {items.map(it => (
        <div key={it.id} style={{ display: "flex", gap: 12, alignItems: "center", margin: "8px 0" }}>
          <img src={it.thumbnail ?? it.img} alt={it.title} width="64" />
          <div style={{ flex: 1 }}>
            <div>{it.title}</div>
            <div>{it.qty} x ${it.price}</div>
          </div>
          <button onClick={() => removeItem(it.id)}>Eliminar</button>
        </div>
      ))}
      <p><b>Total: ${total().toFixed(2)}</b></p>
      <button onClick={clear}>Vaciar</button>
      <Link to="/checkout" style={{ marginLeft: 8 }}>Ir al checkout</Link>
    </section>
  );
}
