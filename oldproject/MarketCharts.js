import "./MarketCharts.css";
import SearchBar from "../items/search/SearchBar";
import PriceChart from "./charts/PriceChart";
import { useEffect, useState } from "react";
import TimeSelect from "./time/TimeSelect";
import Card from "../components/Card.js";
import { useItemDatabase } from "../items/ItemDatabaseProvider.tsx";

const timeRangeOptions = ["1d", "7d", "30d", "1y"];

export default function MarketCharts() {
  const [selectedItem, setSelectedItem] = useState("");
  const [timeRange, setTimeRange] = useState("7d");
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemDB = useItemDatabase();

  useEffect(() => {
    const populateItems = setInterval(() => {
      console.log("Waiting for items to populate...");
      if (itemDB.isPopulated()) {
        console.log("Items populated!", itemDB.namesToIds);
        setAllItems(itemDB.getAllItemNames());
        setLoading(false);
        clearInterval(populateItems);
      }
    }, 1000);
  }, []);

  return (
    <Card>
      <div className="marketChartsLoading" hidden={!loading}>
        Loading...
      </div>
      <div hidden={loading}>
        <div className="marketCharts">
          <div className="chartOptions">
            <SearchBar
              allItems={allItems}
              setItemHistory={setSelectedItem}
            />
            <TimeSelect
              label={"Period"}
              defaultValue={timeRange}
              setValue={setTimeRange}
              options={timeRangeOptions}
            ></TimeSelect>
          </div>
          <PriceChart selectedItem={selectedItem} />
        </div>
      </div>
    </Card>
  );
}
