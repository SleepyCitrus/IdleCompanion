import { Title } from "@mantine/core";
import styles from "./HeaderBar.module.css";

export default function HeaderBar() {
  return (
    <div className={styles.header}>
      <Title order={3}>Pretend there's a search bar...</Title>
    </div>
  );
}
