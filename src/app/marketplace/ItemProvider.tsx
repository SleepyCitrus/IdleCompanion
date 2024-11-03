"use client";

import { createContext, useState } from "react";

const ItemContext = createContext<string[]>([]);

export async function getAllItems(): Promise<string[]> {
  const response = await fetch(
    "https://idleclans.uraxys.dev/api/items/all"
  );
  const items = await response.json();

  console.log(items);

  return items;
}

export default async function ItemProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [allItems, setAllItems] = useState<string[]>([]);
  setAllItems(await getAllItems());

  return (
    // <ItemContext.Provider value={allItems}>
    { children }
    // </ItemContext.Provider>
  );
}
