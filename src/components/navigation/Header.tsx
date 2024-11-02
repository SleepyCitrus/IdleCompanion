import { Group } from "@mantine/core";
import { IconTrees } from "@tabler/icons-react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Group className={styles.headerGroup} gap="xs">
        <span className={styles.headerIconBorder}>
          <IconTrees className={styles.headerIcon} />
        </span>
        <h3>Idle Clans Companion</h3>
      </Group>
    </div>
  );
}
