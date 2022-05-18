import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx';
import { theme } from './themes/theme';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CssBaseline } from '@mui/material';

import {
  ThemeProvider,
  createTheme
} from "@mui/material";
import ItemListContainer from './components/ItemListContainer';
import { Box } from '@mui/system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
        <ItemListContainer greeting="¡Te damos la bienvenida a La Tiendita!" />

        <ItemDetailContainer greeting="Detalle del producto" />
      </Box>
    </ThemeProvider>
  );
}

export default App;
