"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Check, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

type Option = {
  value: string;
  label: string;
};

interface VirtualizedCommandProps {
  height: string;
  options: Option[];
  placeholder: string;
  selectedOption: string;
  onSelectOption?: (option: string) => void;
}

const VirtualizedCommand = ({
  height,
  options,
  placeholder,
  selectedOption,
  onSelectOption,
}: VirtualizedCommandProps) => {
  const [filteredOptions, setFilteredOptions] =
    useState<Option[]>(options);
  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: filteredOptions.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 32,
    overscan: 5,
  });

  const virtualOptions = virtualizer.getVirtualItems();

  const searchSubstring = (option: string, search: string) => {
    if (!search?.length) {
      return true;
    }

    let letters = [...option];
    return [...search].every((x) => {
      if (x === " ") {
        return true;
      }
      let index = letters.indexOf(x);
      if (~index) {
        letters.splice(index, 1);
        return true;
      }
    });
  };

  const handleSearch = (search: string) => {
    setFilteredOptions(
      options.filter((option) =>
        searchSubstring(
          option.value.toLowerCase(),
          search.toLowerCase()
        )
      )
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
    }
  };

  return (
    <Command shouldFilter={false}>
      <CommandInput
        onValueChange={handleSearch}
        placeholder={placeholder}
      />
      <CommandEmpty>No item found.</CommandEmpty>
      <CommandGroup
        ref={parentRef}
        style={{
          maxHeight: height,
          width: "100%",
          overflow: "auto",
        }}
      >
        <div
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {virtualOptions.map((virtualOption) => (
            <CommandItem
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualOption.size}px`,
                transform: `translateY(${virtualOption.start}px)`,
              }}
              key={filteredOptions[virtualOption.index].value}
              value={filteredOptions[virtualOption.index].value}
              onSelect={onSelectOption}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  selectedOption ===
                    filteredOptions[virtualOption.index].value
                    ? "opacity-100"
                    : "opacity-0"
                )}
              />
              {filteredOptions[virtualOption.index].label}
            </CommandItem>
          ))}
        </div>
      </CommandGroup>
    </Command>
  );
};

interface VirtualizedComboboxProps {
  options: string[];
  value: string;
  setValue: (v: string) => void;
  searchPlaceholder?: string;
  width?: string;
  height?: string;
}

export function VirtualizedCombobox({
  options,
  value,
  setValue,
  searchPlaceholder = "Search items...",
  width = "340px",
  height = "300px",
}: VirtualizedComboboxProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="combobox"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "justify-between",
            value === "" ? "text-muted-foreground" : ""
          )}
          style={{
            width: width,
          }}
        >
          {value
            ? options.find((option) => option === value)
            : searchPlaceholder}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" style={{ width: width }}>
        <VirtualizedCommand
          height={height}
          options={options.map((option) => ({
            value: option,
            label: option,
          }))}
          placeholder={searchPlaceholder}
          selectedOption={value}
          onSelectOption={(currentValue) => {
            setValue(currentValue);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

export enum ComboboxWidths {
  default = "w-fit",
  "100px" = "w-[100px]",
  "150px" = "w-[150px]",
  "200px" = "w-[200px]",
  "300px" = "w-[300px]",
  "320px" = "w-[320px]",
  "350px" = "w-[350px]",
  "400px" = "w-[400px]",
}

export default function Combobox({
  options,
  value,
  setValue,
  w = ComboboxWidths.default,
  mobile = false,
}: {
  options: string[];
  value: string;
  setValue: (v: string) => void;
  w?: ComboboxWidths;
  mobile?: boolean;
}) {
  const [open, setOpen] = useState(false);

  const opacityCheck = (option: string) => {
    return value === option ? "opacity-100" : "opacity-0";
  };

  const commandListClass = mobile ? `max-h-[140px]` : `max-h-[300px]`;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="combobox"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "justify-between",
            value === "" ? "text-muted-foreground" : "",
            w
          )}
        >
          {value === "" ? "Select item..." : value}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("p-0", w)}>
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList className={cn(commandListClass)}>
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>
              {/* <ScrollArea> */}
              {options.map((option) => (
                <CommandItem
                  key={option}
                  value={option}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn("h-4 w-4", opacityCheck(option))}
                  />
                  {option}
                </CommandItem>
              ))}
              {/* </ScrollArea> */}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
