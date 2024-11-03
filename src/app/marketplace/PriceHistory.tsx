import { Text } from "@mantine/core";
import { Suspense } from "react";
import PriceChart from "./PriceChart";
import styles from "./PriceHistory.module.css";

export default function PriceHistory({
  itemName,
  itemId,
  timeRange,
}: {
  itemName: string;
  itemId?: number;
  timeRange: string;
}) {
  return (
    <div className={styles.priceHistory}>
      <div className={styles.priceDescriptions}>
        <Text size="lg" fw={500}>
          Prices
        </Text>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <PriceChart itemId={itemId} timeRange={timeRange} />
      </Suspense>
    </div>
  );
}
