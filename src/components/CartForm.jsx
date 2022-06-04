import { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardActions, CardContent, Grid, TextField } from '@mui/material';

const style = {
  // position: 'absolute' as 'absolute',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 800,
  boxShadow: 24,
};

export default function CartForm({ show, onSendOrder, onClose }) {
  const [isOpen, setIsOpen] = useState(show);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
  
  }, [name, phone, email])
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={() => onClose(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <Card sx={style}>
            <CardContent>
            <Typography
                  variant="h6"
                  sx={{
                    marginLeft: '24px'
                  }}
                >
                  <strong>Completá con tus datos para finalizar la compra:</strong>
                </Typography>
                <Box
                  component="form"
                  onSubmit={onSendOrder}
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
                        <TextField
                          label="Nombre y apellido"
                          id="outlined-size-small"
                          onChange={(e) => setName(e.target.value)}
                          size="small"
                          fullWidth
                          type="text"
                        />                
                      </Grid>
                      <Grid
                        item
                        sx={{
                          width: '100%'
                        }}
                      >
                        <TextField
                          label="Teléfono"
                          id="outlined-size-small"
                          // defaultValue="Small"
                          size="small"
                          fullWidth
                          type="tel"
                          onChange={(e) => setPhone(e.target.value)}
                        />                  
                      </Grid>
                      <Grid
                        item
                        sx={{
                          width: '100%'
                        }}
                      >
                        <TextField
                          label="email"
                          id="outlined-size-small"
                          // defaultValue="Small"
                          size="small"
                          fullWidth
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Grid>
                    <Grid
                      item
                      sx={{
                        width: '100%',
                        // border: '2px solid red',
                        px: '14px'
                      }}
                    >
                      <Button
                        variant="contained"
                        color="accent"
                        sx={{
                          color: 'white !important',
                        }}
                        fullWidth
                        onClick={() => onSendOrder({ name, phone, email })}
                      >
                        Finalizar compra
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
}