"use client";

import EmptyLineChart from "@/components/charts/EmptyPriceChart";
import PriceChart from "@/components/charts/PriceChart";
import { Card, CardContent } from "@/components/ui/card";
import { Price } from "@/database/Price";
import { getPriceHistory } from "@/lib/ApiUtils";
import moment from "moment";
import { useEffect, useState } from "react";
import { Line, ResponsiveContainer } from "recharts";
import { LoadingPriceHistory } from "./LoadingPriceHistory";
import NoHistoryWarning from "./NoHistoryWarning";
import TradeStats from "./TradeStats";

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
  const [showWarning, setShowWarning] = useState(false);
  const [prices, setPrices] = useState<PriceWithTimeNum[]>([]);

  useEffect(() => {
    const searchId = itemNamesToId.get(itemName);

    if (searchId != null) {
      Promise.resolve()
        .then(() => setLoading(true))
        .then(() => getPriceHistory(searchId.toString(), timeRange))
        .then((data: Price[]) => {
          let transformedPrice: PriceWithTimeNum[] = [];
          let warning = true;

          if (data?.length) {
            // Found data, transform and return
            warning = false;
            transformedPrice = data.map((price) => ({
              averagePrice: price.averagePrice,
              highestSellPrice: price.highestSellPrice,
              itemId: price.itemId,
              lowesSellPrice: price.lowesSellPrice,
              timestamp: Number(moment(price.timestamp).format("x")),
              tradeVolume: price.tradeVolume,
            }));
          }
          setShowWarning(warning);
          setPrices(transformedPrice);
        })
        .then(() => {
          setLoading(false);
        });
    }
  }, [itemName, timeRange]);

  return (
    <div
      className="flex flex-row flex-wrap gap-2 w-full"
      id="price-history-wrapper"
    >
      {/* Price Stats */}
      {loading ? (
        <LoadingPriceHistory />
      ) : (
        <>
          {showWarning && <NoHistoryWarning />}

          <TradeStats prices={prices} />

          {/* Price History */}
          <Card className="flex basis-full" id="price-history-card">
            <CardContent className="flex flex-wrap gap-2 w-full">
              <div className="flex flex-row gap-2">
                <h3>Price History</h3>
              </div>

              <ResponsiveContainer width="100%" height={400}>
                {prices.length > 0 ? (
                  <PriceChart
                    data={prices}
                    xkey="timestamp"
                    timeRange={timeRange}
                  >
                    <Line
                      type="monotone"
                      dataKey="highestSellPrice"
                      dot={false}
                      stroke="hsl(var(--chart-price-hi))"
                      animationDuration={5000}
                      strokeWidth={3}
                    />
                    <Line
                      type="monotone"
                      dataKey="averagePrice"
                      dot={false}
                      stroke="hsl(var(--chart-price-avg))"
                      animationDuration={5000}
                      strokeWidth={3}
                    />
                    <Line
                      type="monotone"
                      dataKey="lowesSellPrice"
                      dot={false}
                      stroke="hsl(var(--chart-price-lo))"
                      animationDuration={5000}
                      strokeWidth={3}
                    />
                  </PriceChart>
                ) : (
                  // dummy line chart if no data
                  <EmptyLineChart />
                )}
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
