import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-row flex-wrap gap-2 w-full max-h-[420px]">
      <div className="flex flex-col flex-wrap gap-2 w-full">
        <Skeleton className="min-h-[30px] w-full"></Skeleton>
      </div>
      <Skeleton className="w-full min-h-[172px]" />
      <Skeleton className="w-full min-h-[436px]" />
    </div>
  );
}
