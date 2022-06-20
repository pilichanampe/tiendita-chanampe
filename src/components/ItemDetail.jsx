import { Snackbar, Button, Card, CardContent, CardMedia, Grid, Typography, IconButton, SnackbarContent, Alert } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import ItemCount from './ItemCount';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCartContext } from '../contexts/CartContext';
import Slide from '@mui/material/Slide';

function ItemDetail({ item }) {
  const { addItem, cartItems } = useCartContext();
  const [ isAdded, setIsAdded ] = useState(false);
  const [ snackbar, setSnackbar ] = useState(false);
  const [quantity, setQuantity ] = useState();

  const onAdd = (amount) => {
    addItem(item, amount);
    setQuantity(amount);
    setIsAdded(true);
    setSnackbar(true);
  }

  const handleClose = () => {
    setSnackbar(false);
  }

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  )

  useEffect(() => {
  }, [cartItems]);
  return (
    <>
      {
        <Grid
        container
        component={Card}
        sx={{
          width: '100%',
          minHeight: '500px',
          padding: '16px 0'  
        }}
        >
          <Grid
            item
            lg={8}
            sx={{
              padding: '14px 16px'
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: '300px',
                width: '100%',
                objectFit: 'contain',
                borderRadius: '4px',
              }}
              image={item.pictureUrl}
              alt="Imagen del producto"
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography
                variant="p"
              >
                Descripción:
              </Typography>
              <Typography
                variant="p"
                sx={{
                  color: '#a3a2a2',
                }}
              >
                {item.description}
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            lg={4}
            sx={{
              padding: '14px 16px',
              borderLeft: '1px solid #e7e7e7'
            }}
          >
            <Typography variant="h5">
              {item.title}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: '30px',
                mb: '60px'
              }}
            >
              ${item.price}
            </Typography>
            {
              !isAdded ?
              <ItemCount
                initial={1}
                stock={item.stock}
                onAdd={onAdd}
              /> :
              <Button
                component={RouterLink}
                variant="outlined"
                to="/cart"
                color="accent"
                sx={{
                  width: '100%',
                }}
              >
                Ir al carrito
                <ShoppingCartIcon
                  fontSize="small"
                  sx={{
                    ml: '6px',
                  }}
                />
              </Button>
            }
          </Grid>
        </Grid>
      }
      {
        snackbar &&
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          color="red"
          open={snackbar}
          autoHideDuration={4000}
          onClose={handleClose}
          action={action}
          TransitionComponent={Slide}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{
                width: '100%',
                background: '#94f298',
                border: '1px solid #e7e7e7'
              }}
            >
              Se agregó <strong>{item.title} x {quantity} u.</strong> al carrito
            </Alert>
          </Snackbar>
      }
    </>
  )
}

export default ItemDetail;