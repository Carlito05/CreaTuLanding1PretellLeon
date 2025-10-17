import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemListContainer from "./containers/ItemListContainer"
import ItemDetailContainer from "./containers/ItemDetailContainer"
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <NavBar />
      
      <Routes>

        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<p>Checkout (pendiente)</p>} />

        <Route path="*" element={<h2>Página no encontrada</h2>} />

      </Routes>
    </>
  )
}

export default App
