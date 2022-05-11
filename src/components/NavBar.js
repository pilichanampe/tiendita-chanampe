// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

import CategoryDropdown from './basecomponents/CategoryDropdown';

export default function NavBar() {
  const pages = ['Cuadernos', 'Cartucheras', 'Resmas'];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="primary"
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi librería
          </Typography>
          {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
        </Toolbar>
      </AppBar>
    </Box>
    // <div>Hola</div>
  );
}
