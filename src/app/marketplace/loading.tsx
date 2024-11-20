import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-row flex-wrap gap-2 w-full max-h-[420px]">
      {/* Title */}
      <Skeleton className="h-[60px] w-full" />

      {/* Description */}
      <Skeleton className="min-h-[40px] w-full"></Skeleton>

      {/* HistorySelector */}
      <Skeleton className="w-full min-h-[172px]" />

      {/* TradeStats */}
      <Skeleton className="w-full min-h-[234px]" />

      {/* PriceHistory */}
      <Skeleton className="w-full min-h-[486px]" />
    </div>
  );
}
