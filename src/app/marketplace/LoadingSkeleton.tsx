import { Skeleton } from "@/components/ui/skeleton";

export const LoadingPriceHistory = () => {
  return (
    <div className="flex flex-row flex-wrap gap-2 w-full max-h-[436px]">
      <Skeleton className="h-[28px] w-[125px]" />
      <Skeleton className="w-full h-[350px]" />
    </div>
  );
};
