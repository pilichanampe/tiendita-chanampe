import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';


function ItemDetailContainer({ greeting }) {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getItem = () => {
      setLoading(true);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            {
              id: 125,
              title: 'Marcadores Copic Sketch X 72 Linea D Doble Punta',
              description: `Packaged in a clear plastic case, a sketch set is the ideal way to begin or add to a marker collection // Refillable markers and replaceable nibs; compatible with copic air brush system // Alcohol-based ink is pemranent and non-toxic; dries acid free //

              Color: Sketch 72pc Set A. Scores of anime, manga and comics artists – as well as landscape, product, architecture and fashion designers – prefer Copic markers because of their ultra-blendable, low odor, alcohol based inks. Unlike water-based inks, which tend to pill and oversoak the paper while blending, Copics mix on the surface to deliver the wonderfully rich blends they're known for. This outstanding performance has distinguished Copic markers as the celebrated coloring tool within professional, semi-professional and hobby circles alike. .`,
              price: 130000,
              pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_691261-MLA41096980672_032020-F.webp',
            },
          )
        }, 2000);
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
    getItem();
  }, []);
  

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
        loading && <span>Cargando...</span>
      }
      {
        !loading &&
        <>
          <Typography
            variant="h3"
            sx={{
              fontSize: '2rem',
              mb: 3,
            }}
          >{greeting}</Typography>
          <ItemDetail item={item} />
        </>
      }
    </Box>
  )
}

export default ItemDetailContainer;