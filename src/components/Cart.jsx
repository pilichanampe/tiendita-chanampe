import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';

function Cart({ greeting }) {
  const { removeItem, cartItems, clearAll } = useCartContext();

  useEffect(() => {

  }, [cartItems]);

  return (
    <>
      <div>{ greeting }</div>
      <ul>
        {
          cartItems &&
          cartItems.map(item => {
            return (
              <li key={item.id} style={{ border: '2px solid red'}}>
                <strong>Producto:</strong>{ item.title }
                <strong>Cantidad:</strong>{item.quantity}
                <button onClick={(e) => removeItem(e, item.id)}>X</button>
              </li>
            )
          })
        }
      </ul>
      {
        (cartItems.length === 0) ?
        <>
          <h3>¡Tu carrito está vacío! Explorá qué productos tenemos para vos</h3>
          <Button
            variant="contained"
            color="accent"
            sx={{
              color: 'white !important',
            }}
            component={RouterLink}
            to="/"
          >
            Ir a la lista de productos
          </Button>
        </> :
        <Button
          variant="outlined"
          color="red"
          onClick={() => clearAll()}
        >
          Eliminar todos los items
        </Button>
      }
    </>

  )
}

export default Cart;