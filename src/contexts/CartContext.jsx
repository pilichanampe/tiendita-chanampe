import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();


export function CartProvider({ children }) { 
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState();
  const [itemsAmount, setItemsAmount] = useState();

  useEffect(() => {
    if (localStorage.getItem('cartItems')) {
      if (JSON.parse(localStorage.getItem('cartItems')).length !== 0) {
        sumAllItems(JSON.parse(localStorage.getItem('cartItems')));
        setCartItems(JSON.parse(localStorage.getItem('cartItems')));
      }
    } else {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  },[]);

  const sumAllItems = (items) => {
    if (items.length !== 0) {
      const allQuantities = items?.map(item => item.quantity );
      setItemsAmount(allQuantities.reduce((accumulator, curr) => accumulator + curr, 0));
    } else {
      setItemsAmount(0);
    }
  };

  const getTotal = () => {
    const prices = cartItems.map(item => item.price * item.quantity);
    setTotal(prices.reduce((accumulator, curr) => accumulator + curr));
  };

  const isInCart = (item) => {
    if (cartItems.findIndex(obj => obj.id === item.id) !== -1) {
      return true;
    } else {
      return false;
    };
  };

  const updateItem = (item, quantity) => {
    const itemIndex = cartItems.findIndex(obj => obj.id === item.id);
    const currentQuantity = cartItems[itemIndex].quantity;
    cartItems[itemIndex].quantity = currentQuantity + quantity;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    sumAllItems(cartItems);
  };

  const addItem = (item, quantity) => {
    if (isInCart(item)) {   
      updateItem(item, quantity);

    } else {
      item.quantity = quantity;
      setCartItems([...cartItems, item]);
      sumAllItems([...cartItems, item]);
      localStorage.setItem('cartItems', JSON.stringify([...cartItems, item]));
    }
  };

  const removeItem = (e, itemId) => {
    e.preventDefault();
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    setCartItems(updatedItems);
    sumAllItems(updatedItems);
  };

  const clearAll = () => {
    setCartItems([]);
    sumAllItems([]);
    localStorage.setItem('cartItems', JSON.stringify([]));
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        updateItem,
        removeItem,
        isInCart,
        cartItems,
        setCartItems,
        removeItem,
        clearAll,
        total,
        getTotal,
        itemsAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  return useContext(CartContext);
};