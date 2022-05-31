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
      main: "#1976d2",
      darken: "#0558b0",
    },
    red: {
      main: "#F73A3A"
    },
    white: {
      main: "#ffffff"
    },
    lightgray: {
      main: "#cfcecc"
    }
  },
  shape: {
    borderRadius: 4
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
          height: '100%',
          width: '100%',
        },
        section: {
          maxWidth: '1284px',
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          width: '100%',

        }
      },     
    },
    MuiButton: {
      // defaultProps: {
      //   sx: {
      //     margin: 3
      //   },
      // },
      styleOverrides: {
        root: {
          marginTop: 6,
          marginBottom: 6,
        }
      },
    
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#ffffff",
        }
      },
      defaultProps: {
        elevation: 3,
      }
    },
    // MuiCard: {
    //   styleOverrides: {
    //     root: {
    //       padding: '14px 16px',
    //     }
    //   }
    // }
  }
})