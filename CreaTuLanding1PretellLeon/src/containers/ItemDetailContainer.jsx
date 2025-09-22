import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProductById } from "../data/products"
import ItemDetail from "../components/ItemDetail"

function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchProductById(id)
      .then(res => {
        setItem(res)
        setError(null)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Cargando detalle...</p>
  if (error) return <p>Error: {error}</p>
  if (!item) return <p>No se encontró el producto.</p>

  return <ItemDetail item={item} />
}

export default ItemDetailContainer

