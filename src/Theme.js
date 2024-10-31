import { dark, light } from "@mui/material/styles/createPalette";

// Base color palette
const colorPalette = {
  primary: "#bb86fc",
  secondary: "#a59dad",
  whiteText: "#ffffff",
  darkText: "#121212",
};

// Modify Material UI theme
export const themeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: colorPalette.primary,
    },
    secondary: {
      main: colorPalette.secondary,
    },
    text: {
      primary: "#f5f5f5",
    },
  },
  typography: {
    allVariants: {
      fontFamily: [
        "Avenir Next",
        "Fira Code",
        "Fira Sans",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Droid Sans",
        "Helvetica Neue",
      ].join(","),
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
    },
  },
};
