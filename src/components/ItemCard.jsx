import { Link } from "react-router-dom"

function ItemCard({ item }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      width: "220px",
      textAlign: "center"
    }}>
      <img 
        src={item.img} 
        alt={item.title} 
        style={{ width: "100%", borderRadius: "6px" }} 
      />
      <h3>{item.title}</h3>
      <p>Precio: ${item.price}</p>
      <Link to={`/item/${item.id}`} style={{ textDecoration: "none", color: "blue" }}>
        Ver detalle
      </Link>
    </div>
  )
}

export default ItemCard
