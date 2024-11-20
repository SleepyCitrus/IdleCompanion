import { Card, CardContent } from "@/components/ui/card";
import { CircleAlert } from "lucide-react";

export default function NoHistoryWarning() {
  return (
    <div className="w-full" id="no-history-warning">
      <Card className="bg-[color:hsl(var(--alert-background))]">
        <CardContent>
          <div className="flex flex-row pt-6">
            <CircleAlert />
            <div
              className="flex flex-col pl-4"
              id="no-history-warning-message"
            >
              <span className="">
                No history was found for this item. If this is a new or
                uncommon item it may not have a trading history yet.
              </span>
              {/* <div className="flex flex-row pl-4">
                <Dot className="flex-shrink-0" />
                <span>
                  This is a new item and does not have a trading
                  history yet.
                </span>
              </div>
              <div className="flex flex-row pl-4">
                <Dot className="flex-shrink-0" />
                <span>This item is untradeable.</span>
              </div> */}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
