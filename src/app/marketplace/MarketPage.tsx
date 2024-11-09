"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Combobox from "@/components/ui/combobox";
import { Label } from "@/components/ui/label";
import { useMemo, useState } from "react";
import { Item } from "../../database/Item";

const timeOptions = ["1d", "7d", "30d", "1y"];

export default function MarketPage({
  allItems,
}: {
  allItems: Item[];
}) {
  const [selectItem, setSelectItem] = useState("");
  const [selectTime, setSelectTime] = useState("7d");
  console.log("allitems", allItems);
  const getItemNames = (allItems: Item[]) =>
    allItems.map((item) => item.name_id);
  const items = useMemo(() => getItemNames(allItems), [allItems]);

  return (
    <div className="flex flex-row flex-wrap gap-2 w-full h-full">
      <span className="basis-full py-4">
        Select an item to view it's price history, highest and lowest
        price points, and overall trade volume.
      </span>

      <Card className="w-full">
        <CardContent className="flex pt-6 gap-5">
          <div className="flex flex-col gap-2">
            <Label className="pl-1">Item</Label>
            <Combobox
              options={items}
              value={selectItem}
              setValue={setSelectItem}
              w="400px"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="pl-1">Time Range</Label>
            <Combobox
              options={timeOptions}
              value={selectTime}
              setValue={setSelectTime}
              w="150px"
            />
          </div>
        </CardContent>
        <CardFooter>
          <i className="text-sm">
            The list of items is queried from{" "}
            <a
              href="https://idleclans.uraxys.dev/api/items/all"
              target="_blank"
              className="underline underline-offset-4 text-[color:hsl(var(--link-primary))] hover:text-[color:hsl(var(--link-accent))] "
            >
              Uraxy's dev items
            </a>{" "}
            and may contain items that don't yet exist, have been
            removed, or cannot be sold.
          </i>
        </CardFooter>
      </Card>
    </div>
  );
}
