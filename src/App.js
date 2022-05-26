import logo from './logo.svg';
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

function App() {
  return (
    <ThemeProvider theme={theme}>
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
            }}
          >
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer />}
              ></Route>
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              ></Route>
              <Route
                path="/item/:itemId"
                element={<ItemDetailContainer greeting="Detalle del producto" />}
              ></Route>
              <Route
                path="/cart"
                element={<Cart greeting="Detalle del carrito" />}
              ></Route>
            </Routes>
          </Box>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
