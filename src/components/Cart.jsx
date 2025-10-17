import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart = [], total = 0, removeItem = () => {}, clear = () => {} } = useCart() || {};
  const items = Array.isArray(cart) ? cart : [];

  if (items.length === 0) {
    return (
      <div style={{ maxWidth: 1100, margin: "1rem auto", padding: "0 1rem" }}>
        <h2>Carrito</h2>
        <p>Tu carrito esta vacio.</p>
        <Link to="/" style={{ textDecoration: "underline" }}>Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1100, margin: "1rem auto", padding: "0 1rem" }}>
      <h2>Carrito</h2>

      <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0" }}>
        {items.map((it) => {
          const price = Number(it.price || 0);
          const qty = Number(it.quantity || 0);
          const sub = price * qty;
          return (
            <li key={it.id} style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr auto auto",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 0",
              borderBottom: "1px solid #e5e7eb"
            }}>
              <img
                src={it.image || it.imageURL}
                alt={it.title}
                style={{ width: 80, height: 60, objectFit: "cover", borderRadius: 8 }}
                onError={(e) => (e.currentTarget.style.visibility = "hidden")}
              />
              <div>
                <div style={{ fontWeight: 600 }}>{it.title}</div>
                <small>Cant: {qty}</small>
              </div>
              <div style={{ minWidth: 90, textAlign: "right" }}>${price.toFixed(2)}</div>
              <div style={{ minWidth: 110, textAlign: "right", fontWeight: 600 }}>${sub.toFixed(2)}</div>
              <button
                onClick={() => removeItem(it.id)}
                style={{ marginLeft: "auto" }}
              >
                Quitar
              </button>
            </li>
          );
        })}
      </ul>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1rem"
      }}>
        <button onClick={clear}>Vaciar carrito</button>

        <div style={{ fontSize: "1.125rem" }}>
          Total: <strong>${Number(total || 0).toFixed(2)}</strong>
        </div>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <Link to="/checkout">
          <button>Ir al checkout</button>
        </Link>
      </div>
    </div>
  );
}
