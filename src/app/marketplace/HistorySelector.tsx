"use client";

import DescriptionTextItalics from "@/components/commons/DescriptionTextItalics";
import Hyperlink from "@/components/commons/Hyperlink";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { VirtualizedCombobox } from "@/components/ui/combobox";
import { Label } from "@/components/ui/label";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
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
  const { isMobile } = useSidebar();

  return (
    <Card className="w-full">
      <CardContent className={cn("flex gap-5 flex-wrap")}>
        <div className="flex flex-col gap-2">
          <Label className="pl-1">Item</Label>
          {/* <Combobox
            options={allItemNames}
            value={selectItem}
            setValue={setSelectItem}
            w={ComboboxWidths["320px"]}
            mobile={isMobile}
          /> */}
          <VirtualizedCombobox
            options={allItemNames}
            value={selectItem}
            setValue={setSelectItem}
            height={isMobile ? "135px" : "300px"}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="pl-1">Time Range</Label>
          {/* <Combobox
            options={timeOptions}
            value={selectTime}
            setValue={setSelectTime}
            w={ComboboxWidths["150px"]}
            mobile={isMobile}
          /> */}
          <VirtualizedCombobox
            options={timeOptions}
            value={selectTime}
            setValue={setSelectTime}
            searchPlaceholder="Search times..."
            width="150px"
          />
        </div>
      </CardContent>
      <CardFooter>
        <DescriptionTextItalics>
          The list of items is queried from{" "}
          <Hyperlink
            href="https://idleclans.uraxys.dev/api/items/all"
            blank
            text="Uraxy's item list"
          />{" "}
          and may contain items that don't exist yet, have been
          removed, or cannot be sold.
        </DescriptionTextItalics>
      </CardFooter>
    </Card>
  );
}
