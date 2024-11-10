import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    // <div className="flex basis-full w-full">
    //   <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    // </div>
    <div className="flex flex-row flex-wrap gap-2 w-full max-h-[420px]">
      <div className="flex flex-col flex-wrap gap-2 w-full">
        <Skeleton className="min-h-[30px] max-w-[220px]" />
        <Skeleton className="min-h-[30px] max-w-[173px]" />
      </div>
      <Skeleton className="w-full h-[300px]" />
    </div>
  );
}

{
  /* <>
  <div className="p-6 flex flex-wrap gap-2 pt-6">
    <div>
      <h4>
        <Skeleton className="w-[104px] max-w-full" />
      </h4>
      <span></span>
      <span>
        <Skeleton className="w-[16px] max-w-full" />
      </span>
    </div>
    <h4 className="basis-full">
      <Skeleton className="w-[152px] max-w-full" />
    </h4>
    <div className="recharts-responsive-container">
      <div>
        <SVGSkeleton className="w-[1182px] h-[400px]" />
      </div>
    </div>
  </div>
</>; */
}
