// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import CartWidget from './CartWidget';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const categories = ['Cuadernos', 'Cartucheras', 'Marcadores', 'Lapiceras'];
  const { id } = useParams();

  useEffect(() => {
    console.log('idParams en Navbar', id);

  }, [])
  

  return (
    <Box
      sx={{ flexGrow: 1 }}
      component="header"
    >
      <AppBar
        component="nav"
        position="static"
        color="primary"
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
              }}
            >
              ✨ La Tiendita ✨
            </Typography>
          </Link>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {categories.map((category) => (
              <MenuItem key={category}>
                  <Link
                    to={`/category/${category.toLowerCase()}`}
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                    }}
                  >
                    <Typography textAlign="center">{category}</Typography>
                  </Link>
                </MenuItem>
            ))}
          <CartWidget items="4" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
