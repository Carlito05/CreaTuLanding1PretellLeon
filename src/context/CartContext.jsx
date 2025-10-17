import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, qty) => {
    setCart(prev => {
      const found = prev.find(p => p.id === item.id);
      if (found) {
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: Number(p.quantity || 0) + Number(qty || 0) } : p
        );
      }
      return [...prev, { ...item, quantity: Number(qty || 0) }];
    });
  };

  const removeItem = (id) => setCart(prev => prev.filter(p => p.id !== id));
  const clear = () => setCart([]);

  const count = () => cart.reduce((acc, p) => acc + Number(p.quantity || 0), 0);
  const total = cart.reduce((acc, p) => acc + Number(p.price || 0) * Number(p.quantity || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, count, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}


