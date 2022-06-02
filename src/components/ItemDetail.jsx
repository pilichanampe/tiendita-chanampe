import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ItemCount from './ItemCount';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCartContext } from '../contexts/CartContext';

function ItemDetail({ item }) {
  const { addItem, cartItems } = useCartContext();
  const [ isAdded, setIsAdded ] = useState(false);

  const onAdd = (amount) => {
    addItem(item, amount);
    setIsAdded(true);
  }

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
    </>
  )
}

export default ItemDetail;