import { Box } from '@mui/material'
import React from 'react'

function ItemListContainer({ greeting }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '16px',
      }}
    >
      {greeting}
    </Box>
  )
}

export default ItemListContainer