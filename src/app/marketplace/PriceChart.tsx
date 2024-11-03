import { LineChart } from "@mantine/charts";
import { useState } from "react";

export const fakeData = [
  {
    itemId: 7,
    timestamp: "2024-10-28T05:00:00Z",
    lowesSellPrice: 51,
    highestSellPrice: 65,
    averagePrice: 56,
  },
  {
    itemId: 7,
    timestamp: "2024-10-28T06:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 51,
    averagePrice: 50,
  },
  {
    itemId: 7,
    timestamp: "2024-10-28T07:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 51,
    averagePrice: 50,
  },
  {
    itemId: 7,
    timestamp: "2024-10-28T08:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 50,
    averagePrice: 50,
  },
  {
    itemId: 7,
    timestamp: "2024-10-28T09:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 50,
    averagePrice: 50,
  },
  {
    itemId: 7,
    timestamp: "2024-10-28T10:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 50,
    averagePrice: 50,
  },
  {
    itemId: 7,
    timestamp: "2024-10-28T11:00:00Z",
    lowesSellPrice: 51,
    highestSellPrice: 65,
    averagePrice: 62,
  },
  {
    itemId: 7,
    timestamp: "2024-10-28T12:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 65,
    averagePrice: 53,
  },
  {
    itemId: 7,
    timestamp: "2024-10-28T13:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 65,
    averagePrice: 60,
  },
  {
    itemId: 7,
    timestamp: "2024-10-28T14:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 65,
    averagePrice: 55,
  },
  {
    itemId: 7,
    timestamp: "2024-10-28T15:00:00Z",
    lowesSellPrice: 64,
    highestSellPrice: 64,
    averagePrice: 64,
  },
  {
    itemId: 7,
    timestamp: "2024-10-28T16:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 64,
    averagePrice: 57,
  },
  {
    itemId: 7,
    timestamp: "2024-10-28T17:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 64,
    averagePrice: 57,
  },
  {
    itemId: 7,
    timestamp: "2024-10-28T18:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 132,
    averagePrice: 82,
  },
  {
    itemId: 7,
    timestamp: "2024-10-28T19:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 132,
    averagePrice: 115,
  },
  {
    itemId: 7,
    timestamp: "2024-10-28T20:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 50,
    averagePrice: 50,
  },
  {
    itemId: 7,
    timestamp: "2024-10-28T21:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 132,
    averagePrice: 72,
  },
  {
    itemId: 7,
    timestamp: "2024-10-28T22:00:00Z",
    lowesSellPrice: 62,
    highestSellPrice: 132,
    averagePrice: 97,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T00:00:00Z",
    lowesSellPrice: 62,
    highestSellPrice: 62,
    averagePrice: 62,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T01:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 62,
    averagePrice: 59,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T02:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 62,
    averagePrice: 56,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T04:00:00Z",
    lowesSellPrice: 62,
    highestSellPrice: 125,
    averagePrice: 93,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T05:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 131,
    averagePrice: 77,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T06:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 50,
    averagePrice: 50,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T07:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 70,
    averagePrice: 57,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T08:00:00Z",
    lowesSellPrice: 120,
    highestSellPrice: 130,
    averagePrice: 122,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T09:00:00Z",
    lowesSellPrice: 120,
    highestSellPrice: 130,
    averagePrice: 125,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T10:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 130,
    averagePrice: 78,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T11:00:00Z",
    lowesSellPrice: 130,
    highestSellPrice: 130,
    averagePrice: 130,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T12:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 130,
    averagePrice: 70,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T13:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 129,
    averagePrice: 61,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T14:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 50,
    averagePrice: 50,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T15:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 65,
    averagePrice: 62,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T16:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 129,
    averagePrice: 71,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T17:00:00Z",
    lowesSellPrice: 107,
    highestSellPrice: 130,
    averagePrice: 123,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T18:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 50,
    averagePrice: 50,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T19:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 106,
    averagePrice: 59,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T20:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 104,
    averagePrice: 82,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T21:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 78,
    averagePrice: 57,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T22:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 78,
    averagePrice: 58,
  },
  {
    itemId: 7,
    timestamp: "2024-10-29T23:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 78,
    averagePrice: 58,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T00:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 65,
    averagePrice: 58,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T01:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 65,
    averagePrice: 60,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T02:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 65,
    averagePrice: 55,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T03:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 64,
    averagePrice: 58,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T04:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 50,
    averagePrice: 50,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T05:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 50,
    averagePrice: 50,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T06:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 63,
    averagePrice: 58,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T07:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 50,
    averagePrice: 50,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T08:00:00Z",
    lowesSellPrice: 63,
    highestSellPrice: 63,
    averagePrice: 63,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T09:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 60,
    averagePrice: 57,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T10:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 60,
    averagePrice: 56,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T11:00:00Z",
    lowesSellPrice: 60,
    highestSellPrice: 63,
    averagePrice: 62,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T12:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 63,
    averagePrice: 58,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T13:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 63,
    averagePrice: 57,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T14:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 63,
    averagePrice: 56,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T15:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 63,
    averagePrice: 53,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T16:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 50,
    averagePrice: 50,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T17:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 60,
    averagePrice: 52,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T18:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 63,
    averagePrice: 57,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T19:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 60,
    averagePrice: 51,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T20:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 63,
    averagePrice: 56,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T21:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 62,
    averagePrice: 55,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T22:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 62,
    averagePrice: 59,
  },
  {
    itemId: 7,
    timestamp: "2024-10-30T23:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 62,
    averagePrice: 52,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T00:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 63,
    averagePrice: 57,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T01:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 63,
    averagePrice: 54,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T02:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 63,
    averagePrice: 58,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T03:00:00Z",
    lowesSellPrice: 58,
    highestSellPrice: 58,
    averagePrice: 58,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T04:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 50,
    averagePrice: 50,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T05:00:00Z",
    lowesSellPrice: 57,
    highestSellPrice: 58,
    averagePrice: 57,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T06:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 63,
    averagePrice: 58,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T07:00:00Z",
    lowesSellPrice: 62,
    highestSellPrice: 63,
    averagePrice: 62,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T08:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 58,
    averagePrice: 54,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T09:00:00Z",
    lowesSellPrice: 55,
    highestSellPrice: 58,
    averagePrice: 55,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T10:00:00Z",
    lowesSellPrice: 55,
    highestSellPrice: 58,
    averagePrice: 56,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T11:00:00Z",
    lowesSellPrice: 55,
    highestSellPrice: 58,
    averagePrice: 56,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T12:00:00Z",
    lowesSellPrice: 55,
    highestSellPrice: 58,
    averagePrice: 56,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T13:00:00Z",
    lowesSellPrice: 55,
    highestSellPrice: 79,
    averagePrice: 62,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T14:00:00Z",
    lowesSellPrice: 55,
    highestSellPrice: 55,
    averagePrice: 55,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T15:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 55,
    averagePrice: 52,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T16:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 65,
    averagePrice: 55,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T17:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 50,
    averagePrice: 50,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T18:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 50,
    averagePrice: 50,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T19:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 65,
    averagePrice: 55,
  },
  {
    itemId: 7,
    timestamp: "2024-10-31T20:00:00Z",
    lowesSellPrice: 50,
    highestSellPrice: 75,
    averagePrice: 59,
  },
];

interface Price {
  averagePrice: number;
  highestSellPrice: number;
  itemId: number;
  lowesSellPrice: number;
  timestamp: string;
  tradeVolume: number;
}

export default function PriceChart({
  itemId,
  timeRange,
}: {
  itemId?: number;
  timeRange: string;
}) {
  const [prices, setPrices] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   var p: Price[] = [];
  //   setLoading(true);

  //   if (itemId != null && timeRanges.includes(timeRange)) {
  //     console.log(loading);
  //     getPriceHistory(itemId.toString(), timeRange).then((data) => {
  //       data.forEach((history: Price) => {
  //         p.push(history);
  //       });
  //     });
  //     setPrices(p);
  //     setLoading(false);

  //     console.log(prices);
  //   }
  // }, [itemId, timeRange]);

  // var p: Price[] = [];
  // if (itemId != null && timeRanges.includes(timeRange)) {
  //   // getPriceHistory(itemId.toString(), timeRange).then((data) => {
  //   //   data.forEach((history: Price) => {
  //   //     p.push(history);
  //   //   });
  //   // });
  //   const priceHistory = await getPriceHistory(
  //     itemId.toString(),
  //     timeRange
  //   );
  //   priceHistory.forEach((history: Price) => {
  //     p.push(history);
  //   });
  //   setPrices(p);
  // }

  const series = [
    {
      label: "High Price",
      name: "highestSellPrice",
      color: "green.6",
    },
    { label: "Low Price", name: "lowesSellPrice", color: "red.6" },
    { label: "Avg Price", name: "averagePrice", color: "yellow.6" },
  ];

  return (
    <div>
      {/* <LineChart width={750} height={550} data={prices}>
        <CartesianGrid strokeDasharray="3 3" />
      </LineChart> */}
      {/* <div hidden={!loading}>Loading...</div>
      <div hidden={loading} className={styles.chart}> */}
      <LineChart
        h={500}
        w={700}
        data={fakeData}
        dataKey="timestamp"
        series={series}
        curveType="natural"
        withDots={false}
      />
      {/* </div> */}
    </div>
  );
}
