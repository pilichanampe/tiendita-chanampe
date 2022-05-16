// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import CartWidget from './CartWidget';
import InterestsIcon from '@mui/icons-material/Interests';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

export default function NavBar() {
  const pages = ['Cuadernos', 'Cartucheras', 'Resmas'];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="primary"
      >
        <Toolbar>
          <EmojiNatureIcon
            sx={{
              marginRight: '5px',
              marginBottom: '4px'
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            La Tiendita
          </Typography>
            {pages.map((page) => (
              <MenuItem key={page}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          <CartWidget items="4" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
