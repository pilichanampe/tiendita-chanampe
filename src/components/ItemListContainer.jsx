import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Item from './Item';
import ItemCount from './ItemCount'
import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const onAdd = (amount) => {
    alert(`Se agregaron al carrito ${amount} productos`)
  }

  useEffect(() => {
    const getItems = () => {
      setLoading(true);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 123,
              title: 'Cuaderno A4 Rayado Tapa Semirigida Espiralado Diseños',
              description: `Cuadernos A4.
              Tapa semirigida.
              Hojas rayadas.
              Diseños a elección, luego de la compra indique por chat el diseño elegido.`,
              price: 850,
              pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_763198-MLA47137569907_082021-F.webp',
            },
            {
              id: 124,
              title: 'Canopla Cartuchera Mooving Textil Grande Quitapesares',
              description: `
              Cartuchera textil grande Quitapesares
              
              Marca: Mooving
              
              Cartuchera de tela grande.
              Tamaño: 16.5x23.5x5.5cm.
              Bolsillo mesh interno en tapa.
              Solapa con 12 espacios en elásticos de cada lado, 24 en total.
              Compartimento amplio y profundo para útiles.`,
              price: 2999,
              pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_602355-MLA47404477387_092021-F.webp',
            },
            {
              id: 125,
              title: 'Marcadores Copic Sketch X 72 Linea D Doble Punta',
              description: 'Maravilloso cuaderno A4 marca FW',
              price: 130000,
              pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_691261-MLA41096980672_032020-F.webp',
            },
          ])
        }, 2000);
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
  }, []);
  

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
        onAdd={onAdd}
      />
      <ItemCount
        stock={0}
        initial={1}
        onAdd={onAdd}
      />
      {
        loading && <span>Cargando...</span>
      }
      <ItemList items={items} />
    </Box>
  )
}

export default ItemListContainer;