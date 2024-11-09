import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col h-100 w-full gap-2">
      <Skeleton className="h-6 w-full rounded-md bg-gray-600" />
      <Skeleton className="h-6 w-full rounded-md bg-gray-600" />
    </div>
  );
}
