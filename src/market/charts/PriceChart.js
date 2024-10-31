import "./PriceChart.css";
import { LineChart } from "@mui/x-charts/LineChart";
import { getPriceHistory } from "../MarketUtils";
import { useEffect, useState } from "react";
import {
  getCalendarDateWithYear,
  getFullDate,
} from "../time/DateUtils";
import { useItemDatabase } from "../../items/ItemDatabaseProvider";

const configuration = {
  highestSellPrice: { label: "High Price", color: "green" },
  lowesSellPrice: { label: "Low Price", color: "red" },
  averagePrice: { label: "Avg Price", color: "yellow" },
};
const historyFields = [
  "averagePrice",
  "highestSellPrice",
  "lowesSellPrice",
  "timestamp",
  "tradeVolume",
];

export default function PriceChart({ selectedItem }) {
  const [priceHistory, setPriceHistory] = useState([]);
  const [timeRange, setTimeRange] = useState("7d");
  const [tickMinStep, setTickMinStep] = useState(3600 * 1000 * 24);
  const itemDB = useItemDatabase();

  useEffect(() => {
    var itemId = itemDB.getItemId(selectedItem);

    if (itemId !== "") {
      getPriceHistory(itemId, timeRange)
        .then((history) => {
          var datapoints = [];

          // Convert each historical return to line graph data
          for (var i = 0; i < history.length; i++) {
            var datapoint = {};
            var historicalReturn = history[i];
            historyFields.forEach((field) => {
              if (field === "timestamp") {
                // console.log(
                //   new Date(historicalReturn[field]).toString()
                // );
                datapoint[field] = new Date(historicalReturn[field]);
              } else {
                datapoint[field] = historicalReturn[field];
              }
            });
            datapoints.push(datapoint);
          }
          setPriceHistory(datapoints);
        })
        .then(() => {
          console.log("Updated line graph.");
        });
    }
  }, [selectedItem, timeRange]);

  return (
    <div className="priceChart">
      <LineChart
        xAxis={[
          {
            dataKey: "timestamp",
            valueFormatter: (value, context) => {
              return context.location === "tick"
                ? getCalendarDateWithYear(value, true)
                : getFullDate(value);
            },
            scaleType: "time",
            tickMinStep: tickMinStep,
            labelStyle: {},
          },
        ]}
        series={Object.keys(configuration).map((key) => ({
          dataKey: key,
          label: configuration[key]["label"],
          color: configuration[key]["color"],
          showMark: false,
        }))}
        dataset={priceHistory}
        margin={{ left: 100 }}
        width={1000}
        height={400}
        grid={{ vertical: true, horizontal: true }}
      ></LineChart>
    </div>
  );
}
