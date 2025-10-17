import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProducts } from "../data/products"
import ItemList from "../components/ItemList"

function ItemListContainer() {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchProducts(categoryId)
      .then(res => {
        setItems(res)
        setError(null)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [categoryId])

  if (loading) return <p>Cargando productos...</p>
  if (error) return <p>Error: {error}</p>

  return <ItemList items={items} />
}

export default ItemListContainer
