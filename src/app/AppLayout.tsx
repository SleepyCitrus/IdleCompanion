"use client";

import NavBar from "@/components/navigation/NavBar";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "./AppLayout.module.css";

export default function AppPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navBarToggled, { toggle: toggleNavBar }] = useDisclosure();

  return (
    <div className={styles.appLayout}>
      <NavBar></NavBar>
      {children}
    </div>
  );
}
