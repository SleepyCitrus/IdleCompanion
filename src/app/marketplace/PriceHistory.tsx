"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Item } from "@/database/Item";
import { Price } from "@/database/Price";
import {
  ArrowDownFromLine,
  ArrowRightToLine,
  ArrowUpFromLine,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getPriceHistory } from "./MarketApiUtils";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  hiprice: {
    label: "High Price",
    icon: ArrowUpFromLine,
    color: "hsl(var(--chart-1))",
  },
  loprice: {
    label: "Low Price",
    icon: ArrowDownFromLine,
    color: "hsl(var(--chart-2))",
  },
  avgprice: {
    label: "Average Price",
    icon: ArrowRightToLine,
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export default function PriceHistory({
  itemName,
  timeRange,
  allItems,
}: {
  itemName: string;
  timeRange: string;
  allItems: Item[];
}) {
  const [loading, setLoading] = useState(true);
  const [prices, setPrices] = useState<Price[]>([]);

  useEffect(() => {
    console.log("hello ive found a change", itemName, timeRange);

    const search = allItems.find((item) => item.name_id === itemName);

    if (search) {
      Promise.resolve()
        .then(() => setLoading(true))
        .then(() =>
          getPriceHistory(search.internal_id.toString(), timeRange)
        )
        .then((data) => {
          console.log("data", data);
          setPrices(data);
          setLoading(false);
        });
    }
  }, [itemName, timeRange]);

  return (
    <div className="flex flex-wrap gap-2 w-full">
      <Card className="flex basis-full">
        <CardContent className="flex flex-wrap gap-2 pt-6">
          <h4>Price History</h4>
          <span>{itemName}</span>
          <span>{timeRange}</span>
          <h4 className="basis-full">Chart looking thing</h4>
          <ChartContainer
            config={chartConfig}
            className="min-h-[200px] max-h-[400px] max-w-[1200px] w-full h-full"
          >
            <LineChart accessibilityLayer data={prices}>
              <CartesianGrid strokeWidth={0.2} />
              <XAxis dataKey="timestamp" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="highestSellPrice"
                dot={false}
                radius={4}
              />
              <Line
                type="monotone"
                dataKey="lowesSellPrice"
                dot={false}
                radius={4}
              />
              <Line
                type="monotone"
                dataKey="averagePrice"
                dot={false}
                radius={4}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
