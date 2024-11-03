import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const searchIcon = <IconSearch stroke={1} />;

  return (
    <TextInput
      rightSection={searchIcon}
      placeholder="Search"
      classNames={{ wrapper: styles.searchBar }}
    />
  );
}
