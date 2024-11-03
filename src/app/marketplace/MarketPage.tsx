import Card from "@/components/common/Card";
import SearchBar from "@/components/common/SearchBar";
import { Text } from "@mantine/core";
import { Item } from "../../database/Item";
import styles from "./MarketPage.module.css";
import PriceTracker from "./PriceTracker";

export default async function MarketPage({
  items,
}: {
  items: Item[];
}) {
  return (
    <div className={styles.marketPage}>
      <Card>
        <div className={styles.forFun}>
          <SearchBar />
          <div>hi sujin</div>
        </div>
      </Card>
      <Text size="xl" fw={500}>
        Marketplace
      </Text>
      <Text size="sm" fw={400}>
        Select an item and a time range to see it's price history.
      </Text>

      <PriceTracker items={items} />
    </div>
  );
}
