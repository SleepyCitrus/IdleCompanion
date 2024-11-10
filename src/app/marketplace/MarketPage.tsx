"use client";

import { useState } from "react";
import { Item } from "../../database/Item";
import HistorySelector from "./HistorySelector";
import PriceHistory from "./PriceHistory";

export const timeOptions = ["1d", "7d", "30d", "1y"];

export default function MarketPage({
  allItems,
}: {
  allItems: Item[];
}) {
  const [selectItem, setSelectItem] = useState("");
  const [selectTime, setSelectTime] = useState("7d");
  console.log("allitems", allItems);

  return (
    <div className="flex flex-row flex-wrap gap-2 w-full h-full">
      <span className="basis-full pb-4">
        Select an item to view it's price history, highest and lowest
        price points, and overall trade volume.
      </span>

      <HistorySelector
        allItems={allItems}
        selectItem={selectItem}
        setSelectItem={setSelectItem}
        selectTime={selectTime}
        setSelectTime={setSelectTime}
      />

      <PriceHistory
        itemName={selectItem}
        timeRange={selectTime}
        allItems={allItems}
      />
    </div>
  );
}
