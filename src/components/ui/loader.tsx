import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

export default function Loader({ className }: { className?: string }) {
  return (
    <div className="w-full h-full justify-center">
      <LoaderCircle className={cn("animate-spin", className)} />
    </div>
  );
}
