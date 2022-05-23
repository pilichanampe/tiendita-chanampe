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
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer />}
          ></Route>
          <Route
            path="/category/:id"
            element={<ItemListContainer />}
          ></Route>
          <Route
            path="/item/:id"
            element={<ItemDetailsContainer />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
