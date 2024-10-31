import "./App.css";
import { ItemDatabaseProvider } from "./items/ItemDatabaseProvider.tsx";
import MarketPage from "./market/MarketPage";

function App() {
  return (
    <div className="app">
      <ItemDatabaseProvider>
        <MarketPage />
      </ItemDatabaseProvider>
    </div>
  );
}

export default App;
