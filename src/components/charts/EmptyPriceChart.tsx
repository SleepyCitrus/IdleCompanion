import moment from "moment";
import PriceChart from "./PriceChart";

export default function EmptyLineChart() {
  const fakeData = [];

  for (let i = 6; i > -1; i--) {
    const date = Number(moment().subtract(i, "days").format("x"));
    const cost = i < 5 ? i * 10 : 5 * 10;
    fakeData.push({ timestamp: date, price: cost });
  }

  return (
    <PriceChart
      data={fakeData}
      fakeData
      xkey="timestamp"
      ykey="price"
    />
  );
}
