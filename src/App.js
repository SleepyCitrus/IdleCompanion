import "./App.css";
import Market from "./market/Market";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Modify Material UI theme
const theme = createTheme({
  typography: {
    fontFamily: [
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
  },
});

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <div className="title">
          <h2>MARKETPLACE</h2>
          <span>Made by VexingCitrus</span>
        </div>
        <Market />
      </ThemeProvider>
    </div>
  );
}

export default App;
