import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartWidget() {
  const { count } = useCart();
  const c = count();

  return (
    <Link
      to="/cart"
      aria-label="Carrito"
      style={{
        color: "white",
        textDecoration: "none",
        fontSize: "1.5rem",
      }}
    >
      🛒 {c > 0 && <span>({c})</span>}
    </Link>
  );
}

