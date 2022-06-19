import { Box, CardMedia, Typography } from '@mui/material';

function CheckoutItem({ item }) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          py: '14px'
        }}
      >
        <Box
          sx={{
            marginRight: '14px'
          }}        
        >
          <CardMedia
            component="img"
            sx={{
              height: '70px',
              width: '70px',
              objectFit: 'cover',
              borderRadius: '50%',
              border: '1px solid #e7e7e7',
              backgroundColor: 'lightgray'
            }}
            image={item.pictureUrl}
            alt="Imagen del producto"
          />          
        </Box>
        <Box
          sx={{
            color: '#a3a2a2',
            width: '100%',
            marginRight: '14px'
          }}
        >
          <Typography>{item.title}</Typography>
          <Typography>Cantidad: {item.quantity}</Typography>
          <Typography>${item.price} c/u</Typography>
        </Box>
        <Box
          sx={{
            minWidth: '100px',
            maxWidth: '400px'
          }}        
        >
            <Typography
              variant="p"
              sx={{
                fontSize: '1.5rem',
                display: 'flex',
                justifyContent: 'end'
              }}
            >
              <strong>${item.price * item.quantity}</strong>
            </Typography>
        </Box>

      </Box>    
    </>
  )
}

export default CheckoutItem;