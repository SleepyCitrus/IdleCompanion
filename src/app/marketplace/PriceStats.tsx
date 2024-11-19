import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CircleChevronDown, CircleChevronUp } from "lucide-react";
import { PriceWithTimeNum } from "./PriceHistory";

export default function PriceStats({
  prices,
}: {
  prices: PriceWithTimeNum[];
}) {
  // useEffect();

  return (
    <Card className="flex basis-full" id="price-stats-card">
      <CardContent className="pt-6 w-full">
        <div className="flex flex-row flex-wrap gap-2 w-full">
          <div className="basis-full">
            <h3>Price Stats</h3>
          </div>
          <CircleChevronUp color="hsl(var(--chart-price-hi))" />
          <Label> hi </Label>
          <CircleChevronDown color="hsl(var(--chart-price-lo))" />
          <Label> hi </Label>
        </div>
      </CardContent>
    </Card>
  );
}
