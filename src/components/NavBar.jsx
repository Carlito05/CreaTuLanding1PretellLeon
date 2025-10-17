import React from "react"
import { NavLink, Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import biciplogo from "../assets/bicilogo.png"
import { CATEGORIES } from "../data/products"

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#991010ff"
      }}
    >
      {/* Logo + título */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Link to="/">
          <img src={biciplogo} alt="logo" style={{ height: "120px" }} />
        </Link>
        <h1>Bici Oso Shop</h1>
      </div>

      {/* Links de navegación */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
            color: isActive ? "yellow" : "white"
          })}
        >
          Home
        </NavLink>

        {CATEGORIES.map((cat) => (
          <NavLink
            key={cat}
            to={`/category/${cat}`}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
              color: isActive ? "yellow" : "white"
            })}
          >
            {cat}
          </NavLink>
        ))}

        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar




