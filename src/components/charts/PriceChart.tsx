import { PriceWithTimeNum } from "@/app/marketplace/PriceHistory";
import moment from "moment";
import {
  CartesianGrid,
  Label,
  Legend,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const timeFormatter = (value: string, _index: number) => {
  return moment(value).format("MMM D");
};

const tickTransform = (
  data: PriceWithTimeNum[],
  tickCount: number
) => {
  let momentFormat = "";
  if (tickCount === 7) {
    momentFormat = "YYYY-MM-DD";
  }

  const ticks: Set<number> = new Set();
  data.forEach((value) => {
    const dateStripped = Number(
      moment(moment(value.timestamp).format(momentFormat)).format("x")
    );
    ticks.add(dateStripped);
  });

  return ticks;
};

const formattedName = (value: string) => {
  let formattedName = "";
  if (value === "highestSellPrice") {
    formattedName = "High";
  } else if (value === "lowesSellPrice") {
    formattedName = "Low";
  } else {
    formattedName = "Average";
  }
  return formattedName;
};

export default function PriceChart({
  data,
  xkey,
  ykey,
  tickCount = 7,
  children,
}: {
  data: any[];
  xkey: string;
  ykey?: string;
  tickCount?: number;
  children?: React.ReactNode;
}) {
  let minTime = data[0].timestamp;
  let maxTime = 0;

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        accessibilityLayer
        width={800}
        height={400}
        data={data}
        margin={{
          bottom: 22,
          left: 40,
          right: 20,
          top: 12,
        }}
      >
        <CartesianGrid strokeWidth={0.2} />
        <Tooltip
          formatter={(value, name, props) => {
            return [value, formattedName(name.toString())];
          }}
        />
        <Legend
          // layout="vertical"
          verticalAlign="top"
          align="right"
          height={35}
          formatter={(value, entry, index) => formattedName(value)}
        />
        <XAxis
          dataKey="timestamp"
          tickFormatter={timeFormatter}
          tick={{ fontSize: "0.75rem" }}
          strokeWidth={1}
          type="number"
          domain={([dataMin, dataMax]) => {
            const loBound = dataMin - 1000 * 60 * 60 * 7;
            const upBound = dataMax + 1000 * 60 * 60 * 7;
            return [loBound, upBound];
          }}
          scale="time"
          interval={0}
          ticks={[...tickTransform(data, tickCount)]}
          style={{
            fill: "hsl(var(--chart-axis-primary))",
          }}
          axisLine={{
            stroke: "hsl(var(--chart-axis-primary))",
          }}
          tickLine={{
            stroke: "hsl(var(--chart-axis-primary))",
          }}
          dy={4}
        >
          <Label
            value="Date"
            position="insideBottom"
            offset={-18}
            style={{
              fill: "hsl(var(--foreground))",
            }}
          />
        </XAxis>
        <YAxis
          dataKey={ykey}
          tick={{ fontSize: "0.75rem" }}
          style={{
            fill: "hsl(var(--chart-axis-primary))",
          }}
          axisLine={{
            stroke: "hsl(var(--chart-axis-primary))",
          }}
          tickLine={{
            stroke: "hsl(var(--chart-axis-primary))",
          }}
        >
          <Label
            value="Price"
            position="left"
            offset={33}
            style={{
              fill: "hsl(var(--foreground))",
            }}
            angle={-90}
          />
        </YAxis>
        {children}
      </LineChart>
    </ResponsiveContainer>
  );
}
