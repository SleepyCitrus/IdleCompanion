"use client";

import { Check, ChevronDown } from "lucide-react";

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
import { useMemo, useState } from "react";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function Combobox({
  options,
  value,
  setValue,
  w = "default",
}: {
  options: string[];
  value: string;
  setValue: (v: string) => void;
  w?: "default" | "100px" | "150px" | "200px" | "300px" | "400px";
}) {
  const [open, setOpen] = useState(false);

  const opacityCheck = (option: string) => {
    return value === option ? "opacity-100" : "opacity-0";
  };

  const memoOptions = useMemo(() => {
    return options.map((option) => (
      <CommandItem
        key={option}
        value={option}
        onSelect={(currentValue) => {
          setValue(currentValue);
          setOpen(false);
        }}
      >
        <Check className={cn("mr-2 h-4 w-4", opacityCheck(option))} />
        {option}
      </CommandItem>
    ));
  }, [options]);

  let popoverWidth = w.toString();
  if (popoverWidth === "default") {
    popoverWidth = "100px";
  }
  const popoverClass = `w-[${popoverWidth}] p-0`;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          width={w}
          className={cn(
            "justify-between",
            value === "" ? "text-muted-foreground" : ""
          )}
        >
          {value === "" ? "Select item..." : value}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={popoverClass}>
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>{memoOptions}</CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}