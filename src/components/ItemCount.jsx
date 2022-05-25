import { Button, Box, Card, Typography } from '@mui/material'
import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function ItemCount({ initial, stock, onAdd }) {
  const [amount, setAmount] = useState(initial);
  const increase = () => {
    if (stock > amount) {
      setAmount(amount + 1);
    }
  };

  const decrease = () => {
    if (initial < amount) {
      setAmount(amount - 1);
    }
  };


  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: '6px',
            ml: '3px',
            color: '#a3a2a2',
            height: '24px'
          }}
          >
          {
            (stock !== 0) &&
            <Typography
              component="span"
              sx={{
                fontSize: '0.8rem'
              }}
            >
              Stock disponible: { stock }
            </Typography>
          }
        </Box>
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <IconButton
          color="accent"
          onClick={() => decrease()}
          disabled={!stock}
        >
          <RemoveIcon />
        </IconButton>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            jutifyContent: 'center',
            padding: '0 20px',
          }}
        >
          <span>{ stock ? amount : 'Sin stock' }</span>
        </Box>
        <IconButton
          color="accent"
          onClick={() => increase()}
          disabled={!stock}
        >
          <AddIcon />
        </IconButton>
      </Card>
      <Button
        onClick={() => onAdd(amount)}
        variant="contained"
        disabled={!stock}
        color="accent"
        sx={{
          width: '100%',
          color: 'white !important'
        }}
      >
        <AddShoppingCartIcon
          fontSize="small"
          sx={{
            mr: '6px',
          }}
        />
        Agregar al carrito
      </Button>
    </Box>
  )
}

export default ItemCount;