import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useCart } from "../context/CartContext"; // IGUAL que en CartWidget

export default function Checkout() {
  const { cart = [], total = 0, clear = () => {} } = useCart() || {};
  const safeCart = Array.isArray(cart) ? cart : [];
  const [orderId, setOrderId] = useState("");

  async function handleBuy() {
    if (safeCart.length === 0) {
      alert("El carrito está vacío");
      return;
    }
    try {
      const order = {
        items: safeCart.map(({ id, title, price, quantity }) => ({
          id, title, price, quantity,
        })),
        total,
        createdAt: new Date(),
      };
      const ref = await addDoc(collection(db, "orders"), order);
      setOrderId(ref.id);
      clear();
    } catch (e) {
      console.error("Checkout error:", e);
      alert("Error al confirmar la compra (ver consola).");
    }
  }

  return (
    <div style={{ maxWidth: 1100, margin: "1rem auto", padding: "0 1rem" }}>
      <h2>Checkout</h2>
      {orderId ? (
        <p>Orden creada: <strong>{orderId}</strong></p>
      ) : (
        <>
          <p>Total: ${Number(total).toFixed(2)}</p>
          <button onClick={handleBuy}>Confirmar compra</button>
        </>
      )}
    </div>
  );
}


