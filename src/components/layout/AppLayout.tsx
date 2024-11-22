"use client";

import AppHeadbar from "../navigation/AppHeadbar";
import AppSidebar from "../navigation/AppSidebar";
import { SidebarProvider } from "../ui/sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col w-full h-full max-w-screen-xl">
        <main>
          <AppHeadbar />
          <div
            className="flex flex-row flex-wrap gap-2 py-4 px-2 min-w-[--min-supported-screen] sm:px-6 w-full h-full"
            id="app-layout-wrapper"
          >
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
