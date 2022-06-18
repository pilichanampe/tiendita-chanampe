import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import { useCartContext } from '../contexts/CartContext'
import ItemCount from './ItemCount';

function CartItem({ item }) {
  const { cartItems, removeItem, addItem, updateItem } = useCartContext();
  const onUpdate = (amount) => {
    updateItem(item, amount);
  }

  useEffect(() => {

  }, [cartItems]);
  
  return (
    <Card
      sx={{
        my: '6px',
        px: '16px',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%'
        }}
        
      >
        <Box>
          <CardMedia
            component="img"
            sx={{
              height: '100px',
              width: '100px',
              objectFit: 'contain',
              borderRadius: '4px',
              backgroundColor: 'lightgray'
            }}
            image={item.pictureUrl}
            alt="Imagen del producto"
          />
        </Box>
        <Box
          sx={{
            mb: 2,
            ml: 3,
            pl: 3,
            display: 'flex',
            width: '100%'
          }}
        >
          <Box
            sx={{
              width: '100%'
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontSize: '1.3rem',
              }}
            >
              <strong>{item.title}</strong>
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: '1rem',
                display: 'flex',
              }}
            >
              Precio unidad:
              <strong>${item.price}</strong>
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: '1rem',
                display: 'flex',
              }}
            >
              Unidades:
              <strong>{item.quantity}</strong>
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontSize: '1rem',
                display: 'flex',
                width: '200px',
                textAlign: 'end',
                display: 'inline'
              }}
            >
              Total del producto:
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: '1.9rem',
                display: 'flex',
                textAlign: 'end',
                display: 'inline'
              }}
            >
              <strong>${item.price * item.quantity}</strong>
            </Typography>
          </Box>

        </Box>
        {/* <ItemCount
          initial={item.quantity}
          stock={item.stock}
          onUpdate={updateItem}
        /> */}
      </CardContent>
      <CardActions disableSpacing>
        <Button
          size='small'
          variant="outlined"
          color="red"
          onClick={(e) => removeItem(e, item.id)}
        >
          Eliminar
        </Button>
      </CardActions>
    </Card>

  )
}

export default CartItem