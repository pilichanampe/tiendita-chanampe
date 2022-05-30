import { Shop2Outlined } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

function CartWidget({ items }) {
  return (
    <Badge
      badgeContent={items}
      color="red"
      size="small"
      invisible={false}
    >
      <ShoppingCartIcon />
    </Badge>
  )
}

export default CartWidget