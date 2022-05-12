import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx';
import { theme } from './themes/theme';

import {
  ThemeProvider,
  createTheme
} from "@mui/material";
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <ItemListContainer greeting="¡Te damos la bienvenida a La Tiendita!"></ItemListContainer>
    </ThemeProvider>
  );
}

export default App;
