"use client";

import { NavLink } from "@mantine/core";
import styles from "./NavBar.module.css";
import { IconBuildingStore, IconFall } from "@tabler/icons-react";
import Header from "./Header";
import { useState } from "react";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("");

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
    return activeLink === label;
  };

  const resourceLinks = resourceLinkData.map((data, index) => (
    <NavLink
      classNames={{
        root: styles.navLinkWrapper,
      }}
      key={"resourceLinkId-" + index}
      href={data.link}
      label={data.label}
      leftSection={<data.icon stroke={2} />}
      variant="filled"
      active={highlightActive(data.label)}
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(data.label);
      }}
    />
  ));

  const fakeLinks = fakeLinkData.map((data, index) => (
    <NavLink
      classNames={{
        root: styles.navLinkWrapper,
      }}
      key={"fakeLinkId-" + index}
      href={data.link}
      label={data.label}
      leftSection={<data.icon stroke={2} />}
      variant="filled"
      active={highlightActive(data.label)}
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(data.label);
      }}
    />
  ));

  return (
    <nav className={styles.navBar}>
      <Header></Header>
      <div className={styles.navBarMain}>
        <span className={styles.navBarGroupLabel}>Resources</span>

        <div className={styles.navBarGroup}>{resourceLinks}</div>

        <span className={styles.navBarGroupLabel}>Account</span>

        <div className={styles.navBarGroup}>{fakeLinks}</div>
      </div>
    </nav>
  );
}
