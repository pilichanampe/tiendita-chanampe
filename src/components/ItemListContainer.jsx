import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loader from './Loader';

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  
  const getItems = () => {
    setLoading(true);
    const db = getFirestore();
    let productsRef;
    if ( categoryId ) {
      productsRef = query(
        collection(db, 'items'),
        where('category', '==', categoryId),
      );
    } else {
      productsRef = collection(db, 'items');
    }
    getDocs(productsRef)
    .then(response => {
      setItems(response.docs.map(p => ({ id: p.id, ...p.data() })));
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
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
        width: '100%'
      }}
    >
      {
        !loading &&
        <Typography
          variant="h3"
          sx={{
            fontSize: '1.5rem',
          }}
        >
          <strong>
            {greeting}
            {
              categoryId ?
              <span>: {categoryId}</span> :
              <></>
            }
          </strong>
        </Typography>
      }
      {
        loading ? <Loader></Loader> : <ItemList items={items} />
      }
    </Box>
  )
}

export default ItemListContainer;