import { Skeleton } from "@/components/ui/skeleton";

export const LoadingCharacterProfile = () => {
  return (
    <div className="flex flex-row flex-wrap gap-2 w-full">
      <Skeleton className="w-full h-[134px]" />
      <Skeleton className="w-full h-[1671px]" />
    </div>
  );
};
