import { Box, Button, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loader from './Loader';
import { Link as RouterLink } from 'react-router-dom';

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
      if (response.exists()) {
        setItem({ id: response.id, ...response.data() });
      } else {
        return null;
      }
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
        width: '100%',
      }}
    >
      {
        loading ?
        <Loader></Loader> :
        <>
          {
            !loading &&
            <Typography
              variant="h3"
              sx={{
                fontSize: '1.5rem',
                marginBottom: '36px',
              }}
            >
              <strong>{greeting}</strong>
            </Typography>
          }
          {
            item ?
            <ItemDetail item={item} /> :
            <>
            <Typography
              variant="h5"
              sx={{
                mr: '16px',
                display: 'flex',
              }}
            >
              <strong>
              ¡Oh, no! El producto que buscás no se encuentra en nuestra base de datos :(.
              </strong>
            </Typography>
            <Button
              variant="contained"
              color="accent"
              sx={{
                color: 'white !important',
              }}
              component={RouterLink}
              to="/"
            >
              Volver a productos
            </Button>
          </>
          }
        </>
      }
    </Box>
  )
}

export default ItemDetailContainer;