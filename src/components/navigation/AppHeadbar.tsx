"use client";

import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import Logo from "./Logo";

export default function AppHeadbar() {
  const { isMobile } = useSidebar();

  return <div className="">{isMobile ? <NavBar /> : null}</div>;
}

function NavBar() {
  return (
    <div
      className="flex flex-row px-4 py-2 gap-2 items-center bg-[color:hsl(var(--sidebar-background))]"
      id="nav-headbar"
    >
      <SidebarTrigger />
      <Logo />
    </div>
  );
}
