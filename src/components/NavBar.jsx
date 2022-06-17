import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartWidget from './CartWidget';
import { Link as RouterLink } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';
import Tab from '@mui/material/Tab';
import { Tabs } from '@mui/material';
import { useState, useRef, useEffect } from 'react';

export default function NavBar() {
  const categories = ['Cuadernos', 'Cartucheras', 'Marcadores', 'Lapiceras'];
  const { cartItems } = useCartContext();
  const [selectedCategory, setSelectedCategory] = useState(false);
  const tabs = useRef();

  const handleChange = (e, newValue) => {
    setSelectedCategory(newValue);
  };

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (tabs.current && !tabs.current.contains(e.target)) {
        setSelectedCategory(false);
      };
    }
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    }
  }, [selectedCategory])
  

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
          <RouterLink
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
          </RouterLink>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Tabs
              value={selectedCategory}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              ref={tabs}
            >
              {
                categories.map((category) => (
                  <Tab
                    value={category}
                    label={category}
                    component={RouterLink}
                    to={`/category/${category.toLowerCase()}`}
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                    }}
                    key={category}
                  />
                ))
              }
            </Tabs>
          <RouterLink
            to="/cart"
            style={{
              textDecoration: 'none',
              color: 'white'
            }}
          >
            <CartWidget
              items={cartItems ? cartItems.length : false}
            />
          </RouterLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
