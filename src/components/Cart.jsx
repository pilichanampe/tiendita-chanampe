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
  const { removeItem, cartItems, clearAll, total, getTotal } = useCartContext();
  const [ showForm, setShowForm ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ orderId, setOrderId ] = useState();

  const sendOrder = (buyer) => {
    setShowForm(false);
    setLoading(true);
    const order = {
      buyer,
      items: cartItems,
      date: new Date(),
      total,
    }
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({ id }) => {
      clearAll();
      setOrderId(id);
    })
    .catch(error => console.log(error))
    .finally(() => {
      setLoading(false);
    });
  }

  const onClose = (isOpen) => {
    setShowForm(isOpen);
  }

  useEffect(() => {
    if (cartItems.length !== 0) {
      getTotal();
    }
  }, [cartItems, total, orderId]);

  return (
    <>
      {
        loading &&
        <Loader></Loader>
      }
      {
        (!loading && !orderId) &&
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
                    variant="contained"
                    color="accent"
                    sx={{
                      color: 'white !important',
                      minWidth: '500px',
                      py: '16px'
                    }}
                    onClick={() => setShowForm(() => !showForm)}
                  >
                    Comprar el carrito
                  </Button>
                </>
              }

            </Grid>
          </Grid>
          {
            showForm &&
            <CartForm
              show={showForm}
              onSendOrder={sendOrder}
              onClose={onClose}
            />
          }        
        </>
      }
      {
        (!loading && orderId) &&
        <>
          <Typography
            variant="h5"
            sx={{
              mr: '16px',
              display: 'flex',
            }}
          >
            ¡Tu compra se realizó con éxito!
          </Typography>
          <CheckCircleIcon
            color="success"
            fontSize="large"
            sx={{
              fontSize: '7rem',
              my: '16px'
            }}
          ></CheckCircleIcon>
          <Typography
            variant="h5"
            sx={{
              mr: '16px',
              display: 'flex',
            }}
          >
            Tu orden de compra es:
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mr: '16px',
              my: '36px',
              display: 'flex',
            }}
          >
            <strong>{ orderId }</strong>
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
        </>
      }
    </>

  )
}

export default Cart;