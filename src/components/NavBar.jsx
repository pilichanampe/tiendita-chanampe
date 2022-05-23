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
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const categories = ['Cuadernos', 'Cartucheras', 'Marcadores', 'Lapiceras'];
  const { id } = useParams();
  const handleCategoryClick = (e) => {
    console.log(e.target.textContent);
  }

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  

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
              <EmojiNatureIcon
                sx={{
                  marginRight: '5px',
                  marginBottom: '4px'
                }}
              />
              La Tiendita
            </Typography>
          </Link>
          <Box
            sx={{
              display: 'flex'
            }}
          >
            {categories.map((category) => (
              <MenuItem
                  key={category}
                  onClick={handleCategoryClick}
                >
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
