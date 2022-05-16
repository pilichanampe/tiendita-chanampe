import { Box } from '@mui/material'
import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer({ greeting }) {
  const onAdd = (amount) => {
    alert(`Se agregaron al carrito ${amount} productos`)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '16px',
      }}
    >
      {greeting}
      <ItemCount
        stock={5}
        initial={1}
        onAdd={onAdd}
      />
      <ItemCount
        stock={0}
        initial={1}
        onAdd={onAdd}
      />
    </Box>
  )
}

export default ItemListContainer;