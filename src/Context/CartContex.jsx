import { createContext, useState, useMemo } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  totalQuantity: 0, 
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  // Calcular el totalQuantity
  const totalQuantity = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
