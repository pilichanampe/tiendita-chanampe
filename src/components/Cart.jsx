import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';
import CartItem from './CartItem';

function Cart({ greeting }) {
  const { removeItem, cartItems, clearAll, total, getTotal } = useCartContext();

  useEffect(() => {
    if (cartItems.length !== 0) {
      getTotal();
    }
  }, [cartItems, total]);

  return (
    <>
      <div>{ greeting }</div>
      <Grid
        container
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          padding: '0',
        }}
      >
        {
          cartItems &&
          cartItems.map(item => {
            return (
              <Grid
                item
                lg={10}
                sx={{
                  width: '100%'
                }}    
                key={item.id}
              >
                <CartItem
                  item={item}
                />
              </Grid>
            )
          })
        }
        <Grid
          item
          lg={10}
          sx={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {
            (cartItems.length === 0) ?
            <>
              <Typography
                variant="h5"
                sx={{
                  mr: '16px',
                  display: 'flex',
                }}
              >
                <strong>
                  ¡Tu carrito está vacío! Explorá qué productos tenemos para vos
                </strong>
              </Typography>
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
            <>
              <Button
                color="red"
                onClick={() => clearAll()}
              >
                Limpiar carrito
              </Button>
              <Typography
                variant="p"
                sx={{
                  fontSize: '2rem',
                  mb: 2,
                }}
              >
                <strong>Total: ${total}</strong>
              </Typography>
            </>
          }

        </Grid>
      </Grid>
    </>

  )
}

export default Cart;