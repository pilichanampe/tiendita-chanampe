import React from 'react';
import { useCartContext } from '../contexts/CartContext';

function Cart({ greeting }) {
  const { removeItem, itemsInCart } = useCartContext();

  return (
    <div>{ greeting }</div>
  )
}

export default Cart;