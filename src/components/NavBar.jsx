import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartWidget from './CartWidget';
import { Link as RouterLink } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';
import Tab from '@mui/material/Tab';
import { IconButton, Tabs, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  const categories = ['Cuadernos', 'Cartucheras', 'Marcadores', 'Lapiceras'];
  const { cartItems, itemsAmount } = useCartContext();
  const [selectedCategory, setSelectedCategory] = useState(false);
  const tabs = useRef();
  const [showDrawer, setShowDrawer] = useState();

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  }

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
  }, [selectedCategory, itemsAmount])
  

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
          {/* Desktop */}
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'flex',
                lg: 'flex',
              },
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
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
                  width: '170px',
                }}
              >
                ✨ La Tiendita ✨
              </Typography>
            </RouterLink>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
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
                items={itemsAmount}
              />
            </RouterLink>
            </Box>
          </Box>

          {/* Mobile  */}
          <Box
            sx={{
              display: {
                xs: 'flex',
                sm: 'flex',
                md: 'none',
                lg: 'none',
              },
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}          
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setShowDrawer(!showDrawer)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={showDrawer}
              onClose={toggleDrawer}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
              >
                <List>
                  <ListItem
                    sx={{
                      display: 'flex',
                      pl: '20px'
                    }}
                  >
                    <RouterLink
                    to="/"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        flexGrow: 1,
                        width: '170px',
                      }}
                    >
                      ✨ La Tiendita ✨
                    </Typography>
                    </RouterLink>

                  </ListItem>
                  {categories.map((category) => (
                    <ListItem
                      component={RouterLink}
                      to={`/category/${category.toLowerCase()}`}
                      key={category}
                      sx={{
                        color: 'primary.main',
                      }}
                    >
                      <ListItemButton>
                        <ListItemText primary={category} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>            
            </Drawer>            
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
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
                    width: '170px',
                    mr: '12px'
                  }}
                >
                  ✨ La Tiendita ✨
                </Typography>
              </RouterLink>
              <RouterLink
                to="/cart"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <CartWidget
                  items={itemsAmount}
                />
              </RouterLink>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
