"use client";

import Link from "next/link";
import { Separator } from "../ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import Logo from "./Logo";
import { homeRoutes, resourceRoutes, Routes } from "./Router";

export default function AppSidebar({
  active,
  setActive,
}: {
  active?: Routes;
  setActive: (activeLink: Routes) => void;
}) {
  const isLinkActive = (title: Routes) => {
    return active === title;
  };

  const setActiveLink = (link: Routes) => {
    setActive(link);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo setActive={setActive} />
        <Separator className="bg-[color:hsl(var(--combobox-button-primary))]" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {homeRoutes.map((item) => (
                <SidebarMenuItem key="home">
                  <SidebarMenuButton
                    asChild
                    isActive={isLinkActive(item)}
                    onClick={() => setActiveLink(item)}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {resourceRoutes.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isLinkActive(item)}
                    onClick={() => setActiveLink(item)}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Separator className="bg-[color:hsl(var(--combobox-button-primary))]" />
        <div className="flex flex-col items-center gap-0 text-sm">
          <p className="font-bold">Made by SleepyCitrus</p>
          <p>(in-game VexingCitrus)</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
