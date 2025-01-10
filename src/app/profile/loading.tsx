import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-row flex-wrap gap-2 w-full">
      {/* Title */}
      <Skeleton className="h-[60px] w-full" />

      {/* Description */}
      <Skeleton className="min-h-[40px] w-full"></Skeleton>

      {/* CharacterSelect */}
      <Skeleton className="w-full min-h-[146px]" />

      {/* Profile */}
      <Skeleton className="w-full min-h-[134px]" />

      {/* Upgrades */}
      <Skeleton className="w-full min-h-[155px]" />

      {/* Boss Clears */}
      <Skeleton className="w-full min-h-[131px]" />
    </div>
  );
}
