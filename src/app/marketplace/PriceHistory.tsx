"use client";

import EmptyLineChart from "@/components/charts/EmptyPriceChart";
import PriceChart from "@/components/charts/PriceChart";
import { Card, CardContent } from "@/components/ui/card";
import { Price } from "@/database/Price";
import moment from "moment";
import { useEffect, useState } from "react";
import { Line, ResponsiveContainer } from "recharts";
import { getPriceHistory } from "./MarketApiUtils";
import Loading from "./loading";

export interface PriceWithTimeNum {
  averagePrice: number;
  highestSellPrice: number;
  itemId: number;
  lowesSellPrice: number;
  timestamp: number;
  tradeVolume: number;
}

export default function PriceHistory({
  itemName,
  timeRange,
  itemNamesToId,
}: {
  itemName: string;
  timeRange: string;
  itemNamesToId: Map<string, number>;
}) {
  const [loading, setLoading] = useState(false);
  const [prices, setPrices] = useState<PriceWithTimeNum[]>([]);

  useEffect(() => {
    const searchId = itemNamesToId.get(itemName) || null;
    if (searchId) {
      Promise.resolve()
        .then(() => setLoading(true))
        .then(() => getPriceHistory(searchId.toString(), timeRange))
        .then((data: Price[]) => {
          const transformedPrice: PriceWithTimeNum[] = data.map(
            (price) => ({
              averagePrice: price.averagePrice,
              highestSellPrice: price.highestSellPrice,
              itemId: price.itemId,
              lowesSellPrice: price.lowesSellPrice,
              timestamp: Number(moment(price.timestamp).format("x")),
              tradeVolume: price.tradeVolume,
            })
          );
          setPrices(transformedPrice);
        })
        .then(() => {
          setLoading(false);
        });
    }
  }, [itemName, timeRange]);

  return (
    <div className="flex flex-col flex-wrap gap-2 w-full">
      <Card className="flex basis-full">
        <CardContent className="flex flex-wrap gap-2 pt-6 w-full">
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="flex flex-row gap-2">
                <h4>Price History</h4>
                <span>{itemName}</span>
                <span>{timeRange}</span>
              </div>
              <h4 className="basis-full">Chart looking thing</h4>

              <ResponsiveContainer width="100%" height={350}>
                {prices.length > 0 ? (
                  <PriceChart data={prices} xkey="timestamp">
                    <Line
                      type="monotone"
                      dataKey="highestSellPrice"
                      dot={false}
                      stroke="hsl(141.9 69.2% 58%)"
                    />
                    <Line
                      type="monotone"
                      dataKey="lowesSellPrice"
                      dot={false}
                      stroke="hsl(0 90.6% 70.8%)"
                    />
                    <Line
                      type="monotone"
                      dataKey="averagePrice"
                      dot={false}
                      stroke="hsl(47.9 95.8% 53.1%)"
                    />
                  </PriceChart>
                ) : (
                  // dummy line chart if no data
                  <EmptyLineChart />
                )}
              </ResponsiveContainer>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
