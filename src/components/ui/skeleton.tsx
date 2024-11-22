import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-xl bg-skeleton/20 ",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
