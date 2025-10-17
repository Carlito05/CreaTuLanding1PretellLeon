import ItemCount from "./ItemCount";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function ItemDetail({ item }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  if (!item) return <p>Producto no encontrado.</p>;

  const onAdd = (qty) => {
    addItem(
      {
        id: item.id,
        title: item.title,
        price: item.price,
        thumbnail: item.img,
      },
      qty
    );
    setAdded(true);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{item.title}</h2>
      <img
        src={item.img}
        alt={item.title}
        style={{ width: "300px", borderRadius: "8px" }}
      />
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <p>Stock disponible: {item.stock}</p>

      {!added ? (
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      ) : (
        <p>Producto agregado ✅</p>
      )}
    </div>
  );
}

export default ItemDetail;

