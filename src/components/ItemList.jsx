import { Grid } from '@mui/material';
import React from 'react';
import Item from './Item';

function ItemList({ items }) {
  return (
    <Grid
      component="section"
      container
      spacing={3}
      sx={{
      mt: 3,
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    }}>
      {
        items &&
        items.map(item => {
          return (
            <Grid
              item
              key={item.id}
            >
              <Item
                item={item}                
              />
          </Grid>
              )
            })
          }
    </Grid>
  )
}

export default ItemList;