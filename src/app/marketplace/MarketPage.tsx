"use client";

import PageTitle from "@/components/commons/PageTitle";
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

  const allItemNames: string[] = [];
  const itemNamesToId = new Map<string, number>();

  allItems.forEach((item) => {
    allItemNames.push(item.name_id);
    itemNamesToId.set(item.name_id, item.internal_id);
  });

  return (
    <div className="flex flex-row flex-wrap gap-2 w-full h-full">
      <PageTitle />

      <span className="basis-full pb-4">
        Select an item to view it's price history, highest and lowest
        price points, and overall trade volume.
      </span>

      <HistorySelector
        allItemNames={allItemNames}
        selectItem={selectItem}
        setSelectItem={setSelectItem}
        selectTime={selectTime}
        setSelectTime={setSelectTime}
      />

      <PriceHistory
        itemName={selectItem}
        timeRange={selectTime}
        itemNamesToId={itemNamesToId}
      />
    </div>
  );
}
