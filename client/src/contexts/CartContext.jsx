import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

  const contextValue = useMemo(
    () => ({
      cart,
      setCart,
    }),
    [cart, setCart]
  );

  useEffect(() => {
    const initialLocalCart = localStorage.getItem("cart");
    if (initialLocalCart && JSON.parse(initialLocalCart).length !== 0) {
      setCart(JSON.parse(initialLocalCart));
    }
  }, []);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}


CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => useContext(CartContext);
