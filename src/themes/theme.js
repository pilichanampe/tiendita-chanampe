import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5666"
    },
    secondary: {
      main: "#FFCCC9"
    },
    accent: {
      main: "#00FDDC"
    },
  },
  shape: {
    borderRadius: 4
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          margin: 1
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#393e46"
        }
      },
      defaultProps: {
        elevation: 0
      }
    }
  }
})