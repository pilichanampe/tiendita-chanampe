import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import { theme } from './themes/theme';

import {
  ThemeProvider,
  createTheme
} from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />

    </ThemeProvider>
  );
}

export default App;
