import './App.css';
import NavBar from './components/NavBar.jsx';
import { theme } from './themes/theme';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import Cart from './components/Cart';
import {
  ThemeProvider,
  createTheme
} from "@mui/material";
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import PageNotFound from './components/PageNotFound';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Box
            component="main"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 16px',
              marginTop: '16px',
            }}
          >
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting="Lista de productos" />}
              ></Route>
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer greeting="Lista de productos" />}
              ></Route>
              <Route
                path="/item/:itemId"
                element={<ItemDetailContainer greeting="Detalle del producto" />}
              ></Route>
              <Route
                path="/cart"
                element={<Cart greeting="Detalle del carrito" />}
              ></Route>
              <Route
                path="/checkout"
                element={<Checkout />}
              ></Route>
              <Route
                path="/*"
                element={<PageNotFound />}
              ></Route>
            </Routes>
          </Box>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
