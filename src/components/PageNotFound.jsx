import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

function PageNotFound() {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          mr: '16px',
          display: 'flex',
        }}
      >
        <strong>
        ¡Oh, no! La página que buscás no existe :(.
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
  )
}

export default PageNotFound;