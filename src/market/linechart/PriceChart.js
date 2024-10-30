import { LineChart } from "@mui/x-charts/LineChart";
import { getPriceHistory } from "../MarketUtils";
import { ItemRepository } from "../../items/ItemRepository";
import { useEffect, useState } from "react";
import { getCalendarDate, getFullDate } from "./DateUtils";

const itemRepository = new ItemRepository();
const configuration = {
  highestSellPrice: { label: "High Price", color: "green" },
  lowesSellPrice: { label: "Low Price", color: "red" },
  averagePrice: { label: "Avg Price", color: "yellow" },
};

function PriceChart({ itemHistory }) {
  const [priceHistory, setPriceHistory] = useState([]);

  useEffect(() => {
    console.log("change in item history", itemHistory);
    var itemId = itemRepository.getItemId(itemHistory);

    if (itemId !== "") {
      getPriceHistory(itemId, "7d").then((history) => {
        var datapoints = [];
        for (var i = 0; i < history.length; i++) {
          datapoints.push(history[i]);
        }
        console.log(datapoints);
        setPriceHistory(datapoints);
      });
      // .then((datapoints, xAxis, volume) => {
      //   setPriceHistory(datapoints);
      // });
    }
  }, [itemHistory]);

  return (
    <div>
      <LineChart
        xAxis={[
          {
            dataKey: "timestamp",
            valueFormatter: (value) =>
              getFullDate(new Date(value.toString())),
          },
        ]}
        series={Object.keys(configuration).map((key) => ({
          dataKey: key,
          label: configuration[key]["label"],
          color: configuration[key]["color"],
        }))}
        dataset={priceHistory}
        width={500}
        height={300}
        grid={{ vertical: true, horizontal: true }}
      ></LineChart>
    </div>
  );
}

export default PriceChart;
