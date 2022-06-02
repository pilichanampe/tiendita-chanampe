import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore";


function ItemDetailContainer({ greeting }) {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();

  const getItem = (id) => {
    setLoading(true);
    const db = getFirestore();
    const itemRef = doc(db, "items", id);
    getDoc(itemRef)
    .then(response => {
      setItem({ id: response.id, ...response.data() });  
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
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
              fontSize: '1.2rem',
              mb: 3,
            }}
            >
              <strong>{greeting}</strong>
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