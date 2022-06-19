import { Box, Button, Card, Grid, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCartContext } from '../../contexts/CartContext';
import CheckoutForm from './CheckoutForm';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckoutItem from './CheckoutItem';
import Loader from '../Loader';

function Checkout() {
  const { cartItems, clearAll, total, getTotal } = useCartContext();
  const [ loading, setLoading ] = useState(false);
  const [ orderId, setOrderId ] = useState();

  // Este método se lo pasa por prop al CheckoutForm y se ejecuta en ese componente. Se recibe a través del parámetro los datos de la orden, y con esos datos se hace la llamada a Firestore.
  const onCheckout = (order) => {
    setLoading(true);
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({ id }) => {
      clearAll();
      setOrderId(id);
    })
    .catch(error => console.error(error))
    .finally(() => {
      setLoading(false);
    });
  }

  useEffect(() => {
    if (cartItems.length !== 0) {
      getTotal();
    }
  }, [cartItems]);
  return (
    <>
      {
        loading &&
        <Loader></Loader>
      }
      {
        (!loading && !orderId) &&
        <Grid
          container
          component={Card}
          sx={{
            width: '100%',
            padding: '16px 0',
            maxWidth: '1224px',
          }}
        >
          <Grid
            item
            lg={8}
            sx={{
              padding: '14px 32px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: '1.5rem',
                  marginBottom: '36px',
                }}
              >
                <strong>Detalle de compra:</strong>
              </Typography>
              {
                cartItems?.map(item => {
                  return (
                    <CheckoutItem
                      item={item}
                      key={item.id}
                    />
                  )
                })
              }

            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: '1px solid #e7e7e7',
              }}
            >
              <Box></Box>
              <Typography
                variant="p"
                sx={{
                  display: 'flex',
                  fontSize: '2rem',
                  mb: 2,
                }}
              >
                <strong>Total: ${total}</strong>
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={4}
            sx={{
              padding: '0px 16px',
              borderLeft: '1px solid #e7e7e7',
            }}
          >
            <CheckoutForm onCheckout={onCheckout}/>
          </Grid>
        </Grid>
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

export default Checkout;