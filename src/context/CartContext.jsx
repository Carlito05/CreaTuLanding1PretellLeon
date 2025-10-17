import { createContext, useContext, useMemo, useState } from "react";

const CartCtx = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (prod, qty) => {
  setItems((prev) => {
    const i = prev.findIndex((p) => p.id === prod.id);
    
    const prodStock = prod.stock ?? (i >= 0 ? prev[i].stock : Infinity);

    if (i >= 0) {
      const copy = [...prev];
      const nextQty = Math.min(copy[i].qty + qty, prodStock);
      copy[i] = { ...copy[i], qty: nextQty };
      return copy;
    }

    const safeQty = Math.min(qty, prodStock);
    return [...prev, { ...prod, qty: safeQty }];
  });
};

  const removeItem = id => setItems(prev => prev.filter(p => p.id !== id));
  const clear = () => setItems([]);
  const count = () => items.reduce((acc, p) => acc + p.qty, 0);
  const total = () => items.reduce((acc, p) => acc + p.qty * p.price, 0);

  const value = useMemo(
    () => ({ items, addItem, removeItem, clear, count, total }),
    [items]
  );

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export const useCart = () => useContext(CartCtx);
