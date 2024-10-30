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
    <div className="App">
      <ThemeProvider theme={theme}>
        <div>CONTAINED</div>
        <Market />
      </ThemeProvider>
    </div>
  );
}

export default App;
