import { Title } from "@mantine/core";
import { IconTrees } from "@tabler/icons-react";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <span className={styles.logoIconBorder}>
        <IconTrees className={styles.logoIcon} />
      </span>
      <Title order={4}>Idle Companion</Title>
    </div>
  );
}
