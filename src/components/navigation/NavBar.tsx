"use client";

import { NavLink, Text } from "@mantine/core";
import { IconBuildingStore, IconFall } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname.slice(1));

  const resourceLinkData = [
    { link: "", label: "Marketplace", icon: IconBuildingStore },
    { link: "", label: "Dummy Link", icon: IconFall },
    { link: "", label: "Second Dummy", icon: IconFall },
    { link: "", label: "Dummy Link 3", icon: IconFall },
  ];

  const fakeLinkData = [
    { link: "", label: "Faker", icon: IconFall },
    { link: "", label: "Faker 2", icon: IconFall },
  ];

  const highlightActive = (label: string) => {
    return activeLink === label.toLowerCase();
  };

  const resourceLinks = resourceLinkData.map((data, index) => {
    var labelId = data.label.toLowerCase();
    return (
      <NavLink
        classNames={{
          root: styles.navLinkWrapper,
          label: styles.navLinkText,
        }}
        key={"resourceLinkId-" + labelId}
        href={data.link}
        label={data.label}
        leftSection={<data.icon stroke={2} />}
        variant="filled"
        active={highlightActive(labelId)}
        onClick={(event) => {
          event.preventDefault();
          setActiveLink(labelId);
        }}
      />
    );
  });

  const fakeLinks = fakeLinkData.map((data, index) => {
    var labelId = data.label.toLowerCase();
    return (
      <NavLink
        classNames={{
          root: styles.navLinkWrapper,
          label: styles.navLinkText,
        }}
        key={"fakeLinkId-" + labelId}
        href={data.link}
        label={data.label}
        leftSection={<data.icon stroke={2} />}
        variant="filled"
        active={highlightActive(labelId)}
        onClick={(event) => {
          event.preventDefault();
          setActiveLink(labelId);
        }}
      />
    );
  });

  return (
    <nav className={styles.navBar}>
      <Logo />
      <div className={styles.navBarMain}>
        <Text className={styles.navBarGroupLabel}>Resources</Text>

        <div className={styles.navBarGroup}>{resourceLinks}</div>

        <Text className={styles.navBarGroupLabel}>Account</Text>

        <div className={styles.navBarGroup}>{fakeLinks}</div>
      </div>
    </nav>
  );
}
