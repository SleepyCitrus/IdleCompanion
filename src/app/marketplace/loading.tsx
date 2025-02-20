import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-row flex-wrap gap-2 w-full">
      {/* Title */}
      <Skeleton className="h-[68px] w-full" />

      {/* Description */}
      <Skeleton className="min-h-[40px] w-full"></Skeleton>

      {/* HistorySelector */}
      <Skeleton className="w-full min-h-[152px]" />

      {/* TradeStats */}
      <Skeleton className="w-full min-h-[258px]" />

      {/* PriceHistory */}
      <Skeleton className="w-full min-h-[486px]" />
    </div>
  );
}
