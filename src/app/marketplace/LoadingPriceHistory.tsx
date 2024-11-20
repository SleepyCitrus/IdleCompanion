import { Skeleton } from "@/components/ui/skeleton";

export const LoadingPriceHistory = () => {
  return (
    <div className="flex flex-row flex-wrap gap-2 w-full">
      <Skeleton className="w-full h-[234px]" />
      <Skeleton className="w-full h-[486px]" />
    </div>
  );
};
