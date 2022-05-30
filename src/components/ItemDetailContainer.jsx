import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import products from '../productsMock';

function ItemDetailContainer({ greeting }) {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    const getItem = (id) => {
      setLoading(true);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(() => {
            return products.find(item => item.id.toString() === id);
          });
        }, 500);
      })
      .then(response => {
        setItem(response);  
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
    };
    getItem(itemId);
  }, [itemId]);
  

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '16px',
        width: '100%',
      }}
    >
      {
        loading ?
        <span>Cargando...</span> :
        <>
          <Typography
            variant="h3"
            sx={{
              fontSize: '2rem',
              mb: 3,
            }}
            >
              {greeting}
            </Typography>
          {
            item ? <ItemDetail item={item} /> : <h5>¡Oh, no! El item que buscás no se encuentra en nuestra base de datos :(.</h5>
          }
        </>
      }
    </Box>
  )
}

export default ItemDetailContainer;