import { Button, Box } from '@mui/material'
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
    <>
      <Box
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'space-between',
          width: '200px',
        }}
      >
        <IconButton
          color="primary"
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
          color="primary"
          onClick={() => increase()}
          disabled={!stock}
        >
          <AddIcon />
        </IconButton>
      </Box>
      <Button
        onClick={() => onAdd(amount)}
        variant="contained"
        disabled={!stock}
      >
        <AddShoppingCartIcon
          fontSize="small"
          sx={{
            mr: '6px',
          }}
        />
        Agregar al carrito
      </Button>
    </>
  )
}

export default ItemCount;