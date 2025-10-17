import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartWidget() {
  const { count = () => 0 } = useCart() || {};
  const c = Number(count());

  return (
    <Link
      to="/cart"
      aria-label="Carrito"
      style={{
        color: "#fff",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "1.25rem",
      }}
    >
      <span role="img" aria-label="carrito">🛒</span>
      {c > 0 && <span>({c})</span>}
    </Link>
  );
}

