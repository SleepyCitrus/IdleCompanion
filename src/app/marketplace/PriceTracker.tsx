"use client";

import Card from "@/components/common/Card";
import { Item } from "@/database/Item";
import {
  Autocomplete,
  Combobox,
  Input,
  InputBase,
  useCombobox,
} from "@mantine/core";
import { IconChevronDown, IconSwords } from "@tabler/icons-react";
import { useState } from "react";
import { timeRanges } from "./MarketApiUtils";
import PriceHistory from "./PriceHistory";
import styles from "./PriceTracker.module.css";

export default function PriceTracker({ items }: { items: Item[] }) {
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [timeRange, setTimeRange] = useState<string>("7d");

  // Items set-up
  let longestName = "";
  const itemNamesToIds = new Map<string, number>();
  items.forEach((item) => {
    longestName =
      longestName.length > item.name_id.length
        ? longestName
        : item.name_id;
    itemNamesToIds.set(item.name_id, item.internal_id);
  });
  const itemNames = Array.from(itemNamesToIds.keys());
  const swordIcon = <IconSwords size={18} />;

  // Combobox set-up
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const options = timeRanges.map((times) => (
    <Combobox.Option value={times} key={times}>
      {times}
    </Combobox.Option>
  ));
  const chevronIcon = <IconChevronDown size={18} />;

  return (
    <div className={styles.priceTracker}>
      <Card>
        <div className={styles.priceTrackerOptions}>
          <div className={styles.priceTrackerItemSelect}>
            <Autocomplete
              label="Item Name"
              placeholder="Search for an item..."
              leftSection={swordIcon}
              // limit={30}
              data={itemNames}
              onChange={(event) => {
                if (itemNamesToIds.has(event)) {
                  console.log("set selected", event);
                  setSelectedItem(event);
                }
              }}
              comboboxProps={{
                transitionProps: {
                  transition: "fade-down",
                  duration: 200,
                },
                dropdownPadding: 0,
              }}
            />
          </div>

          <div className={styles.priceTrackerTimeSelect}>
            <Combobox
              store={combobox}
              withinPortal={false}
              transitionProps={{
                transition: "fade-down",
                duration: 200,
              }}
              dropdownPadding="0"
              onOptionSubmit={(value) => {
                setTimeRange(value);
                combobox.closeDropdown();
              }}
            >
              <Combobox.Target>
                <InputBase
                  label="Time Range"
                  component="button"
                  type="button"
                  pointer
                  rightSection={chevronIcon}
                  rightSectionPointerEvents="none"
                  onClick={() => combobox.toggleDropdown()}
                >
                  {timeRange || (
                    <Input.Placeholder>Pick value</Input.Placeholder>
                  )}
                </InputBase>
              </Combobox.Target>
              <Combobox.Dropdown>
                <Combobox.Options>{options}</Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
          </div>
        </div>
      </Card>

      <Card>
        <PriceHistory
          itemName={selectedItem}
          itemId={itemNamesToIds.get(selectedItem)}
          timeRange={timeRange}
        />
      </Card>
    </div>
  );
}
