import ItemCount from "./ItemCount"

function ItemDetail({ item }) {
  if (!item) {
    return <p>Producto no encontrado.</p>
  }

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

      <ItemCount stock={item.stock} />
    </div>
  )
}

export default ItemDetail
