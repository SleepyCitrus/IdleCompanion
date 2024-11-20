"use client";

import Link from "next/link";
import { useTitleContext } from "../providers/TitleProvider";
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
  useSidebar,
} from "../ui/sidebar";
import Logo from "./Logo";
import { homeRoutes, resourceRoutes, Routes } from "./Router";

export default function AppSidebar() {
  const { title, setTitle } = useTitleContext();
  const { isMobile } = useSidebar();

  const isLinkActive = (link: Routes) => {
    return title === link.title;
  };

  // Sidebar when larger than mobile displays
  return (
    <Sidebar>
      {!isMobile ? (
        <SidebarHeader>
          <Logo />
          <Separator className="bg-[color:hsl(var(--combobox-button-primary))]" />
        </SidebarHeader>
      ) : (
        <div className="p-2"></div>
      )}
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
                    onClick={() => setTitle(item.title)}
                  >
                    <Link href={item.url}>
                      <item.icon size={100} />
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
                    onClick={() => setTitle(item.title)}
                  >
                    <Link href={item.url}>
                      <item.icon width={40} />
                      <span className="text-base">{item.title}</span>
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
