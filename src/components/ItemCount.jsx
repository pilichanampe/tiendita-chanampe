import { Button, Box } from '@mui/material'
import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ItemCount({ initial, stock, onAdd }) {
  const [amount, setAmount] = useState(initial);
  const increase = () => {
    if (amount > 0) {
      setAmount(amount + 1);
    }
  };

  const decrease = () => {
    setAmount(amount - 1);
  };


  return (
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
        <span>{ amount }</span>
      </Box>
      <IconButton
        color="primary"
        onClick={() => increase()}
      >
        <AddIcon />
      </IconButton>
    </Box>
  )
}

export default ItemCount