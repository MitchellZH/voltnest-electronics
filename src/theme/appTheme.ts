import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0c2f74",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F59E0B",
    },
    background: {
      default: "#c6defd",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#17212B",
      secondary: "#5B6573",
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 10,
  },
});
