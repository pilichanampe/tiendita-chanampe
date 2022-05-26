import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) { 
  const [isInCart, setIsInCart] = useState();
  const [itemsInCart, setItemsInCart] = useState([]);

  const addItem = (item, quantity) => {
    item.quantity = quantity;
    console.log('item in addItem', item);
    setItemsInCart([...itemsInCart, item])
  }

  const removeItem = (itemId) => {

  }

  const clear = () => {

  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  return useContext(CartContext);
};