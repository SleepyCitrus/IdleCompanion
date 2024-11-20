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
        <div
          className="flex flex-row flex-wrap w-full"
          id="trade-stats"
        >
          <div className="basis-full pb-3">
            <h3>Trade Stats</h3>
          </div>
          <div
            className="flex flex-col gap-2 basis-[300px] flex-grow pb-2"
            id="trade-stats-prices"
          >
            <div className="flex flex-row flex-wrap">
              <ChevronsUp color="hsl(var(--chart-price-hi))" />
              <span className="px-2 text-base">
                Highest Sell Price:
              </span>
              <span className="text-base font-bold ">
                {numberWithCommas(stats.highestSellPrice)}
              </span>
              <i className="pl-8 basis-full text-sm text-[color:hsl(var(--stats-text-muted))]">
                {moment(stats.highestSellDate).fromNow()}
              </i>
            </div>
            <div className="flex flex-row flex-wrap">
              <ChevronsDown color="hsl(var(--chart-price-lo))" />
              <span className="px-2 text-base">
                Lowest Sell Price:
              </span>
              <span className="text-base font-bold ">
                {numberWithCommas(stats.lowestSellPrice)}
              </span>
              <i className="pl-8 basis-full text-sm text-[color:hsl(var(--stats-text-muted))]">
                {moment(stats.lowestSellDate).fromNow()}
              </i>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 basis-[300px] flex-grow"
            id="trade-stats-margin"
          >
            <div className="flex flex-row flex-wrap w-full pb-4">
              <UnfoldVertical width={24} />
              <span className="px-2 text-base">Maximum Margin:</span>
              <span className="text-base font-bold ">
                {numberWithCommas(stats.maximumMargin)}
              </span>
              <i className="pl-8 text-sm text-[color:hsl(var(--stats-text-muted))] basis-full">
                Does not factor in the 1% trading tax.
              </i>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 basis-[300px] flex-grow"
            id="trade-stats-volume"
          >
            <div className="flex flex-row flex-wrap w-full">
              <Blocks />
              <span className="px-2 pb-2 text-base">
                Daily Volume:
              </span>
              <span className="text-base font-bold ">
                {numberWithCommas(stats.dailyVolume)}
              </span>
            </div>
            <div className="flex flex-row flex-wrap w-full">
              <Blocks />
              <span className="px-2 text-base">Total Volume:</span>
              <span className="text-base font-bold ">
                {numberWithCommas(stats.totalVolume)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
