import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ItemCount from './ItemCount';

function ItemDetail({ item }) {
  const onAdd = (amount) => {
    alert(`Se agregaron al carrito ${amount} productos`)
  }

  return (
    <>
      {
        <Grid
          container
          component={Card}
          sx={{
            width: '100%',
            minHeight: '500px',
            padding: '16px 0'  
          }}
        >
          <Grid
            item
            lg={8}
            sx={{
              padding: '14px 16px'
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: '400px',
                width: '100%',
                objectFit: 'contain',
                borderRadius: '4px',
              }}
              image={item.pictureUrl}
              alt="green iguana"
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography
                variant="p"
              >
                Descripción:
              </Typography>
              <Typography
                variant="p"
                sx={{
                  color: '#a3a2a2',
                }}
              >
                {item.description}
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            lg={4}
            sx={{
              padding: '14px 16px',
              borderLeft: '1px solid #e7e7e7'
            }}
          >
            <Typography variant="h5">
              {item.title}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: '30px',
                mb: '60px'
              }}
            >
              ${item.price}
            </Typography>
            <ItemCount
              initial={1}
              stock={10}
              onAdd={onAdd}
            />
          </Grid>
        </Grid>
      }
    </>
  )
}

export default ItemDetail;