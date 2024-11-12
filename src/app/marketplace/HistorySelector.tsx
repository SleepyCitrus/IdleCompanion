"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Combobox from "@/components/ui/combobox";
import { Label } from "@/components/ui/label";
import { timeOptions } from "./MarketPage";

export default function HistorySelector({
  allItemNames,
  selectItem,
  setSelectItem,
  selectTime,
  setSelectTime,
}: {
  allItemNames: string[];
  selectItem: string;
  setSelectItem: (i: string) => void;
  selectTime: string;
  setSelectTime: (t: string) => void;
}) {
  return (
    <Card className="w-full">
      <CardContent className="flex pt-6 gap-5">
        <div className="flex flex-col gap-2">
          <Label className="pl-1">Item</Label>
          <Combobox
            options={allItemNames}
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
            className="underline underline-offset-4 text-[color:hsl(var(--link-primary))] hover:text-[color:hsl(var(--link-accent))] font-semibold"
          >
            Uraxy's item list
          </a>{" "}
          and may contain items that don't yet exist, have been
          removed, or cannot be sold.
        </i>
      </CardFooter>
    </Card>
  );
}
