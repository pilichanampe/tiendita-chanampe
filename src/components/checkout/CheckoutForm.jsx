import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardContent, Grid, TextField } from '@mui/material';
import { useCartContext } from '../../contexts/CartContext';

function CheckoutForm({onCheckout}) {
  const { cartItems, total } = useCartContext();

  const onSendOrder = (e, buyer) => {
    e.preventDefault();
    if (validateForm()) {
      const order = {
        buyer,
        items: cartItems,
        date: new Date(),
        status: 'Generated',
        total,
      }
      onCheckout(order);
    }
  };

  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    email: false
  });

  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const validateForm = () => {    
    resetFormErrors();
    let validForm = true;

    if (!buyer.name) {
      setFormErrors(formErrors => ({ ...formErrors, name: true }));
      validForm = false;
    }
    if (
      !buyer.phone ||
      !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(buyer.phone)
    ) {
      setFormErrors(formErrors => ({ ...formErrors, phone: true }));
      validForm = false;
    }
    if (
      !buyer.email || 
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(buyer.email)
    ) {
      setFormErrors(formErrors => ({ ...formErrors, email: true }));
      validForm = false;
    }
    return validForm;
  }

  const resetFormErrors = () => {
    setFormErrors({ name: false, phone: false, email: false });
  }

  const handleChange = (e) => {
    if (!e.target.value) {
      setFormErrors({ ...formErrors, [e.target.name]: true });
    } else {
      setFormErrors({ ...formErrors, [e.target.name]: false });
      setBuyer({
        ...buyer,
        [e.target.name]: e.target.value
      });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={(e) => onSendOrder(e, buyer)}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
    <Grid
      container
      spacing={3}
      component={CardContent}
    >
      <Grid
        item
        sx={{
          width: '100%'
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: '1.5rem',
            marginBottom: '36px',
          }}
        >
          <strong>Datos para realizar el pago:</strong>
        </Typography>
        <TextField
          name="name"
          label="Nombre y apellido"
          id="outlined-size-small"
          onChange={handleChange}
          size="small"
          fullWidth
          type="text"
          error={ formErrors.name }
          helperText={ formErrors.name && 'Debe indicar su nombre y apellido'}
        />                
      </Grid>
      <Grid
        item
        sx={{
          width: '100%'
        }}
      >
        <TextField
          name="phone"
          label="Teléfono"
          id="outlined-size-small"
          size="small"
          fullWidth
          type="tel"
          onChange={handleChange}
          error={formErrors.phone}
          helperText={formErrors.phone && 'Debe indicar un número de teléfono válido'}
        />                  
      </Grid>
      <Grid
        item
        sx={{
          width: '100%'
        }}
      >
        <TextField
          name="email"
          label="E-mail"
          id="outlined-size-small"
          size="small"
          fullWidth
          type="email"
          onChange={handleChange}
          error={formErrors.email}
          helperText={formErrors.email && 'Debe indicar una dirección de e-mail válida'}
        />
      </Grid>
    </Grid>
    <Grid
      container
      component={CardContent}
      sx={{
        display: 'flex',
        justifySelf: 'end'
      }}
    >
      <Button
        type="submit"
        variant="contained"
        color="accent"
        sx={{
          color: 'white !important',
        }}
        fullWidth
      >
        Confirmar compra
      </Button>
    </Grid>
  </Box>
  )
}

export default CheckoutForm;