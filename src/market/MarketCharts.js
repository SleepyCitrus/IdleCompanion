import "./MarketCharts.css";
import SearchBar from "../items/search/SearchBar";
import PriceChart from "./charts/PriceChart";
import { useEffect, useState } from "react";
import TimeSelect from "./time/TimeSelect";
import Card from "../card/Card";
import { useItemDatabase } from "../items/ItemDatabaseProvider";

const timeRangeOptions = ["1d", "7d", "30d", "1y"];

export default function MarketCharts() {
  const [selectedItem, setSelectedItem] = useState("");
  const [timeRange, setTimeRange] = useState("7d");
  const [allItems, setAllItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const itemDB = useItemDatabase();

  useEffect(() => {
    console.log("changed all items", allItems);

    if (allItems.length === 0) {
      setAllItems(itemDB.getAllItemNames());
      setLoaded(true);
    } else {
      // setLoaded(false);
    }
    console.log(loaded);
  });

  return (
    <Card>
      <div hidden={loaded}>Loading...</div>
      <div hidden={!loaded}>
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
