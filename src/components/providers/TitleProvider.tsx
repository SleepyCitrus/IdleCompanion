"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useState } from "react";
import { allRoutes } from "../navigation/Router";

interface ITitleContext {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const TitleContext = createContext<ITitleContext | null>(null);

export function useTitleContext() {
  const context = useContext(TitleContext);
  if (!context) {
    throw new Error("useTitle must be used within a TitleProvider.");
  }

  return context;
}

export function TitleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  let defaultRoute = allRoutes.find((route) => route.url === pathname);
  let defaultTitle = defaultRoute ? defaultRoute.title : "";
  const [title, setTitle] = useState(defaultTitle);

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}
