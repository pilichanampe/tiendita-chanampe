import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import products from '../productsMock'
import { useParams } from 'react-router-dom';

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    const getItems = () => {
      setLoading(true);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(() => {
            if ( categoryId ) {
              return products.filter(item => item.category.toLowerCase() === categoryId);
            }
            return products;
          })
        }, 500);
      })
      .then(response => {
        setItems(response);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
    };
    getItems();
  }, [categoryId]);
  

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '16px',
        width: '100%'
      }}
    >
      <Typography
        display="flex"
        variant="h1"
        sx={{
          fontSize: '3rem',
        }}
      >
        {greeting}
      </Typography>
      {
        loading ? <span>Cargando...</span> : <ItemList items={items} />
      }
    </Box>
  )
}

export default ItemListContainer;