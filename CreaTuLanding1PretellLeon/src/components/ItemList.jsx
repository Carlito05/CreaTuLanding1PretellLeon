import ItemCard from "./ItemCard"

function ItemList({ items }) {
  if (!items || items.length === 0) {
    return <p>No hay productos disponibles.</p>
  }

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem",
      justifyContent: "center",
      marginTop: "1rem"
    }}>
      {items.map((producto) => (
        <ItemCard key={producto.id} item={producto} />
      ))}
    </div>
  )
}

export default ItemList
