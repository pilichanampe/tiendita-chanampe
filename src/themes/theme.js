import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#81138A"
    },
    secondary: {
      main: "#EFBCD5"
    },
    accent: {
      main: "#BE97C6"
    },
    red: {
      main: "#F73A3A"
    }
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
          background: "#ffffff"
        }
      },
      defaultProps: {
        elevation: 0
      }
    }
  }
})