"use client";

import { numberWithCommas } from "@/components/charts/PriceChart";
import { Card, CardContent } from "@/components/ui/card";
import {
  Blocks,
  ChevronsDown,
  ChevronsUp,
  UnfoldVertical,
} from "lucide-react";
import moment from "moment";
import { useEffect, useState } from "react";
import { PriceWithTimeNum } from "./PriceHistory";

interface ITradeStats {
  highestSellPrice: number;
  highestSellDate: number;
  lowestSellPrice: number;
  lowestSellDate: number;
  maximumMargin: number;
  totalVolume: number;
  dailyVolume: number;
}

export default function TradeStats({
  prices,
}: {
  prices: PriceWithTimeNum[];
}) {
  const [stats, setStats] = useState<ITradeStats>({} as ITradeStats);

  useEffect(() => {
    if (prices?.length) {
      // Yesterday
      let yesterday = moment().subtract(1, "day");

      let highPrice = prices[0].highestSellPrice;
      let highPriceDate = 0;
      let lowPrice = prices[0].lowesSellPrice;
      let lowPriceDate = 0;
      let totalVolume = 0;
      let dailyVolume = 0;

      prices.forEach((price) => {
        // Get most recent data

        if (price.highestSellPrice > highPrice) {
          highPrice = price.highestSellPrice;
          highPriceDate = price.timestamp;
        }
        if (price.lowesSellPrice < lowPrice) {
          lowPrice = price.lowesSellPrice;
          lowPriceDate = price.timestamp;
        }
        if (yesterday.isBefore(moment(price.timestamp))) {
          dailyVolume += price.tradeVolume;
        }
        totalVolume += price.tradeVolume;
      });

      const tradeInfo: ITradeStats = {
        highestSellPrice: highPrice,
        highestSellDate: highPriceDate,
        lowestSellPrice: lowPrice,
        lowestSellDate: lowPriceDate,
        maximumMargin: highPrice - lowPrice,
        totalVolume: totalVolume,
        dailyVolume: dailyVolume,
      };

      setStats(tradeInfo);
    }
  }, [prices]);

  return (
    <Card className="flex basis-full" id="price-stats-card">
      <CardContent className="pt-6 w-full">
        <div className="flex flex-row flex-wrap w-full">
          <div className="basis-full pb-3">
            <h3>Trade Stats</h3>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row flex-wrap w-full">
              <ChevronsUp color="hsl(var(--chart-price-hi))" />
              <span className="px-2 text-md">Highest Sell Price:</span>
              <span className="text-md font-bold ">
                {numberWithCommas(stats.highestSellPrice)}
              </span>
              <div className="basis-full"></div>
              <span className="pl-8 text-sm text-[color:hsl(var(--stats-text))]">
                {moment(stats.highestSellDate).fromNow()}
              </span>
            </div>
            <div className="flex flex-row flex-wrap w-full">
              <ChevronsDown color="hsl(var(--chart-price-lo))" />
              <span className="px-2 text-md">Lowest Sell Price:</span>
              <span className="text-md font-bold ">
                {numberWithCommas(stats.lowestSellPrice)}
              </span>
              <div className="basis-full"></div>
              <span className="pl-8 text-sm text-[color:hsl(var(--stats-text))]">
                {moment(stats.lowestSellDate).fromNow()}
              </span>
            </div>
            <div className="flex flex-row flex-wrap w-full pb-4">
              <UnfoldVertical width={24} />
              <span className="px-2 text-md">Maximum Margin:</span>
              <span className="text-md font-bold ">
                {numberWithCommas(stats.maximumMargin)}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row flex-wrap w-full">
              <Blocks />
              <span className="px-2 pb-2 text-md">Daily Volume:</span>
              <span className="text-md font-bold ">
                {numberWithCommas(stats.dailyVolume)}
              </span>
            </div>
            <div className="flex flex-row flex-wrap w-full">
              <Blocks />
              <span className="px-2 text-md">Total Volume:</span>
              <span className="text-md font-bold ">
                {numberWithCommas(stats.totalVolume)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
