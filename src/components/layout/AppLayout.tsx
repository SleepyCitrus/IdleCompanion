"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import AppHeadbar from "../navigation/AppHeadbar";
import AppSidebar from "../navigation/AppSidebar";
import { allRoutes, Routes } from "../navigation/Router";
import { SidebarProvider } from "../ui/sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  var defaultRoute = allRoutes.find((route) => route.url === pathname);

  const [activeLink, setActiveLink] = useState<Routes | undefined>(
    defaultRoute
  );

  return (
    <SidebarProvider>
      <AppSidebar active={activeLink} setActive={setActiveLink} />
      <div className="flex flex-col w-full h-full max-w-screen-xl">
        <AppHeadbar active={activeLink} />
        <main>
          <div className="flex flex-row flex-wrap gap-2 py-4 px-6 w-full h-full">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
