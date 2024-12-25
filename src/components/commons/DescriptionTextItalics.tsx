import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DescriptionTextMutedProps {
  className?: string;
  children: ReactNode;
}

export default function DescriptionTextItalics({
  className,
  children,
}: DescriptionTextMutedProps) {
  return (
    <i
      className={cn(
        "text-sm text-[color:hsl(var(--stats-text-muted))]",
        className
      )}
    >
      {children}
    </i>
  );
}
