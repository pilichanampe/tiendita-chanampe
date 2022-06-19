import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';
import CartItem from './CartItem';
import CartForm from './CartForm';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Loader from './Loader';

function Cart({ greeting }) {
  const { cartItems, clearAll, total, getTotal } = useCartContext();
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if (cartItems.length !== 0) {
      getTotal();
    }
  }, [cartItems, total]);

  return (
    <>
      {
        loading &&
        <Loader></Loader>
      }
      {
        !loading &&
        <>
          <Typography
            variant="h3"
            sx={{
              fontSize: '1.5rem',
              marginBottom: '36px',
            }}
          >
            <strong>{greeting}</strong>
          </Typography>
          <Grid
            container
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              maxWidth: '1920px',
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
                      display: 'flex',
                      marginBottom: '16px',
                    }}
                  >
                    <strong>
                      ¡Tu carrito está vacío! Explorá qué productos tenemos para vos:
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
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
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
                      mr: 2,
                    }}
                  >
                    <strong>Total: ${total}</strong>
                  </Typography>
                </Box>
                  <Button
                    component={RouterLink}
                    variant="contained"
                    color="accent"
                    sx={{
                      color: 'white !important',
                      minWidth: '220px',
                      py: '16px',
                      alignSelf: 'end',
                    }}
                    to="/checkout"
                  >
                    Finalizar compra
                  </Button>
                </>
              }
            </Grid>
          </Grid>     
        </>
      } 
    </>

  )
}

export default Cart;