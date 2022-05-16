import { Box } from '@mui/material'
import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer({ greeting }) {
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
      />
    </Box>
  )
}

export default ItemListContainer